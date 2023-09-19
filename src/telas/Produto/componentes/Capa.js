import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Texto from "../../../componentes/Texto";
import Estrelas from "../../../componentes/Estrelas";

export default function Capa({ nome, autor, preco, avaliacao, generos, imagem }) {

    const quantParcela = 6;

    const parcelas = preco / quantParcela;

    return <View style={{ alignItems: "center" }}>
        <Image source={imagem} style={estilos.imagem} />
        <Texto style={estilos.titulo}>{nome}</Texto>
        <Texto style={estilos.autor}>{autor}</Texto>
        <Estrelas editavel={true} grande={true} />
        <Texto style={estilos.estrela}>({avaliacao}.0☆)</Texto>
        <View style={estilos.generos}>
            <Texto style={estilos.categoria}>{generos[0]}</Texto>
            <Texto style={estilos.categoria}>{generos[1]}</Texto>
            <Texto style={estilos.categoria}>{generos[2]}</Texto>
        </View>
        <View style={estilos.pagamento}>
            <Texto style={estilos.preco}>{preco}</Texto>
                <Texto>ou</Texto>
                <Texto style={{ fontWeight: "bold" }}>6x de R$9,55</Texto>
        </View>
    </View>
}

const estilos = StyleSheet.create({

    imagem: {
        marginTop: 32,
        borderRadius: 8,
        width: 200,
        height: 300,

    },

    titulo: {
        fontSize: 24,
        marginTop: 16,
        lineHeight: 32,

    },

    autor: {
        fontSize: 16,
        lineHeight: 22,
        color: "#B5B8B9",
        fontWeight: "bold",
        marginTop: 8,
        marginBottom: 16,
    },

    generos: {
        flexDirection: "row",
        width: "60%",
        justifyContent: "space-between",
        marginVertical: 16,
    },

    categoria: {
        backgroundColor: "#B5B8B9",
        lineHeight: 24,
    },

    pagamento: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%",
    },

    preco: {
        color: "#2A9F85",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 42,
    },

    parcela: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: 6,
    },

    estrela: {
        fontSize: 14,
        marginTop: 6,

    },

})