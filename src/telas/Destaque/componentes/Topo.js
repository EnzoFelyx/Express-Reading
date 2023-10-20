import React from "react";
import { StyleSheet, View } from "react-native";
import { destaque } from '../../../../config/text.json';
import Texto from "../../../componentes/Texto";

export default function Topo() {

    const { titulo, legenda} = destaque.topo;

    return <View style={estilos.topo}>
        <Texto style={estilos.titulo}>{titulo}</Texto>
        <Texto style={estilos.legenda}>{legenda}</Texto>
    </View>
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#112236",
        padding: 16,
        marginBottom: 6,
    },
    titulo: {
        color: "#DE9E69",
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

