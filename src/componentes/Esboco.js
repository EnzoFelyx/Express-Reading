import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Texto from './Texto';

const width = Dimensions.get('screen').width;

export default function Livro({
    nome,
    autor,
    preco,
    imagem,
    feedBack,
}) {
    const navigation = useNavigation()

    const aoPressionar = () => { navigation.navigate('Produto', feedBack) }

    return <View style={estilos.container}>
        <TouchableOpacity style={estilos.prateleira} onPress={aoPressionar}>

            <Image source={{ uri: imagem }} accessibilityLabel={nome} style={estilos.imagemLivro} />
            <View style={estilos.conteudo}>
                <View style={estilos.informacao}>
                    <Texto style={estilos.nome}>{nome}</Texto>
                    <Texto style={estilos.autor}>{autor}</Texto>
                    <Texto style={estilos.preco}>{Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(preco)}</Texto>
                </View>
            </View>
        </TouchableOpacity>
    </View>
}

const estilos = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 12,
        flex: 1,
        marginLeft: 0.015 * width,
    },

    prateleira: {
        borderWidth: 0.6,
        width: 0.30 * width,
        borderRadius: 8,
    },

    imagemLivro: {
        width: 100,
        height: 150,
        borderRadius: 6,
        marginVertical: 8,
        alignSelf: "center",
    },

    conteudo: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 8,
        marginVertical: 4
    },

    informacao: {
        justifyContent: "space-between",
        marginVertical: 6,
    },

    nome: {
        fontSize: 16,
        lineHeight: 26,
        color: "#464646",
        fontWeight: "bold",
    },
    autor: {
        fontSize: 14,
        lineHeight: 20,
        color: "#464646",
    },
    preco: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "bold",
        color: "#2A9F85",
    }
})