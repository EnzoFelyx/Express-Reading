import React from "react";

import { TextInput } from "react-native";

export default function Input({ valor, acao }) {

    const numberToString = String(valor);

    const atualiza = (novoValor, acaoRetorno) => {
        const verfInt = novoValor.match(/^[0-9]*$/)
        if (!verfInt) return;

        const removeZeroLeft = novoValor.replace(/^(0)(.+)/, '$2');

        acaoRetorno(removeZeroLeft)
    }

    return <TextInput
        style={{
            borderBottomWidth: 0.4,
            textAlign: "center",
            borderColor: "#A3A3A3",
            color: "#636363",
        }}
        keyboardType="number-pad"
        selectTextOnFocus
        onChangeText={(novoValor) => { atualiza(novoValor, acao) }}
        value={numberToString}
    />
}
