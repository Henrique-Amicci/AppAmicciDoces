import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useAudioPlayer } from "expo-audio";

import { supabase } from "./src/lib/supabase";
import Auth from "./src/componentes/Auth"; // caso queira manter componente global
import SobreNos from "./src/telas/SobreNos";
import Produto from "./src/telas/Produtos";
import MockProdutos from "./src/mocks/listaProduto";
import ListaDesejo from "./src/telas/ListaDesejos";
import Perfil from "./src/telas/Perfil";
import Texto from "./src/componentes/Texto";


// Audio Player Component

function MenuAudio() {
  const audioSource = require("./assets/RIP_MAO_ZEDONG_HOSTED_BY馬爾瓦多666DJ.mp3");
  const player = useAudioPlayer(audioSource);

  const onOff = () => {
    if (player.playing) player.pause();
    else {
      if (player.currentTime === player.duration) player.seekTo(0);
      player.play();
    }
  };

  return (
    <View style={{ position: "absolute", bottom: 20, right: 20 }}>
      <Texto onPress={onOff}>🎧 On/Off</Texto>
    </View>
  );
}


function MenuProdutos() {
  return <Produto {...MockProdutos} />;
}

const Tab = createBottomTabNavigator();

function Menu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          switch (route.name) {
            case "Sobre Nós":
              iconName = focused ? "storefront" : "storefront-outline";
              break;
            case "Produtos":
              iconName = focused ? "list" : "list-outline";
              break;
            case "Lista de Desejos":
              iconName = focused ? "heart" : "heart-outline";
              break;
            case "Perfil":
              iconName = focused ? "person" : "person-outline";
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Sobre Nós" component={SobreNos} />
      <Tab.Screen name="Produtos" component={MenuProdutos} />
      <Tab.Screen name="Lista de Desejos" component={ListaDesejo} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}


export default function App() {

  const [fonteCarregada] = useFonts({
    FonteRegular: Montserrat_400Regular,
    FonteBold: Montserrat_700Bold,
  });

  if (!fonteCarregada) return <View />; 

  return (
    <NavigationContainer>
      <Menu />
    {/*  <MenuAudio /> */}
    </NavigationContainer>
  );
}
