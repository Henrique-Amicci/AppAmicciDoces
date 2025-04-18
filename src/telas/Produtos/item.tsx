import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import Texto from "../../componentes/Texto";
export default function Item({item:{id, nome, descricao, imagem}}:any){
    return <View>
        <Card mode="elevated">
            <Card.Content style={estilos.fundo}>
                <Texto style={estilos.titulo}>{nome}</Texto>
                <Texto style={estilos.texto_item}>{descricao}</Texto>
            </Card.Content>
            <Card.Cover source={imagem}/>  
        </Card>
    </View>
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#252728",
    },
    texto_item: {
        color: "#C6C8C7",
        fontSize: 18,
        marginBottom: 16
    },
    titulo:{
        marginTop: 30,
        fontSize: 25,
        color: "#C6C8C7",
    }
})