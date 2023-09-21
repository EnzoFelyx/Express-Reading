import React from "react";
import { StyleSheet, View } from "react-native";
import Texto from "../../../componentes/Texto";
import Voltar from "../../../componentes/Voltar";

export default function Topo() {

    return <>
        <View style={estilos.topo}>
            <Texto style={estilos.titulo}>Detalhes do Livro</Texto>
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
        textAlign: "center", // deixa o conteúdo centralizado depenpendendo do "width"
        width: "100%", // tamanho da linha na tela

        
    },
})

