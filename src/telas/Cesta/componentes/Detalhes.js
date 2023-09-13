import React from "react";
import { StyleSheet } from "react-native";

import Texto from "../../../componentes/Texto"

export default function Detalhes() {
    return <>
        <Texto style={estilos.nome}>Cesta de livros</Texto>
        <Texto style={estilos.descricao}>Confira abaixo seus livros selecionados abaixo antes de finalizar a sua compra:</Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
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
