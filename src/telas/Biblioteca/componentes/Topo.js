import React from "react";
import { View } from "react-native";
import { destaque } from '../../../../config/text.json';
import Texto from "../../../componentes/Texto";
import estilos from "../../../estilos";

export default function Topo() {

    const { titulo, legenda } = destaque.topo;

    return <View style={estilos.topo}>
        <Texto style={estilos.titulo}>{titulo}</Texto>
        <Texto style={estilos.legenda}>{legenda}</Texto>
    </View>
}