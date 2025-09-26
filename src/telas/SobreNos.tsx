import React from "react";
import {StatusBar, StyleSheet, ScrollView, Image} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

import Texto from "../componentes/Texto";

export default function SobreNos(){

// Indica o video e coloca ele em loop
    const player = useVideoPlayer(require('../../assets/videoBolo.mp4'),player => {
        player.loop = true,
        player.play()
});

    return <ScrollView style={estilos.fundo}>
        <StatusBar />
        <Image source={require('../../assets/logo.png')} style={estilos.logo} resizeMode="contain"/>
        <Texto style={estilos.titulo}> * Conheça a nossa História * </Texto>
        <Texto style={estilos.texto_sobre}>
        Na Amicci Doces, a arte de criar sabores nasceu da paixão e dedicação. O que começou como uma forma de expressar um talento, rapidamente se transformou em uma fonte de alegria para muitos, expandindo-se de amigos e familiares para um círculo cada vez maior de clientes satisfeitos.
            </Texto>
            <VideoView player={player} style={estilos.video} allowsFullscreen allowsPictureInPicture/>
            <Texto style={estilos.texto_sobre}>
    
            Somos especialistas em ganache, com bolos e doces que são pura celebração dessa textura aveludada e sabor intenso. Além disso, para suas reuniões e eventos, oferecemos uma variedade deliciosa de salgados fresquinhos.
            Os produtos são feitos com muito carinho e dedicação aceitamos encomendas por todo ABC e os atendimentos são feitos apenas por WhatsApp ou Instagram.
            {'\n'}{'\n'}
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
        paddingVertical: 20,
    },
    titulo: {
        textAlign: "center",
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    img_sobre: {
        height: 400,
        alignSelf: "center",
        marginTop: 15,
        marginBottom: 15,
    },
    video: {
        width: 340,
        height: 600,
        alignSelf: "center",
        borderRadius: 200,
        borderWidth: 5,
        borderColor: '#fff',
        marginTop: 20,
    }
})

