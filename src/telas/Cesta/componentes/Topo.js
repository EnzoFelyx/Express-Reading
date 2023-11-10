import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { cesta } from '../../../../config/text.json';
import topo from "../../../../assets/topo.png";
import Texto from "../../../componentes/Texto";

const width = Dimensions.get('screen').width;

export default function Topo() {

    const titulo = cesta.topo.titulo;

    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
}

const estilos = StyleSheet.create({

    topo: {
        height: (421 / 583) * width, 
        width: "100%",
    },

    titulo: {
        color: "white", 
        fontWeight: "bold",
        fontSize: 16, 
        lineHeight: 26, 
        padding: 16,
        position: "absolute", 
        textAlign: "center",
        width: "100%",
    },
})