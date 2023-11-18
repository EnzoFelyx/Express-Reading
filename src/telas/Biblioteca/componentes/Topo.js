import React from "react";
import { View } from "react-native";
import { biblioteca } from '../../../../config/text.json';
import Texto from "../../../componentes/Texto";
import estilos from "../../../estilos";
import { useTranslation } from "react-i18next";

export default function Topo() {

    const { t, i18n } = useTranslation();

    return <View style={estilos.topo}>
        <Texto style={estilos.titulo}>{t('biblioteca.topo.titulo')}</Texto>
        <Texto style={estilos.legenda}>{t('biblioteca.topo.legenda')}</Texto>
    </View>
}