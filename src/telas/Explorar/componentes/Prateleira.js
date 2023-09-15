import React from "react";
import Texto from "../../../componentes/Texto";
import { Image, StyleSheet, View } from "react-native";

export default function Prateleira({ nome, autor, preco, avaliacao, imagem }) {

    return <View style={estilos.prateleira}>
        <Image source={imagem} accessibilityLabel={nome} style={estilos.imagemLivro} />
        <View style={estilos.conteudo}>
            <View style={estilos.informacao}>
                <Texto style={estilos.nome}>{nome}</Texto>
                <Texto style={estilos.autor}>{autor}</Texto>
                <Texto style={estilos.preco}>{preco}</Texto>
            </View>
            <Texto>{avaliacao}</Texto>

        </View>
    </View>

}

const estilos = StyleSheet.create({

    prateleira: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        borderRadius:6,
        elevation: 3,
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
    }
})