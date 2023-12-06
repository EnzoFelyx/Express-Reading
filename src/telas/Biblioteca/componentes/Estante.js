import React from "react";
import { FlatList } from "react-native";
import Esboco from "../../../componentes/Esboco";
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