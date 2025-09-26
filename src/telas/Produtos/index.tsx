import React from "react";
import { FlatList, View } from "react-native";

//Layout dos produtos
import CadaProduto from './Item';
import Texto from '../../componentes/Texto';
import styles from './estilosProdutos';

export default function Index({itens}:any){
    return <View style={styles.corFundo}>
            <Texto style={styles.titulo}>{itens.titulo}</Texto>
            <FlatList 
                data={itens.lista}
                renderItem={({item})=> <CadaProduto prod={item}/>}
                keyExtractor={itens.lista.id}
            />
        </View>
}