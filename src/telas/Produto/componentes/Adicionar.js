import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { produto } from '../../../../config/text.json';
import Icones from "../../../componentes/Icones";
import { deletarLivroCesta, salvarCesta } from "../../../services/requests/carrinho";

export default function Adicionar({ parametro, id }) {

    const navigation = useNavigation();

    const { removed, removeError, add, addError } = produto.warnings

    async function deletar() {
        const resultado = await deletarLivroCesta(id);
        if (resultado === "sucesso") {
            Alert.alert(removed);
            navigation.goBack();
        } else {
            Alert.alert(removeError);
        }
    }

    async function salvar() {
        const resultado = await salvarCesta(id)
        if (resultado === 'sucesso') {
            Alert.alert(add);
            navigation.goBack();
        }
        else {
            Alert.alert(addError);
        }
    }

    const Botao = ({ estilo, dowhat, icon }) => <TouchableOpacity style={estilo} onPress={dowhat}>
        <View style={{ alignSelf: "center", marginRight: 10 }}>
            <Icones icone={icon} familia={'Fontisto'} tipo={'capa'} cor={'#FFFF'} interagivel={false} />
        </View>
    </TouchableOpacity>

    if (parametro)
        return <Botao estilo={estilos.remover} dowhat={deletar} icon={'shopping-basket-remove'} />
    else
        return <Botao estilo={estilos.adicionar} dowhat={salvar} icon={'shopping-basket-add'} />
}

const estilos = StyleSheet.create({

    adicionar: {
        backgroundColor: "#2A9F85",
        padding: 14,
        width: "45%",
        alignSelf: "flex-end",
        borderRadius: 20,
        position: "absolute"
    },

    remover: {
        backgroundColor: "red",
        padding: 14,
        width: "45%",
        alignSelf: "flex-end",
        borderRadius: 20,
        position: "absolute"
    }
})