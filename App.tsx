import React from "react";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import SobreNos from "./src/telas/SobreNos"; 
import Produto from "./src/telas/Produtos";
import MockProdutos from "./src/mocks/ListaProduto";
function  MenuProdutos(){
  return <Produto {...MockProdutos}/>
}
// Configuração do Menu
const Tab = createBottomTabNavigator();
function Menu(){
  return <Tab.Navigator screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName: string;
                if(route.name === "Sobre Nós"){
                  iconName = focused
                  ? 'home'
                  : 'home-outline'
                }else if(route.name === "Produtos"){
                  iconName = focused
                  ? 'car-sport'
                  : 'car-sport-outline'
                }else if(route.name === "Lista de Desejos"){
                  iconName = focused
                  ? 'list'
                  : 'list-outline'
                }else if(route.name === "Perfil"){
                  iconName = focused
                  ? 'person-circle'
                  : 'person-circle-outline'
                }
                return <Ionicons name={iconName} size={size} color={color}/>
              },
              tabBarActiveTintColor: 'purple',
              tabBarInactiveTintColor: 'gray',
              headerShown: false,                
            })}>
            <Tab.Screen name="Sobre Nós" component={SobreNos}/>
            <Tab.Screen name="Produtos" component={MenuProdutos}/>
            <Tab.Screen name="Lista de Desejos" component={SobreNos}/>
            <Tab.Screen name="Perfil" component={SobreNos}/>
        </Tab.Navigator>
}
export default function App() {
  // Configuração da fonte para o app
  const [fonteCarregada] = useFonts({"FonteRegular": Montserrat_400Regular, "FonteNegrito": Montserrat_700Bold});
  // Verifica se a fonte foi carregada, se não, não exibe nada
  if(!fonteCarregada){
    return <View/>
  }
  return <NavigationContainer>
    <Menu/>
  </NavigationContainer>
}