import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Texto from "../../../componentes/Texto";
import api from "../../services/api";

export default function Home() {

    function Buscar() {
        api.get('/livros').then(
            response => {
                console.log(response.data)
            }
        ).catch(error => {
            console.log(error)
        })
    }

    return <View>
        <TouchableOpacity style={estilos.botaoCaixa} onPress={Buscar}>
            <Texto style={estilos.botaoTexto}>
                Buscar
            </Texto>
        </TouchableOpacity>
    </View>
}

const estilos = StyleSheet.create({
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
})