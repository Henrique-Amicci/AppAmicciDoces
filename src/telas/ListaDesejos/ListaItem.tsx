
import { Card } from "react-native-paper";
import { View, TouchableOpacity, Alert} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import Texto from "../../componentes/Texto";
import styles from "./estilosListaDesejos";

export default function CadaItem({id,nome,imagem,descricao}){

    const navigation = useNavigation()

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

        //@ts-ignore
        navigation.navigate('Lista de Desejos');
    }

    return <View style={styles.cardContainer}>
                <Card mode="elevated" style={styles.card}>
                    <Card.Content>
                        <Card.Cover source={imagem} style={styles.imagem} />
                        <Texto style={styles.nomeProduto}>{nome}</Texto>
                    </Card.Content>
                    <Card.Actions>
                        <TouchableOpacity onPress={()=>removeProdListaDesejos(id)}>
                            <Ionicons name="trash" size={18} color="white" /> 
                        </TouchableOpacity>
                    </Card.Actions>
                </Card>
        </View>
}
