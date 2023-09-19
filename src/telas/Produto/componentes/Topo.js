import React from "react";
import { StyleSheet, View } from "react-native";
import Texto from "../../../componentes/Texto";
import { EvilIcons } from '@expo/vector-icons';

export default function Topo() {

    return <View style={estilos.topo}>

        <Texto style={estilos.titulo}>Detalhes do Livro</Texto>

    </View>
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 8,
    },
    titulo: {
        marginTop: 16,
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
        padding: 8,
        textAlign: "center", // deixa o conteúdo centralizado depenpendendo do "width"
        width: "100%", // tamanho da linha na tela
    },
})
