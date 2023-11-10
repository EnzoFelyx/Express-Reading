import React from "react";
import { View } from "react-native";
import { explorar } from '../../../../config/text.json';
import Texto from "../../../componentes/Texto";
import estilos from "../../../estilos";

export default function Topo() {

    const { titulo, legenda } = explorar.topo;

    return <View style={estilos.topo}>
        <Texto style={estilos.titulo}>{titulo}</Texto>
        <Texto style={estilos.legenda}>{legenda}</Texto>
    </View>
}

