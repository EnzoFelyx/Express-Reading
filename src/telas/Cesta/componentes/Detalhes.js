import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { cesta } from '../../../../config/text.json';

import Texto from "../../../componentes/Texto";
import useEstoque from "../../../hooks/useEstoque";
import useItens from "../../../hooks/useItens";
import Livro from "../../../componentes/Livro";

export default function Detalhes({ topo: Topo }) {

    const { nome, descricao, botao } = cesta.detalhes;

    const lista = useEstoque();

    const Preco = useItens();

    const titulo = cesta.itens.titulo;

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
                <Texto style={estilos.itenTitulo}>{titulo}</Texto>
            </View>
        </>
    }

    return <FlatList
        data={lista}
        renderItem={({ item }) => <Livro {...item} avaliacao={false} />}
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

    itenTitulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },

});