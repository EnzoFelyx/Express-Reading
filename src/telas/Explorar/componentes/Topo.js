import React from "react";
import { Image, StyleSheet, View } from "react-native";
import logo from "../../../../assets/explorarLogo.png";
import Texto from "../../../componentes/Texto";
import { explorar } from '../../../../config/text.json';

export default function Topo() {

    const { titulo, legenda} = explorar.topo;

    return <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Texto style={estilos.titulo}>{titulo}</Texto>
        <Texto style={estilos.legenda}>{legenda}</Texto>
    </View>
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#112236",
        padding: 16,
    },
    imagem: {
        height: 75,
        width: 270,
        backgroundColor: "#112236",
    },
    titulo: {
        color: "#DE9E69",
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: "#DE9E69",
    }
})

