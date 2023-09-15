import React, { useState } from "react";
import Texto from "./Texto";
import estrela from '../../assets/estrela.png'
import estrelaCinza from '../../assets/estrelaCinza.png'
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Estrelas({
    quant: quantAntiga,
    editavel = false,
    grande = false
}) {
    const [ quant, setQuant ] = useState(quantAntiga);

    const estilos = estilosFuncao(grande)

    const getImage = (index) => {
        if (index < quant) {
            return estrela
        }
        return estrelaCinza
    }

    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <TouchableOpacity
                    key={i} 
                    onPress={() => setQuant(i + 1)}
                    disabled={!editavel}
                    >
                    <Image source={getImage(i)} style={estilos.estrela} />
                </TouchableOpacity>
            );
        }
        return listaEstrelas
    }

    return <View style={estilos.estrelas}>
        <RenderEstrelas />
    </View>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrelas: {
        flexDirection: "row",
    },

    estrela: {
        width: grande ? 36 : 16,
        height: grande ? 36 : 16,
        marginRight: 5,
    }
})
