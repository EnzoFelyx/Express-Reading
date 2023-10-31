import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Vitrine from "./Vitrine";
import Texto from "../../../componentes/Texto";
import useDestaque from "../../../hooks/useDestasque";

export default function Trends({ topo: Topo, trends: Trends }) {

    const lista = useDestaque();

    const quista = useDestaque();

    const pista = useDestaque();

    return <ScrollView>
        <Topo />
        <View style={{flex: 1, marginTop: 16}}>
        <Trends titulo={'Os nossos melhores'} lista={lista} />
        <Trends titulo={'Promoção'} lista={quista} />
        <Trends titulo={'Os mais lidos entre os jovens'} lista={pista} />
        </View>
    </ScrollView>

}

const estilos = StyleSheet.create({

})