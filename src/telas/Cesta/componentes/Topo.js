import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import topo from "../../../../assets/topo.png";
import { cesta } from '../../../../config/text.json';
import Texto from "../../../componentes/Texto";
import { useTranslation } from "react-i18next";

const width = Dimensions.get('screen').width;

export default function Topo() {

    const { t, i18n } = useTranslation();

    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>{t('cesta.topo.titulo')}</Texto>
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