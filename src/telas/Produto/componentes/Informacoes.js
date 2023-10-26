import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import Texto from "../../../componentes/Texto";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icones from "../../../componentes/Icones";
import { buscaCesta } from "../../../services/requests/carrinho";
import Adicionar from "./Adicionar";

export default function Informacoes() {

    const [verificaResultado, setVerificaResultado] = useState();

    const route = useRoute();

    const { preco, descricao } = route.params

    const quantParcela = 6;

    const parcelas = preco / quantParcela;

    const parcela = parcelas.toFixed(2)

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
    }, );

    return <>
        <View style={estilos.informacoes}>

            <View style={estilos.descricao}>
                <Texto style={estilos.subtitle}>Descrição</Texto>
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
        paddingVertical: 8,
        width: "60%",
        alignSelf: "flex-end",
        borderRadius: 20,
    },

    comprar: {
        backgroundColor: "#2A9F85",
        padding: 14,
        width: "45%",
        alignSelf: "flex-end",
        borderRadius: 20,
        position: "absolute"
    },


    preco: {
        fontSize: 20,
        marginLeft: 16,
        fontWeight: "bold",
        lineHeight: 32,
    },

    add: {
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 26,
        color: "#FFFF",
        marginRight: 8,
    },

    descricao: {
        padding: 14,
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