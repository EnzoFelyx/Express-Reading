import React from "react";
import { View } from "react-native";
import { biblioteca } from '../../../../config/text.json';
import Texto from "../../../componentes/Texto";
import estilos from "../../../estilos";

export default function Topo() {

    const { titulo, legenda } = biblioteca.topo;

    return <View style={estilos.topo}>
        <Texto style={estilos.titulo}>{titulo}</Texto>
        <Texto style={estilos.legenda}>{legenda}</Texto>
    </View>
}