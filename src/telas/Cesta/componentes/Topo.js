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
        height: (421 / 583) * width, // não pode ser tamanho fixo
        width: "100%",
    },

    titulo: {
        color: "white", // cor da fonte
        fontWeight: "bold",
        fontSize: 16, // altura da font (conteúdo)
        lineHeight: 26, // altura da linha (container)
        padding: 16,
        position: "absolute", // mantem posição absoluta para sobrepor a imagem
        textAlign: "center", // deixa o conteúdo centralizado depenpendendo do "width"
        width: "100%", // tamanho da linha na tela
    },
})