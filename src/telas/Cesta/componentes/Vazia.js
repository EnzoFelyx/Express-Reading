import React from "react";
import Texto from "../../../componentes/Texto";
import empty from '../../../../assets/vazio.png'
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { cesta } from '../../../../config/text.json';

const width = Dimensions.get('screen').width;


export default function Vazia() {

    const { title, carrinho, acessar } = cesta.vazio;

    return <>
        <View style={estilos.vazio}>
            <Texto style={estilos.titulo}>{title}</Texto>
            <Texto style={estilos.subtitulo}>{carrinho}</Texto>
            <Image source={empty} style={estilos.imagem} />
            <Texto style={estilos.subtitulo}>{acessar}</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({

    imagem: {
        height: (338 / 450) * width,
        width: "100%",
    },
    vazio: {
        marginVertical: 30,
        alignItems: "center"
    },
    titulo: {
        fontSize: 40,
        lineHeight: 60,
        fontWeight: "bold",
        color: "#acacac"
    },
    subtitulo: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: "center",
        color: "#acacac"
    }
})