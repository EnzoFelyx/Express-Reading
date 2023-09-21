import React from "react";
import Topo from "./componentes/Topo";
import Capa from "./componentes/Capa";
import Informacoes from "./componentes/Informacoes";
import { ScrollView } from "react-native";

export default function Produto() {
    return <ScrollView style={{ flex: 1 }}>
        <Topo />
        <Capa />
        <Informacoes />
    </ScrollView>
}