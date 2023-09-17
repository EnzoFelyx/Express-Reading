import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Texto from "../../../componentes/Texto";
import Prateleira from "./Prateleira";
import useExplorar from "../../../hooks/useExplorar";

export default function Estante({ topo: Topo }) {

    const [subTitulo, lista] = useExplorar();

    const TopoLista = () => {
        return <>
            <Topo />
            <Texto style={estilos.titulo}>{subTitulo}</Texto>
        </>
    }

    return <FlatList
        data={lista}
        renderItem={({ item }) => <Prateleira {...item} />}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={TopoLista}
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