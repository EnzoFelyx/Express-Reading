import React from "react";

import Texto from "../../../componentes/Texto";
import { Image, StyleSheet, View } from "react-native";


export default function Item({ item: { nome, autor, preco, imagem } }) {

    return <View style={estilos.iten}>
        <Image source={imagem} style={estilos.imagem} />
        <View style={{ flexDirection: "column", marginLeft: 11 }}>
            <Texto style={estilos.nome}>{nome}</Texto>
            <Texto style={estilos.autor}>{autor}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
        </View>
    </View>
}

const estilos = StyleSheet.create({
    iten: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imagem: {
        width: 60,
        height: 90,
        borderRadius: 6,
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