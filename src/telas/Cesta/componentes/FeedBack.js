import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import book from "../../../../assets/buyBook.png";
import Texto from "../../../componentes/Texto";
import Voltar from "../../../componentes/Voltar";
import { cesta } from '../../../../config/text.json';

const width = Dimensions.get('screen').width;

export default function FeedBack() {

    const { title, subtitle, thanku, biblioteca, home } = cesta.feedBack;

    const navigation = useNavigation();

    const aoPressionar = (destino) => {
        navigation.navigate(destino)
        navigation.dispatch(StackActions.popToTop());
    }

    return <ScrollView>
        <View style={estilos.topo}>
            <Texto style={estilos.titulo}>{title}</Texto>
        </View>
        <Voltar />
        <View style={{ backgroundColor: '#FFFF', paddingTop: 50, flex: 1, }}>
            <Image source={book} style={estilos.image} />
            <Texto style={estilos.subtitulo}>{subtitle}</Texto>
            <Texto style={estilos.legenda}>{thanku}</Texto>

            <TouchableOpacity
                style={estilos.botao2.caixa}
                onPress={() => aoPressionar('Biblioteca')}>
                <Texto style={estilos.botao2.texto}>{biblioteca}</Texto>
            </TouchableOpacity>

            <TouchableOpacity
                style={estilos.botao1.caixa}
                onPress={() => aoPressionar('Home')}>
                <Texto style={estilos.botao1.texto}>{home}</Texto>
            </TouchableOpacity>

        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#FFFFF",
        padding: 8,
    },
    titulo: {
        marginTop: 6,
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
        padding: 8,
        textAlign: "center",
        width: "100%",
    },
    legenda: {
        color: '#B4B4B4',
        paddingHorizontal: 20,
        marginTop: 8,
        fontSize: 18,
        lineHeight: 26,

    },
    subtitulo: {
        fontSize: 30,
        lineHeight: 42,
        fontWeight: "bold",
        marginLeft: 20,
        color: '#2A9F85'
    },
    image: {
        height: (768 / 1024) * width,
        width: "100%",
    },

    botao1: {
        caixa: {
            marginTop: 16,
            paddingVertical: 14,
            marginHorizontal: 32,
            borderRadius: 15,
            borderWidth: 1,
            marginBottom: 30,
        },
        texto: {
            textAlign: "center",
            fontSize: 16,
            lineHeight: 26,
            fontWeight: "bold",
        }
    },
    botao2: {
        caixa: {
            marginTop: 16,
            backgroundColor: "#2A9F85",
            paddingVertical: 14,
            marginHorizontal: 32,
            borderRadius: 15,
        },
        texto: {
            color: "#FFFFFF",
            textAlign: "center",
            fontSize: 16,
            lineHeight: 26,
            fontWeight: "bold",
        }
    }
})