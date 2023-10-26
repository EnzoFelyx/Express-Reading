import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import Icones from "../../../componentes/Icones";
import { deletarLivroCesta, salvarCesta } from "../../../services/requests/carrinho";

export default function Adicionar({parametro, id}) {

    const navigation = useNavigation();

    async function deletar() {
        const resultado = await deletarLivroCesta(id);
        if (resultado === "sucesso") {
            Alert.alert("Livro retirado na cesta");
            navigation.goBack();
        } else {
            Alert.alert("Erro ao retirar livro da cesta");
        }
    }

    async function salvar() {
        const resultado = await salvarCesta(id)
        if (resultado === 'sucesso') {
            Alert.alert("Livro adicionado na cesta");
            navigation.goBack();
        }
        else {
            Alert.alert("Erro ao adicionar livro a cesta");
        }
    }

    if (parametro)
        return <>
            <TouchableOpacity style={estilos.remover} onPress={deletar}>
                <View style={{ alignSelf: "center", marginRight: 10 }}>
                    <Icones icone={'shopping-basket-remove'} familia={'Fontisto'} tipo={'capa'} cor={'#FFFF'} interagivel={false} />
                </View>
            </TouchableOpacity>
        </>

    else
        return <>
            <TouchableOpacity style={estilos.adicionar} onPress={salvar}>
                <View style={{ alignSelf: "center", marginRight: 10 }}>
                <Icones icone={'shopping-basket-add'} familia={'Fontisto'} tipo={'capa'} cor={'#FFFF'} interagivel={false} />
                </View>
            </TouchableOpacity>
        </>
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