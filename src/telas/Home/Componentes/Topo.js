import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import Livro from "../../../componentes/Livro";
import useBusca from "../../../hooks/useBusca";
import { useIsFocused } from "@react-navigation/native";
import Texto from "../../../componentes/Texto";

export default function Home() {

    const [nomeLivro, setnomeLivro] = useState('');
    const lista = useBusca(nomeLivro);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (!isFocused) {
            setnomeLivro('');
        }
    }, [isFocused]);

    return <View>

        <View style={estilos.topo}>
            <Texto style={estilos.titulo}>Home</Texto>
            <Texto style={estilos.legenda}>Bem-Vindo, confira as novas tendências do mundo literário!</Texto>
        </View>

        <TextInput
            placeholder="Busque por um livro"
            value={nomeLivro}
            onChangeText={setnomeLivro}
            style={estilos.entrada}
        />

        <FlatList
            data={lista}
            renderItem={({ item }) => <View style={estilos.prateleira}>
                <Livro {...item} feedBack={item} />
            </View>
            }
            keyExtractor={({ nome }) => nome}
        />

    </View>
}

const estilos = StyleSheet.create({
    entrada: {
        borderWidth: 2,
        borderColor: '#DDDD',
        fontSize: 16,
        color: '#444',
        marginTop: 10,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 18,
        marginHorizontal: 12
    },
    prateleira: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        elevation: 3,
    },
    topo: {
        backgroundColor: "#112236",
        padding: 16,
        marginBottom: 15,
    },
    titulo: {
        color: "#DE9E69",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: "#DE9E69",
    }
})