import React from "react";
import { Animated, FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { cesta } from '../../../../config/text.json';
import { useNavigation } from "@react-navigation/native";
import { Swipeable } from "react-native-gesture-handler";
import Livro from "../../../componentes/Livro";
import Texto from "../../../componentes/Texto";
import Testando from "../../../componentes/teste";
import useEstoque from "../../../hooks/useEstoque";
import useItens from "../../../hooks/useItens";

export default function Detalhes({ topo: Topo }) {

    const navigation = useNavigation();

    const lista = useEstoque();

    const { Preco, comprado } = useItens();

    const { nome, descricao, botao } = cesta.detalhes;

    const titulo = cesta.itens.titulo;

    const RightActions = (progress, dragX) => {

        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })

        return <View style={estilos.RightActions.view}>
            <Animated.View style={{ transform: [{ scale: scale }] }} >
                <Testando style={estilos.RightActions.icone} />
            </Animated.View>
        </View >
    }

    const TopoLista = () => {
        return <>
            <Topo />
            <View style={estilos.cesta}>
                <Texto style={estilos.nome}>{nome}</Texto>
                <Texto style={estilos.descricao}>{descricao}</Texto>
                <Texto style={estilos.preco}>{Preco}</Texto>
                <TouchableOpacity
                    style={estilos.botaoCaixa}
                    onPress={() => navigation.navigate('Home', comprado)}>
                    <Texto style={estilos.botaoTexto}>{botao}</Texto>
                </TouchableOpacity>
                <Texto style={estilos.itenTitulo}>{titulo}</Texto>
            </View>
        </>
    }

    return <FlatList
        data={lista}
        renderItem={({ item }) => <Swipeable renderRightActions={RightActions} onSwipeableOpen={() => alert('Livro removido da cesta com sucesso!')}>
            <Livro {...item} avaliacao={false} rota={'Produto'} feedBack={item} />
        </Swipeable>
        }
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={TopoLista}
    />
}

const estilos = StyleSheet.create({

    nome: {
        color: "#464646",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 42,
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
        marginTop: 8,
    },
    preco: {
        color: "#2A9F85",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 42,
        marginTop: 8,
    },
    botaoCaixa: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,

    },
    botaoTexto: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    itenTitulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },

    RightActions: {

        view: {
            backgroundColor: "#FF0000",
            justifyContent: 'center',
            flex: 1,
            alignItems: 'flex-end',
        },

        icone: {
            fontSize: 30,
            padding: 20,
            color: '#FFFF',
        }

    },

});