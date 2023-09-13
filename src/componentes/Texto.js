import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }) { // children é tudo que está dentro do componente
    let estilo = estilos.texto

    if (style?.fontWeight === 'bold') {
        estilo = estilos.textoNegrito
    }
    return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})