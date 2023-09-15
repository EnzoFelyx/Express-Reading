import React, {useEffect, useState} from "react";
import Texto from "../../../componentes/Texto";
import { carregaEstante } from "../../../services/carregaDados";
import { FlatList, Image, StyleSheet, View } from "react-native";

export default function Estante({topo: Topo}) {

    const [titulo, setTitulo] = useState(''); //declarar sempre no começo
    const [lista, setLista] = useState('');

    useEffect(() => {
        const retorno = carregaEstante();
        setTitulo(retorno.estante.titulo)
        setLista(retorno.estante.lista)
    }, []);

    const TopoLista = () => {
        return <>
            <Topo/>
            <Texto style={estilos.titulo}>{titulo}</Texto>
        </>
    }

    return <FlatList
    data={lista}
    renderItem={({item: { nome, autor, preco, avaliacao, imagem }}) => <View>
        <Image source={imagem}/>
        <Texto>{nome}</Texto>
        <Texto>{autor}</Texto>
        <Texto>{preco}</Texto>
        <Texto>{avaliacao}</Texto>
        </View>
        }
    keyExtractor={({nome}) => nome}
    ListHeaderComponent={TopoLista}
    />
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
        color: "#464646",
    },
})