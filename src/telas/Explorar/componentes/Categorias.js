import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import useGenero from "../../../hooks/useGenero";
import Genero from "./Generos";

export default function Categorias({ topo: Topo }) {

    const lista = useGenero();

    const TopoLista = () => {
        return <Topo />;
    }

    const GenerosPares = ({ data }) => {
        return (
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={estilos.grade}>
                        <Genero {...item} />
                    </View>
                )}
                keyExtractor={({ id }) => String(id)}
                numColumns={2}
            />
        );
    };

    return (
        <>
            <TopoLista />
            <GenerosPares data={lista} />
        </>
    );
}

const estilos = StyleSheet.create({
    grade: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 12,
        marginHorizontal: 10,
        flex: 1,
    },
});
