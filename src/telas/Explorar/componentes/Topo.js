import React from "react";
import Texto from "../../../componentes/Texto";
import logo from "../../../../assets/explorarLogo.png"
import { Image, StyleSheet, View } from "react-native";

export default function Topo() {
    return <>
        <View style={estilos.topo}>
            <Image source={logo} style={estilos.imagem}/>
            <Texto style={estilos.titulo}>Explorar</Texto>
            <Texto style={estilos.legenda}>Confira os nossos livros em destaques</Texto>
        </View>
    </>
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
    titulo:{
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