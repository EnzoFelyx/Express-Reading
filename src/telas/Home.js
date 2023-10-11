import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Texto from "../componentes/Texto";
import { buscaLivro } from "../services/requests/books";

export default function Home() {

    const navigation = useNavigation();

    const [nomeLivro, setnomeLivro] = useState('');

    async function busca() {
        const resultado = await buscaLivro(nomeLivro);

        if (resultado) {
            navigation.navigate('Produto', resultado)
        }
        else {
            Alert.alert('Livro não encontrado')
        }
    }

    return <View>

        <TextInput
            placeholder="Busque por um livro"
            value={nomeLivro}
            onChangeText={setnomeLivro}
            style={estilos.entrada}
        />

        <TouchableOpacity style={estilos.botaoCaixa} onPress={busca}>
            <Texto style={estilos.botaoTexto}>
                Buscar
            </Texto>
        </TouchableOpacity>
    </View>
}

const estilos = StyleSheet.create({
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
    entrada: {
        borderWidth: 2,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginTop: 40,
        borderRadius: 8,
        height: 44,
        width: '90%',
    },
})