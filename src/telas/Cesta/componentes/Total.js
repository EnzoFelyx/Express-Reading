import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Texto from "../../../componentes/Texto";
import { resetarCesta } from "../../../services/requests/carrinho";
import Vazia from './Vazia';

export default function Total({ totalPrice }) {

    const navigation = useNavigation();

    const { t, i18n } = useTranslation();

    const aoPressionar = () => {
        Alert.alert(t('cesta.warning.warn'), t('cesta.warning.ask'), [
            {
                text: t('cesta.warning.goback'),
            },
            {
                text: t('cesta.warning.confirm'),
                onPress: async () => {
                    const resultado = await resetarCesta();
                    if (resultado === "sucesso") {
                        navigation.navigate('FeedBack')
                    } else {
                        Alert.alert(t('cesta.warning.wrong'));
                    }

                }
            }
        ])
    }

    return <SafeAreaView>
        {totalPrice > 0 ? (
            <View style={estilos.cesta}>
                <Texto style={estilos.nome}>{t('cesta.detalhes.title')}</Texto>
                <Texto style={estilos.descricao}>{t('cesta.detalhes.description')}</Texto>
                <Texto style={estilos.preco}>
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(totalPrice)}
                </Texto>
                <TouchableOpacity
                    style={estilos.botaoCaixa}
                    onPress={aoPressionar}
                >
                    <Texto style={estilos.botaoTexto}>{t('cesta.detalhes.buy')}</Texto>
                </TouchableOpacity>
                <Texto style={estilos.itenTitulo}>{t('cesta.detalhes.subtitle')}</Texto>
            </View>

        ) : <Vazia />}
    </SafeAreaView >
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
});