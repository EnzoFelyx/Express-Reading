import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Vitrine from "./Vitrine";
import Texto from "../../../componentes/Texto";
import useDestaque from "../../../hooks/useDestasque";

export default function Trends({ topo: Topo, trends: Trends }) {

    const lista = useDestaque();

    const quista = useDestaque();

    const pista = useDestaque();

    return <View style={{flex:1}}>
        <Topo />
        <Trends titulo={'Aclamados pelos jovens e crianças'} lista={lista} />
        <Trends titulo={'ola'} lista={quista} />
        <Trends titulo={'boa'} lista={pista} />
    </View>

}

const estilos = StyleSheet.create({

})