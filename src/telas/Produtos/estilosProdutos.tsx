import React from "react";
import { StyleSheet } from "react-native";

const estilosProdutos = StyleSheet.create({
    corFundo: {
        backgroundColor: "purple",
        paddingBottom: 35,
    },
    titulo: {
        fontSize: 26,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 10,
        width: "100%",
    },
    card: {
        width: "90%",
        margin: 5,
        alignSelf: "center",
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "#E5E6FA",
    },
    nomeProduto: {
        color: "purple",
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5,
    },
    descProduto: {
        color: "purple",
        fontSize: 16,
        paddingBottom: 10,
    },
    imagem: {
        width: "90%",
        alignSelf: "center",
        paddingBottom: 5,
    },
    imagemModal: {
        width: '90%', 
        height:'75%',
        borderRadius: 60, 
        alignSelf: "center"
    },
    modal: {
        backgroundColor: "#E5E6FA",
        width: "85%",
        height: "75%",
        borderWidth: 4,
        borderColor: "purple",
        paddingLeft: 10,
        paddingRight: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:  'center',
    },
    botaoModal: {
       left: "85%",
    },
    botao: {
        width: "30%",
        backgroundColor: "purple",
        borderWidth: 1,
        borderRadius: 2,
    },
    textoBotao: {
        width: "100%",
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    imagemSlider: {
        height: "100%",
        alignSelf: "center",
    },
    container: {
        flex: 1,
    },
        pagerView: {
        flex: 1,
    },
    page: {
        justifyContent: "center",
        alignItems: 'center',
    },
});

export default estilosProdutos;