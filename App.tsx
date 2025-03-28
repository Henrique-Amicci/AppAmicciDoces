import React from "react";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Ionicons from 'react-native-vector-icons/Ionicons';

import SobreNos from "./src/telas/SobreNos";
import ListaDesejo from "./src/telas/ListaDesejo"; 
import Perfil from "./src/telas/Perfil";
import Produtos from "./src/telas/Produtos";

const Tab = createBottomTabNavigator();


function Menu() {
  return<Tab.Navigator 
              screenOptions={({route})=>({
                  tabBarIcon: ({focused, color, size})=>{
                    let iconName;

                    if(route.name ==="Sobre Nós"){
                      iconName = focused
                      ? 'paw'
                      : 'paw-outline';
                    }
                    if(route.name ==="Lista de Desejos"){
                      iconName = focused
                      ? 'heart'
                      : 'heart-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                  },
                  tabBarActiveTintColor:'purple',
                  tabBarInactiveTintColor:'gray',
                  headerShown: false,
              })}>
          <Tab.Screen name="Sobre Nós" component={SobreNos} />
          <Tab.Screen name="Produtos" component={Produtos} />
          <Tab.Screen name="Lista de Desejos" component={ListaDesejo} />
          <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
}

export default function App() {

//Config da fonte para o app
  const [fonteCarregada] = useFonts({"FonteRegular": Montserrat_400Regular,
                                      "FonteBold": Montserrat_700Bold});

  //Verifica se a fonte foi carregada, se não, não exibe nada
  if(!fonteCarregada){
    return <View/>
  }

  return <NavigationContainer>
            <Menu />
        </NavigationContainer>
}