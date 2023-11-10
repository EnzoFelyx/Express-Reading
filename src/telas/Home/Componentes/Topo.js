import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import { home } from '../../../../config/text.json';
import Livro from "../../../componentes/Livro";
import Texto from "../../../componentes/Texto";
import estilos from "../../../estilos";
import useBusca from "../../../hooks/useBusca";

export default function Home() {

    const [nomeLivro, setnomeLivro] = useState('');
    const lista = useBusca(nomeLivro);
    const isFocused = useIsFocused();

    const {title, welcome, search} = home.topo;

    useEffect(() => {
        if (!isFocused) {
            setnomeLivro('');
        }
    }, [isFocused]);

    return <View>

        <View style={estilos.topo}>
            <Texto style={estilos.titulo}>{title}</Texto>
            <Texto style={estilos.legenda}>{welcome}</Texto>
        </View>

        <TextInput
            placeholder={search}
            value={nomeLivro}
            onChangeText={setnomeLivro}
            style={myEstilos.entrada}
        />

        <FlatList
            data={lista}
            renderItem={({ item }) => <View style={myEstilos.prateleira}>
                <Livro {...item} feedBack={item} />
            </View>
            }
            keyExtractor={({ nome }) => nome}
        />

    </View>
}

const myEstilos = StyleSheet.create({
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
})