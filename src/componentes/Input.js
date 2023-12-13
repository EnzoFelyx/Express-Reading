import React from "react";

import { TextInput } from "react-native";

export default function Input({ valor, acao }) {
    const numberToString = String(valor);

    const atualiza = (novoValor, acaoRetorno) => {
        const digit = novoValor.charAt(0); // Obtém o primeiro dígito do novoValor
        if (digit === '' || /^\d$/.test(digit)) {
            acaoRetorno(digit); // Retorna apenas o primeiro dígito ou uma string vazia
        }
    }

    return (
        <TextInput
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
    );
}

