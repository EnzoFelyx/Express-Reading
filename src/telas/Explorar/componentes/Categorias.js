import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Genero from "./Generos";
import useGenero from "../../../hooks/useGenero";

export default function Categorias({ topo: Topo }) {

    const lista = useGenero();

    const TopoLista = () => {
        return <>
            <Topo />
        </>
    }

    return <FlatList
        data={lista}
        renderItem={({ item }) => <View style={estilos.grade}>
            <Genero {...item} />
        </View>
        }
        keyExtractor={({ id }) => id}
        ListHeaderComponent={TopoLista}
    />
}

const estilos = StyleSheet.create({
    grade: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 12,
        marginHorizontal: 10,
    },

})