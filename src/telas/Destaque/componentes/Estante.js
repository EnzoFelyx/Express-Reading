import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { destaque } from '../../../../config/text.json';
import Livro from "../../../componentes/Livro";
import Texto from "../../../componentes/Texto";
import useEstoque from "../../../hooks/useEstoque";

export default function Estante({ topo: Topo }) {

    const { titulo } = destaque.estante;

    const lista = useEstoque();

    const TopoLista = () => {
        return <>
            <Topo />
            <Texto style={estilos.titulo}>{titulo}</Texto>
        </>
    }

    return <FlatList
        data={lista}
        renderItem={({ item }) => <View style={estilos.prateleira}>
            <Livro {...item} rota={'Produto'} feedBack={item} />
        </View>
        }
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

    prateleira: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        elevation: 3,
    },
})