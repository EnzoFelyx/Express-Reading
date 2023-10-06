import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Estrelas from './Estrelas'
import Texto from './Texto'
import { useNavigation } from "@react-navigation/native";
import { universal } from '../../config/text.json';

export default function Livro({
    nome,
    autor,
    preco,
    avaliacao = false,
    imagem,
    feedBack,

}) {
    const navigation = useNavigation() //hook para acesso do componente de navegação

    const aoPressionar = () => { navigation.navigate('Produto', feedBack) }

    const realMoeda = universal.real;

    return <TouchableOpacity style={{ flexDirection: "row", backgroundColor: 'white'}} onPress={aoPressionar}>
        <Image source={imagem} accessibilityLabel={nome} style={estilos.imagemLivro} />
        <View style={estilos.conteudo}>
            <View style={estilos.informacao}>
                <Texto style={estilos.nome}>{nome}</Texto>
                <Texto style={estilos.autor}>{autor}</Texto>
                <Texto style={estilos.preco}>{realMoeda}{preco}</Texto>
            </View>
            {avaliacao ? (<View style={estilos.avaliacao}>
                <Estrelas quant={avaliacao} />
            </View>) : <View />}
        </View>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({

    imagemLivro: {
        width: 60,
        height: 90,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },

    conteudo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },

    informacao: {
        justifyContent: "space-between",
        marginVertical: 6,
    },

    nome: {
        fontSize: 16,
        lineHeight: 26,
        color: "#464646",
        fontWeight: "bold",
    },
    autor: {
        fontSize: 14,
        lineHeight: 20,
        color: "#464646",
    },
    preco: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "bold",
        color: "#2A9F85",
    },
    avaliacao: {
        justifyContent: "flex-end",
    },
})