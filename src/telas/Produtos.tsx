import React from "react";
import {StatusBar, StyleSheet, ScrollView, Image} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

import Texto from "../componentes/Texto";

export default function SobreNos(){

    //Indica o vídeo e coloca ele em loop
    const player = useVideoPlayer('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', player => {
        player.loop = true,
        player.play()
    })

    return <ScrollView style={estilos.fundo}>
        <StatusBar />
        <Image source={require('../../assets/logo.png')} style={estilos.logo} resizeMode="contain"/>
        <Texto style={estilos.titulo}>
            Produtos
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
