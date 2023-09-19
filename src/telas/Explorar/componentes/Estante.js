import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Texto from "../../../componentes/Texto";
import Prateleira from "./Prateleira";
import { explorar } from '../../../../config/text.json';
import useEstoque from "../../../hooks/useEstoque";
import { useNavigation } from "@react-navigation/native";

export default function Estante({ topo: Topo }) {

    const { titulo } = explorar.estante;

    const lista = useEstoque();

    const TopoLista = () => {
        return <>
            <Topo />
            <Texto style={estilos.titulo}>{titulo}</Texto>
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