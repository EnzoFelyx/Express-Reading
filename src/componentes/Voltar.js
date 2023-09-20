import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Voltar() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={estilos.voltar}
            onPress={() => { navigation.goBack() }}
        >
            <MaterialCommunityIcons name="chevron-left" size={40} color="black" />
        </TouchableOpacity>
    )
}


const estilos = StyleSheet.create({
    voltar: {
        position: "absolute",
        padding: 16,
    },

})