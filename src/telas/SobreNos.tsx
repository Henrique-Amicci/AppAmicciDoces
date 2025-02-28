import React from "react";
import {Text, StatusBar, StyleSheet, View, Image} from "react-native";

import Texto from "../componentes/Texto";

export default function SobreNos(){
    return <View style={estilo.fundo}>
    <StatusBar/>
    <Image source={require('../../assets/LEGO_logo.svg.png')}style={estilo.logo} resizeMode="contain"></Image>
    <Texto>Hello World!</Texto>
    </View>
}

const estilo = StyleSheet.create({
    fundo: {
        backgroundColor: "purple",
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center"
    }
})