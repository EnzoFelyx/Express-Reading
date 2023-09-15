import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Estrela from "./Estrela";

export default function Estrelas({
    quant: quantAntiga,
    editavel = false,
    grande = false
}) {
    const [quant, setQuant] = useState(quantAntiga);

    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <Estrela
                    key={i}
                    onPress={() => setQuant(i + 1)}
                    desabilitada={!editavel}
                    preenchida={i < quant}
                    grande={grande}
                />
            );
        }
        return listaEstrelas
    }

    return <View style={estilos.estrelas}>
        <RenderEstrelas />
    </View>
}

const estilos = StyleSheet.create({
    estrelas: {
        flexDirection: "row",
    },
})
