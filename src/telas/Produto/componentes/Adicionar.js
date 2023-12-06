import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import Icones from "../../../componentes/Icones";
import { deletarLivroCesta, salvarCesta } from "../../../services/requests/carrinho";

export default function Adicionar({ parametro, id }) {

    const navigation = useNavigation();
    const { t, i18n } = useTranslation();

    async function deletar() {
        const resultado = await deletarLivroCesta(id);
        if (resultado === "sucesso") {
            Alert.alert(t('produto.warnings.removed'));
            navigation.goBack();
        } else {
            Alert.alert(t('produto.warnings.removeError'));
        }
    }

    async function salvar() {
        const resultado = await salvarCesta(id)
        if (resultado === 'sucesso') {
            Alert.alert(t('produto.warnings.add'));
            navigation.goBack();
        }
        else {
            Alert.alert(t('produto.warnings.addError'));
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
        paddingVertical: 14,
        paddingHorizontal: 30,
        marginLeft: "auto",
        borderRadius: 20,
    },

    remover: {
        backgroundColor: "red",
        paddingVertical: 14,
        paddingHorizontal: 30,
        marginLeft: "auto",
        borderRadius: 20,
    }
})