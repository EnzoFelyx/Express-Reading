import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import Livro from "../../../componentes/Livro";
import Texto from "../../../componentes/Texto";
import estilos from "../../../estilos";
import useBusca from "../../../hooks/useBusca";

export default function Home() {

    const [nomeLivro, setnomeLivro] = useState('');
    const lista = useBusca(nomeLivro);
    const isFocused = useIsFocused();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        if (!isFocused) {
            setnomeLivro('');
        }
    }, [isFocused]);

    return <View>

        <View style={estilos.topo}>
            <Texto style={estilos.titulo}>{t('home.topo.title')}</Texto>
            <Texto style={estilos.legenda}>{t('home.topo.welcome')}</Texto>
        </View>

        <TextInput
            placeholder={t('home.topo.search')}
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