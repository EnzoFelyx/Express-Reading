import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Estrelas from './Estrelas'
import Texto from './Texto'
import { useNavigation } from "@react-navigation/native";

export default function Livro({
    nome,
    autor,
    preco,
    avaliacao,
    imagem,
    feedBack,

}) {
    const navigation = useNavigation() //hook para acesso do componente de navegação

    const aoPressionar = () => { navigation.navigate('Produto', feedBack) }

    return <TouchableOpacity style={estilos.container} onPress={aoPressionar}>
        <Image source={{ uri: imagem }} accessibilityLabel={nome} style={estilos.imagemLivro} />
        <View style={estilos.conteudo}>
            <Texto style={estilos.nome}>{nome}</Texto>
            <Texto style={estilos.autor}>{autor}</Texto>
            <View style={estilos.baixo}>
                <Texto style={estilos.preco}>{Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(preco)}</Texto>
                <Estrelas quant={avaliacao} />
            </View>
        </View>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: 'white',
        borderRadius: 15
    },

    imagemLivro: {
        width: 60,
        height: 90,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },

    conteudo: {
        flex: 1,
        justifyContent: "space-between",
        marginLeft: 16,
        marginVertical: 16,
        marginRight: 16,
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
    baixo: {
        flexDirection: 'row',
        justifyContent: "space-between"
    }
})