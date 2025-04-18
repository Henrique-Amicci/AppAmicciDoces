import React from "react";
import {StatusBar, StyleSheet, ScrollView, Image} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

import Texto from "../componentes/Texto";

export default function SobreNos(){


    return <ScrollView style={estilos.fundo}>
        <StatusBar />
        <Image source={require('../../assets/logo.png')} style={estilos.logo} resizeMode="contain"/>
        <Texto style={estilos.titulo}>
            Lista De Desejos
        </Texto>
        <Texto style={estilos.texto_sobre}>
         🚧🚧🚧EM CONSTRUÇÃO AGUARDE🚧🚧🚧
        </Texto>
    </ScrollView>
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "purple",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center",
    },
    texto_sobre:{
        color: "white",
    },
    titulo: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
})
