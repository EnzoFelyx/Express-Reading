import React from "react";
import { StyleSheet } from "react-native";

import Texto from "../../../componentes/Texto"

export default function Detalhes({nome, descricao, preco}) {
    return <>
        <Texto style={estilos.nome}>{ nome }</Texto>
        <Texto style={estilos.descricao}>{ descricao }</Texto>
        <Texto style={estilos.preco}>{ preco }</Texto>
    </>
}

const estilos = StyleSheet.create({

    nome: {
        color: "#464646",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 42,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
        marginTop: 8,
    },
    preco: {
        color: "#2A9F85",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 42,
        marginTop: 8,
    }
});
