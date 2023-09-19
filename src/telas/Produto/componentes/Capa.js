import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Texto from "../../../componentes/Texto";
import Estrelas from "../../../componentes/Estrelas";

export default function Capa({ nome, autor, preco, avaliacao, generos, imagem, parcela }) {

    const quantParcela = 6;

    const parcelas = preco / quantParcela;

    return <View style={{ alignItems: "center" }}>
        <Image source={imagem} style={estilos.imagem} />
        <Texto style={estilos.titulo}>{nome}</Texto>
        <Texto style={estilos.autor}>{autor}</Texto>
        <Estrelas editavel={true} grande={true} />


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


        <View style={estilos.pagamento}>
            <Texto style={estilos.preco}>{preco}</Texto>
            <Texto style={{ marginTop: 16, marginHorizontal: 14 }}>ou</Texto>
            <Texto style={{ fontWeight: "bold", marginTop: 16 }}>{parcela}</Texto>
        </View>
    </View>
}

const estilos = StyleSheet.create({

    imagem: {
        marginTop: 32,
        borderRadius: 8,
        width: 150,
        height: 225,

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

        flexDirection:"row",
        marginTop: 6,

        caixa: {
            lexDirection: "row",
            marginHorizontal: 12,
            marginVertical: 16,
            padding: 3,
            borderRadius: 6,
            backgroundColor: "#B5B8B9",
        },

        texto: {
            lineHeight: 24,
            fontWeight: "bold",
            
        },
    },

    pagamento: {
        flexDirection: "row",
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