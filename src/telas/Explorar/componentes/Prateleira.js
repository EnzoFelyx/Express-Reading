import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Livro from '../../../componentes/Livro';

export default function Prateleira({ nome, autor, preco, avaliacao, imagem }) {

    return <View style={estilos.prateleira}>
        <Livro nome={nome} autor={autor} preco={preco} avaliacao={avaliacao} imagem={imagem} rota={'Produto'} />
    </View>

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