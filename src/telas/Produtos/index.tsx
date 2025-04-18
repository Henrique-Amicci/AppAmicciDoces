import React from "react";
import { FlatList, View, Image, StyleSheet } from "react-native";
import Item from "./item.tsx";
export default function Index({itens}:any){
    return <View style={estilos.fundo}>
        <Image source={require('../../../assets/logo/logo.png')} style={estilos.logo} resizeMode="contain" />
        <FlatList
                data = {itens.lista}
                renderItem = {({item}) => <Item item={item}/>}
                keyExtractor = {(item)=>item.nome}
            />
    </View>
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#252728",
        paddingVertical: 12,
        paddingHorizontal: 16,
        paddingBottom: 180,
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center",
        margin: -80,
    },
})