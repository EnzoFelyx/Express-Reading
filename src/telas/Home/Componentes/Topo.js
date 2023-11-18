import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { FlatList, Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import brazil from '../../../../assets/brazilflag.png';
import usa from '../../../../assets/usflag.png';
import Livro from "../../../componentes/Livro";
import Texto from "../../../componentes/Texto";
import estilos from "../../../estilos";
import useBusca from "../../../hooks/useBusca";

export default function Home() {

    const [nomeLivro, setnomeLivro] = useState('');
    const lista = useBusca(nomeLivro);
    const isFocused = useIsFocused();
    const { t, i18n } = useTranslation();

    const changeLanguage = value => {
        i18n.changeLanguage(value)
    }

    useEffect(() => {
        if (!isFocused) {
            setnomeLivro('');
        }
    }, [isFocused]);

    return <View>

        <View style={estilos.topo}>
            <View style={myEstilos.top}>
                <Texto style={estilos.titulo}>{t('home.topo.title')}</Texto>
                <View style={myEstilos.flags}>
                    <TouchableOpacity onPress={() => changeLanguage('pt')}>
                        <Image source={brazil} style={myEstilos.flag} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => changeLanguage('en')}>
                        <Image source={usa} style={myEstilos.flag} />
                    </TouchableOpacity>

                </View>
            </View>
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
    botao: {
        borderWidth: 1,
        padding: 4,
        borderRadius: 4,
        marginRight: 4,
        marginLeft: 4,
    },
    top: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    flags: {
        backgroundColor: "#F6F6F6",
        padding: 6,
        flexDirection: "row",
        marginRight: 10,
        borderRadius: 30,
    },
    flag: {
        width: 30,
        height: 30,
        marginHorizontal: 4
    }
})