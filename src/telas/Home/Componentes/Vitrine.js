import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Texto from "../../../componentes/Texto";
import FormataTexto from "../../../componentes/FormataTexto";

const width = Dimensions.get('screen').width;

export default function Vitrine({
    nome,
    autor,
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
                    <FormataTexto texto={nome} maxLinhas={2} estilos={estilos.nome} />
                    <FormataTexto texto={autor} maxLinhas={1} estilos={estilos.autor} />
                </View>
            </View>
        </TouchableOpacity>
    </View>
}

const estilos = StyleSheet.create({

    container: {
        flexDirection: "row",
    },

    prateleira: {
        borderWidth: 0.6,
        width: 0.30 * width,
        borderRadius: 8,
        marginLeft: 0.025 * width,
        marginBottom: 10,

    },

    imagemLivro: {
        width: 100,
        height: 150,
        borderRadius: 6,
        marginVertical: 8,
        alignSelf: "center",
    },

    conteudo: {
        marginLeft: 8,
        marginVertical: 4
    },

    nome: {
        fontSize: 14,
        lineHeight: 18,
        color: "#464646",
        fontWeight: "bold",
    },
    autor: {
        fontSize: 14,
        lineHeight: 18,
        color: "#464646",
    }
})