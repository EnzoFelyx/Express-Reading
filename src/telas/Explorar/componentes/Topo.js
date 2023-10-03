import React from "react";
import { StyleSheet, View } from "react-native";
import { explorar } from '../../../../config/text.json';
import Texto from "../../../componentes/Texto";

export default function Topo() {

    const { titulo, legenda} = explorar.topo;

    return <View style={estilos.topo}>
        <Texto style={estilos.titulo}>{titulo}</Texto>
        <Texto style={estilos.legenda}>{legenda}</Texto>
    </View>
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#112236",
        padding: 16,
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

