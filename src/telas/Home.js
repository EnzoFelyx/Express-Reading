import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import Livro from "../componentes/Livro";
import useBusca from "../hooks/useBusca";
import { useIsFocused } from "@react-navigation/native";

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
        marginTop: 40,
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
})