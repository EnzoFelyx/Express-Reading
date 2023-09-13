import React from "react";
import { Image, StyleSheet, Text, Dimensions, View } from "react-native";

import topo from '../../assets/topo.png'

const width = Dimensions.get('screen').width;


export default function Cesta () {
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Text style={estilos.titulo}>Detalhe da Cesta</Text>
        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de livros</Text>
            <Text style={estilos.descricao}>Confira abaixo seus livros selecionados abaixo antes de finalizar a sua compra:</Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </View>
    </>
}

const estilos = StyleSheet.create ({
    
    topo: {
        width: "100%",
        height: (421 / 583) * width, // não pode ser tamanho fixo

    },

    titulo: {
        width: "100%", // tamanho da linha na tela
        position: "absolute", // mantem posição absoluta para sobrepor a imagem
        textAlign: "center", // deixa o conteúdo centralizado depenpendendo do "width"
        fontSize: 16, // altura da font (conteúdo)
        lineHeight: 26, // altura da linha (container)
        color: "white", // cor da fonte
        fontWeight: "bold", // negrito
        padding: 16,
    },

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
});
