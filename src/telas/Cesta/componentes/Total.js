import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cesta } from '../../../../config/text.json';
import Texto from "../../../componentes/Texto";
import { resetarCesta } from "../../../services/requests/carrinho";

export default function Total({ totalPrice }) {

    const navigation = useNavigation();

    const aoPressionar = () => {
        Alert.alert('Finalizar Compra', 'Tem certeza que deseja finalizar sua compra?', [
            {
                text: 'Cancelar',

            },
            {
                text: 'OK',
                onPress: async () => {
                    const resultado = await resetarCesta();
                    if (resultado === "sucesso") {
                        navigation.navigate('FeedBack')
                    } else {
                        Alert.alert("Erro ao retirar livro da cesta");
                    }

                }
            }
        ])
    }

    const { nome, descricao, botao } = cesta.detalhes;

    const titulo = cesta.itens.titulo;

    return <SafeAreaView>
        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>{nome}</Texto>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>
                {Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(totalPrice)}
            </Texto>
            <TouchableOpacity
                style={estilos.botaoCaixa}
                onPress={aoPressionar}>
                <Texto style={estilos.botaoTexto}>{botao}</Texto>
            </TouchableOpacity>
            <Texto style={estilos.itenTitulo}>{titulo}</Texto>
        </View>
    </SafeAreaView>
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