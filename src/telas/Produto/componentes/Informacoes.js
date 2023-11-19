import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import Texto from "../../../componentes/Texto";
import { buscaCesta } from "../../../services/requests/carrinho";
import Adicionar from "./Adicionar";

export default function Informacoes() {

    const { t, i18n } = useTranslation();
    const [verificaResultado, setVerificaResultado] = useState();
    const route = useRoute();
    const { preco, descricao } = route.params

    async function verifica() {
        const resultado = await buscaCesta(route.params.id);
        if (resultado === 'encontrado') {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        async function fetchData() {
            const resultado = await verifica();
            setVerificaResultado(resultado);
        }
        fetchData();
    },);

    return <>
        <View style={estilos.informacoes}>
            <View style={{ padding: 14 }}>
                <Texto style={estilos.subtitle}>{t('produto.description')}</Texto>
                <Texto style={estilos.texto}>{descricao}</Texto>
            </View>
            <View style={estilos.botaoCaixa}>
                <Texto style={estilos.preco}>{Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(preco)}</Texto>
                <Adicionar parametro={verificaResultado} id={route.params.id} />
            </View>
        </View>
    </>
}

const estilos = StyleSheet.create({

    informacoes: {
        marginTop: 24,
        paddingBottom: 24,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#DAE1F7",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        marginHorizontal: 12,
    },

    botaoCaixa: {
        marginTop: 24,
        backgroundColor: "#ffff",
        flexDirection: "row",
        alignSelf: "flex-end",
        borderRadius: 20,
        alignItems: "center"
    },

    preco: {
        fontSize: 20,
        marginLeft: 16,
        fontWeight: "bold",
        lineHeight: 32,
        marginRight: 8
    },

    subtitle: {
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 26
    },

    texto: {
        fontSize: 16,
        marginTop: 12,
        fontSize: 16,
        color: "#848a98"
    }
})