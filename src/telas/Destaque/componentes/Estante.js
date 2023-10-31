import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { destaque } from '../../../../config/text.json';
import Esboco from "../../../componentes/Esboco";
import Texto from "../../../componentes/Texto";
import useDestaque from "../../../hooks/useDestasque";

export default function Estante({ topo: Topo }) {

    const lista = useDestaque();

    const TopoLista = () => {
        return <>
            <Topo />
        </>
    }

    return <FlatList
        data={lista}
        renderItem={({ item }) => <Esboco {...item} feedBack={item} />}
        ListHeaderComponent={TopoLista}
        keyExtractor={({ nome }) => String(nome)}
        numColumns={3}

    />
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
        color: "#464646",
    },
})