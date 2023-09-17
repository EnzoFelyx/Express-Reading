import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { cesta } from '../../../../config/text.json';

import Texto from "../../../componentes/Texto";
import useEstoque from "../../../hooks/useEstoque";
import useItens from "../../../hooks/useItens";
import Item from "./Item";

export default function Detalhes({ topo: Topo }) {

    const { nome, descricao, botao } = cesta.detalhes;

    const lista = useEstoque();

    const Preco = useItens();

    const TopoLista = () => {
        return <>
            <Topo />
            <View style={estilos.cesta}>
                <Texto style={estilos.nome}>{nome}</Texto>
                <Texto style={estilos.descricao}>{descricao}</Texto>
                <Texto style={estilos.preco}>{Preco}</Texto>
                <TouchableOpacity style={estilos.botaoCaixa}>
                    <Texto style={estilos.botaoTexto}>{botao}</Texto>
                </TouchableOpacity>
            </View>
        </>
    }

    return <FlatList
        data={lista}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={TopoLista}
    />
}

const estilos = StyleSheet.create({

    nome: {
        color: "#464646",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 42,
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
        marginTop: 8,
    },
    preco: {
        color: "#2A9F85",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 42,
        marginTop: 8,
    },
    botaoCaixa: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,

    },
    botaoTexto: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

});

/* 

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
}) */