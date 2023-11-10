import { StyleSheet } from "react-native"

export default StyleSheet.create({

    imagemLivro: {
        width: 60,
        height: 90,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },

    conteudo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
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
    },
    avaliacao: {
        justifyContent: "flex-end",
    },
    topo: {
        backgroundColor: "#112236",
        padding: 16,
        marginBottom: 15,
    },
    titulo: {
        color: "#DE9E69",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: "#DE9E69",
    }
})