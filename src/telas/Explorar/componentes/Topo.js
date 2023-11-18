import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import Texto from "../../../componentes/Texto";
import estilos from "../../../estilos";

export default function Topo() {

    const { t, i18n } = useTranslation();

    return <View style={estilos.topo}>
        <Texto style={estilos.titulo}>{t('explorar.topo.titulo')}</Texto>
        <Texto style={estilos.legenda}>{t('explorar.topo.legenda')}</Texto>
    </View>
}

