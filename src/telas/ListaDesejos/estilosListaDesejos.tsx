import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listaContainer: {
        flex: 1,
        backgroundColor:'#E5E6FA',
    },
    cardContainer: {
        width: '50%',
    },
    imagem: {
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'purple',
        marginBottom: 10,
    },
    nomeProduto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    titulo: {
        paddingTop: '10%',
        paddingBottom: 10,
        fontSize: 30,
        color: 'purple',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
    textoLista: {
        fontSize: 20,
        paddingBottom: 20,
        paddingLeft: 20,
    },
    botaoApagar: {
        padding: 10,
        width:  '100%',
        backgroundColor: "purple",
        alignSelf: 'center',
    },
    textoBotao: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',    
    }
})

export default styles;