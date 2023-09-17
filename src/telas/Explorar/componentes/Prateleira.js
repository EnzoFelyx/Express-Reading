import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Livro from '../../../componentes/Livro';

export default function Prateleira({ nome, autor, preco, avaliacao, imagem }) {

    return <TouchableOpacity style={estilos.prateleira}>
        <Livro nome={nome} autor={autor} preco={preco} avaliacao={avaliacao} imagem={imagem} />
    </TouchableOpacity>

}

const estilos = StyleSheet.create({

    prateleira: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        elevation: 3,
    },
})