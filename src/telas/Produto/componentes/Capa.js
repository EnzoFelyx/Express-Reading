import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Texto from "../../../componentes/Texto";
import Estrelas from "../../../componentes/Estrelas";
import { useRoute } from "@react-navigation/native";
import Informacoes from "./Informacoes";

export default function Capa({ topo: Topo }) {

    const route = useRoute();

    const { imagem, nome, autor, preco, generos } = route.params

    return <ScrollView style={{ flex: 1, }}>
        <Topo />
        <View style={estilos.capa}>
            <Image source={imagem} style={estilos.imagem} />
            <Texto style={estilos.titulo}>{nome}</Texto>
            <Texto style={estilos.autor}>{autor}</Texto>
        </View>
        <View style={{ alignItems: "center", }}>
            <View style={estilos.generos}>
                <View style={estilos.generos.caixa}>
                    <Texto style={estilos.generos.texto}>{generos[0]}</Texto>
                </View>
                <View style={estilos.generos.caixa}>
                    <Texto style={estilos.generos.texto}>{generos[1]}</Texto>
                </View>
                <View style={estilos.generos.caixa}>
                    <Texto style={estilos.generos.texto}>{generos[2]}</Texto>
                </View>
            </View>

            <Estrelas editavel={true} grande={true} />
        </View>
        <Informacoes preco={preco} />
    </ScrollView>
}


const estilos = StyleSheet.create({

    capa: {
        marginLeft: 30,
        marginTop: 30,
    },

    imagem: {
        borderRadius: 8,
        width: 225,
        height: 338,
    },

    titulo: {
        fontSize: 24,
        marginTop: 16,
        lineHeight: 42,
        fontWeight: "bold",

    },

    autor: {
        fontSize: 20,
        lineHeight: 26,
        color: "#B5B8B9",
    },

    generos: {

        flexDirection: "row",
        marginVertical: 8,

        caixa: {
            lexDirection: "row",
            marginHorizontal: 12,
            marginVertical: 16,
            padding: 3,
            borderRadius: 6,
            backgroundColor: "#FFFF",
            elevation: 3,
        },

        texto: {
            lineHeight: 24,
            fontWeight: "bold",
            color: "#919A9A",

        },
    },

    estrela: {
        fontSize: 14,
        marginTop: 6,

    },

})