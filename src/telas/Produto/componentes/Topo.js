import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import Texto from "../../../componentes/Texto";
import Voltar from "../../../componentes/Voltar";

export default function Topo() {

    const { t, i18n } = useTranslation();

    return <>
        <View style={estilos.topo}>
            <Texto style={estilos.titulo}>{t('produto.title')}</Texto>
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
        textAlign: "center",
        width: "100%",
    },
})

