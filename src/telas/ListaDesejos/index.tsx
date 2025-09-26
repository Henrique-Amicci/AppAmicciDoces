import React, {useState, useEffect, useCallback} from "react"
import { FlatList, View, TouchableOpacity, Alert, StatusBar} from "react-native"
import { Card } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useFocusEffect } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons';

import Texto from "../../componentes/Texto"
import styles from "./estilosListaDesejos"
//import CadaItem from "./listaItem"

export default function Index(){

    //Captura os dados do AsyncStorage
    const [lista, setLista] = useState([])

    useFocusEffect(
        useCallback(()=>{
            async function carregaListaDesejos() {
                const listaSalva = await AsyncStorage.getItem('ListaDesejos')
                setLista(JSON.parse(listaSalva))
                //console.log(listaSalva)
            }
            carregaListaDesejos()
        }, []))
    
        
    //Limpa a Lista de Desejos
    async function limpaListaDesejos(){
        try{
            await AsyncStorage.clear()
            Alert.alert("Lista de Desejos excluída com sucesso.")
            setLista([])
        }
        catch(error){
            console.error('Erro ao limpar o AsyncStorage', error)
        }
    }

    //Monta o layout de cada item da lista
    const cadaItem = ({item})=>{
        //Função para remover um item da Lista de Desejos
    async function removeProdListaDesejos(id:any){
        
        //Captura a Lista de Desejos
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

        //Organiza a lista
        const listaDesejos = JSON.parse(listaDesejosSalva)

        //Exclui o item 
        const listaDesejosAtualizada = JSON.stringify(listaDesejos.filter((item:any)=>item.id !== id))

        //Atualiza o AsyncStorage
        await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada)
        Alert.alert('Produto removido da Lista de Desejos')
        setLista(JSON.parse(listaDesejosAtualizada))
    }

    return <View style={styles.cardContainer}>
                <Card mode="elevated" style={styles.card}>
                    <Card.Content>
                        <Card.Cover source={item.imagem} style={styles.imagem} />
                        <Texto style={styles.nomeProduto}>{item.nome}</Texto>
                    </Card.Content>
                    <Card.Actions>
                        <TouchableOpacity onPress={()=>removeProdListaDesejos(item.id)}>
                            <Ionicons name="trash" size={18} color="white" /> 
                        </TouchableOpacity>
                    </Card.Actions>
                </Card>
        </View>
    }

    return <View style={styles.listaContainer}>
                <StatusBar barStyle="dark-content"/>
                <Texto style={styles.titulo}>Lista de Desejos</Texto>
                <Texto style={styles.textoLista}>Estes são os produtos adicionados na sua Lista de Desejos</Texto>

                <FlatList 
                    data={lista}
                    renderItem={({item})=>cadaItem({item})}
                    keyExtractor={({id})=> id}
                    numColumns={2}
                />

                <TouchableOpacity style={styles.botaoApagar} onPress={()=>limpaListaDesejos()}>
                    <Texto style={styles.textoBotao}>Limpar Lista de Desejos</Texto>
                </TouchableOpacity>
            </View>
}