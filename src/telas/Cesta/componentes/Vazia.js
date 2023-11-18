import React from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import empty from '../../../../assets/vazio.png';
import Texto from "../../../componentes/Texto";

const width = Dimensions.get('screen').width;


export default function Vazia() {

    const { t, i18n } = useTranslation();

    return <>
        <View style={estilos.vazio}>
            <Texto style={estilos.titulo}>{t('cesta.vazio.title')}</Texto>
            <Texto style={estilos.subtitulo}>{t('cesta.vazio.carrinho')}</Texto>
            <Image source={empty} style={estilos.imagem} />
            <Texto style={estilos.subtitulo}>{t('cesta.vazio.acessar')}</Texto>
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