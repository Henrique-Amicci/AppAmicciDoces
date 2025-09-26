import React, {useState} from "react";
import { Card } from "react-native-paper";
import { View, TouchableOpacity, Modal, Image, Alert} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import PagerView from "react-native-pager-view";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Texto from '../../componentes/Texto';
import styles from './estilosProdutos'

export default function Produto({prod:{id,nome,imagem,descricao,slider}}:any){

    const [statusModal, acaoAbreFecha] = useState(false);

    //Função para adicionar na Lista de Desejos
    async function addListaDesejos(id:any,nome:any,imagem:any,descricao:any){
      
        const lista = {id,nome,imagem,descricao}  

        //Verifica se a Lista de Desejos já existe
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos')

        if(listaDesejosSalva!==null){
            //A lista já possui produtos
            const listaDesejosNova = JSON.parse(listaDesejosSalva)
        
            //Verifica se o produto já está na lista
            const jaExiste = listaDesejosNova.some((item:any)=>item.id ===id)
            if(jaExiste){
                Alert.alert("Este produto já está na sua Lista de Desejos.")
                return
            }

            //Adiciona o novo produto no array
            listaDesejosNova.push(lista)

            //Atualiza o AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', JSON.stringify(listaDesejosNova))
            Alert.alert('Produto adicionado na Lista de Desejos.')
            //console.log(lista)

        } else {
            //Não há produtos, cria uma lista
            //Cria a lista no AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', JSON.stringify([lista]))
            Alert.alert('Produto adicionado na sua Lista de Desejos!')
            //console.log(lista)
        } 
    }

    return <View>
            <Card mode='elevated' style={styles.card}> 
                <Card.Content>
                    <Texto style={styles.nomeProduto}>{nome}</Texto>
                </Card.Content>
                <Card.Cover source={imagem} style={styles.imagem}/>
                <Card.Actions>
                    <TouchableOpacity style={styles.botao} onPress={()=> acaoAbreFecha(true)}>
                        <Texto style={styles.textoBotao}>
                            <Ionicons name="list" size={12} color="white"/> Detalhes
                        </Texto>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>addListaDesejos(id,nome,imagem,descricao)}>
                        <Ionicons name="heart-outline" size={30} color="purple"/>
                    </TouchableOpacity>
                </Card.Actions>
            </Card>

            {/* Modal dos Produtos */}
            <Modal animationType="slide" transparent={true} visible={statusModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Texto style={styles.nomeProduto}>{nome}</Texto>
                        <Texto style={styles.descProduto}>{descricao}</Texto>
                        {/* <Image source={imagem} resizeMode="contain" style={styles.imagemModal}/> */}
                        {/* Slider de imagens do Produto*/}
                        <PagerView initialPage={0} style={styles.pagerView}>
                            {/*Monta o laço de repetição para as imagens do Slider*/
                            slider.map((img:any, index:any)=>(
                                <View key={index} style={styles.page}>
                                    <Image source={img} resizeMode='contain' style={styles.imagemSlider}/>
                                </View>
                            ))}
                        </PagerView>
                        <TouchableOpacity onPress={()=>acaoAbreFecha(false)} style={styles.botaoModal}>
                            <Ionicons name="close" size={30} color="purple"/>
                        </TouchableOpacity>                    
                    </View>
                </View>
            </Modal>
        </View>
}