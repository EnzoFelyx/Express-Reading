import { useRoute } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Estrelas from "../../../componentes/Estrelas";
import Texto from "../../../componentes/Texto";
import Dados from "./Dados";

export default function Capa() {

    const route = useRoute();
    const { imagem, nome, autor, generos } = route.params

    return <>

        <View style={estilos.capa}>
            <View style={{ flexDirection: "row" }}>
                <Image source={{ uri: imagem }} style={estilos.imagem} />
                <Dados />
            </View>
            <Texto style={estilos.titulo}>{nome}</Texto>
            <Texto style={estilos.autor}>{autor}</Texto>
        </View>
        <View style={{ alignItems: "center", }}>
            <View style={estilos.generos}>
                {generos.map((genero, index) => (
                    <TouchableOpacity style={estilos.generos.caixa} key={index}>
                        <Texto style={estilos.generos.texto}>{genero}</Texto>
                    </TouchableOpacity>
                ))}
            </View>
            <Estrelas editavel={true} grande={true} />
        </View>
    </>
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