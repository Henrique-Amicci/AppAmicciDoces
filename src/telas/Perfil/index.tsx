import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { supabase } from "../../lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Texto from "../../componentes/Texto";
import styles from "./estilosPerfil";

const Stack = createNativeStackNavigator();

// Tela inicial do Perfil

function TelaPrincipalPerfil({ navigation }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={[styles.button, styles.buttonLogin]}
      >
        <Texto style={styles.textoBotao}>Entrar</Texto>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Cadastro")}
        style={[styles.button, styles.buttonCadastrar]}
      >
        <Texto style={styles.textoBotao}>Cadastrar</Texto>
      </TouchableOpacity>
    </View>
  );
}


// Tela de Login

function TelaLogin({ navigation, onLoggedIn }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password: senha });
    if (error) Alert.alert("Erro", error.message);
    else {
      Alert.alert("Sucesso", "Logado com sucesso!");
      onLoggedIn();
    }
  };

  return (
    <View style={styles.container}>
      <Texto style={styles.text}>Email</Texto>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder="Digite seu email"
      />

      <Texto style={styles.text}>Senha</Texto>
      <TextInput
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
        placeholder="Digite sua senha"
      />

      <TouchableOpacity onPress={login} style={[styles.button, styles.buttonLogin]}>
        <Texto style={styles.textoBotao}>Entrar</Texto>
      </TouchableOpacity>
    </View>
  );
}


//Tela de Cadastro

function TelaCadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrar = async () => {
    const { error } = await supabase.auth.signUp({ email, password: senha });
    if (error) Alert.alert("Erro", error.message);
    else Alert.alert("Sucesso", "Cadastro enviado! Verifique seu email.");
  };

  return (
    <View style={styles.container}>
      <Texto style={styles.text}>Email</Texto>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder="Digite seu email"
      />

      <Texto style={styles.text}>Senha</Texto>
      <TextInput
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
        placeholder="Digite sua senha"
      />

      <TouchableOpacity onPress={cadastrar} style={[styles.button, styles.buttonCadastrar]}>
        <Texto style={styles.textoBotao}>Cadastrar</Texto>
      </TouchableOpacity>
    </View>
  );
}


function TelaUsuarioLogado({ session, setSession }: any) {
  const deslogar = async () => {
    await supabase.auth.signOut();
    await AsyncStorage.removeItem("Perfil"); 
    setSession(null); // volta para tela inicial do Perfil
  };

  return (
    <View style={styles.container}>
      <Texto style={[styles.text, { marginBottom: 20 }]}>
        Usuário logado: {session.user.email}
      </Texto>

      <TouchableOpacity onPress={deslogar} style={[styles.button, styles.buttonDeslogar]}>
        <Texto style={styles.textoBotao}>Deslogar</Texto>
      </TouchableOpacity>
    </View>
  );
}

export default function Perfil() {
  const [session, setSession] = useState<any>(null);

  const handleLoggedIn = () => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => setSession(session));
    return () => listener.subscription.unsubscribe();
  }, []);

  if (session && session.user) {
    return <TelaUsuarioLogado session={session} setSession={setSession} />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Principal" component={TelaPrincipalPerfil} options={{ title: "Perfil" }} />
      <Stack.Screen name="Login">
        {(props) => <TelaLogin {...props} onLoggedIn={handleLoggedIn} />}
      </Stack.Screen>
      <Stack.Screen name="Cadastro" component={TelaCadastro} options={{ title: "Cadastrar" }} />
    </Stack.Navigator>
  );
}
