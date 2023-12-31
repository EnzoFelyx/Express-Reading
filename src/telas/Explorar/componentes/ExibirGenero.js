import { useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Livro from "../../../componentes/Livro";
import Texto from "../../../componentes/Texto";
import Voltar from "../../../componentes/Voltar";
import useCategoria from "../../../hooks/useCategoria";

export default function ExibirGeneros() {

    const route = useRoute();

    const { genres, nomeGeneroBr} = route.params;

    const lista = useCategoria(nomeGeneroBr);

    const TopoLista = () => {
        return <>
            <View style={estilos.topo}>
                <Texto style={estilos.titulo}>{genres}</Texto>
            </View>
            <Voltar />
        </>
    }

    return <FlatList
        data={lista}
        renderItem={({ item }) => <View style={estilos.prateleira}>
            <Livro {...item} feedBack={item} />
        </View>
        }
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={TopoLista}
    />

}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#DDDD",
        padding: 12,
        marginBottom: 12,
        alignItems: "center"
    },
    titulo: {
        color: "#DE9E69",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    prateleira: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        elevation: 3,
    },
})

