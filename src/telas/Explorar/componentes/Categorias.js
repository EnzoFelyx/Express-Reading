import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Genero from "./Generos";
import useGenero from "../../../hooks/useGenero";

export default function Categorias({ topo: Topo }) {
    const lista = useGenero();

    const TopoLista = () => {
        return <Topo />;
    }

    const RenderizarParesGenero = ({ data }) => {
        return (
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={estilos.grade}>
                        <Genero {...item} />
                    </View>
                )}
                keyExtractor={({ id }) => id}
                numColumns={2}
            />
        );
    };

    return (
        <>
            <TopoLista />
            <RenderizarParesGenero data={lista} />
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
