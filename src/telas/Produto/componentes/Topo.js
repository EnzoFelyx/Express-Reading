import React from "react";
import { StyleSheet, View } from "react-native";
import { produto } from '../../../../config/text.json';
import Texto from "../../../componentes/Texto";
import Voltar from "../../../componentes/Voltar";

export default function Topo() {

    const title = produto.title

    return <>
        <View style={estilos.topo}>
            <Texto style={estilos.titulo}>{title}</Texto>
        </View>
        <Voltar />
    </>
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#FFFFF",
        padding: 8,
    },
    titulo: {
        marginTop: 6,
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
        padding: 8,
        textAlign: "center",
        width: "100%",
    },
})

