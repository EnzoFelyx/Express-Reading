import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Texto from "../../../componentes/Texto";
import { useRoute } from "@react-navigation/native";

export default function Informacoes() {

    const route = useRoute();

    const { preco } = route.params

    const quantParcela = 6;

    const parcelas = preco / quantParcela;

    const parcela = parcelas.toFixed(2)

    return <>
        <View style={estilos.informacoes}>

            <View style={estilos.descricao}>
                <Texto style={estilos.subtitle}>Descrição</Texto>
                <Texto style={estilos.texto}>       aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Texto>
            </View>
            <TouchableOpacity style={estilos.botaoCaixa}>
                <Texto style={estilos.preco}>R$ {preco}</Texto>
                <View style={estilos.comprar}>
                </View>
            </TouchableOpacity>
        </View>
    </>
}

const estilos = StyleSheet.create({

    informacoes: {
        marginTop: 24,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#CBD3DA",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        marginHorizontal: 12,
    },

    botaoCaixa: {
        marginTop: 24,
        backgroundColor: "#ffff",
        paddingVertical: 12,
        width: "75%",
        alignSelf: "flex-end",
        borderRadius: 20,
    },

    comprar: {
        backgroundColor: "#2A9F85",
        paddingVertical: 28,
        width: "55%",

        alignSelf: "flex-end",
        borderRadius: 20,
        position: "absolute"
    },


    preco: {
        fontSize: 20,
        marginLeft: 16,
        fontWeight: "bold",
        lineHeight: 32,
    },

    descricao: {
        padding: 14,
    },

    subtitle: {
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 26
    },

    texto: {
        fontSize: 16,
        marginTop: 12,
    }
})