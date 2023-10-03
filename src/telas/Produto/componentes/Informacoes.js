import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Texto from "../../../componentes/Texto";
import { useRoute } from "@react-navigation/native";
import Icones from "../../../componentes/Icones";

export default function Informacoes() {

    const route = useRoute();

    const { preco, descricao } = route.params

    const quantParcela = 6;

    const parcelas = preco / quantParcela;

    const parcela = parcelas.toFixed(2)

    return <>
        <View style={estilos.informacoes}>

            <View style={estilos.descricao}>
                <Texto style={estilos.subtitle}>Descrição</Texto>
                <Texto style={estilos.texto}>{descricao}</Texto>
            </View>
            <TouchableOpacity style={estilos.botaoCaixa}>
                <Texto style={estilos.preco}>R$ {preco}</Texto>
                <View style={estilos.comprar}>
                    <View style={{ alignSelf: "center", marginRight: 10 }}>
                        <Icones icone={'shopping-basket-add'} familia={'Fontisto'} tipo={'capa'} cor={'#FFFF'} interagivel={false}/>
                    </View>
                </View>
            </TouchableOpacity>
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