import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Icones from "../../../componentes/Icones";
import Texto from "../../../componentes/Texto";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get('screen').width;

export default function Genero({
    icon,
    nomeGenero,
}) {

    const navigation = useNavigation();

    const aoPressionar = () => { navigation.navigate('ExibirGenero', { nomeGenero }) }

    let { familia, nome } = { ...icon }

    return <>

        <TouchableOpacity style={estilos.genero} onPress={aoPressionar}>
            <Icones
                icone={nome}
                familia={familia}
                interagivel={false}
                tipo={'explorar'}
            />
            <Texto style={estilos.legenda}>{nomeGenero}</Texto>
        </TouchableOpacity>

    </>
}

const estilos = StyleSheet.create({

    genero: {
        borderWidth: 1,
        width: 0.45 * width,
        paddingVertical: 14,
        borderRadius: 8,
        flexDirection: "row",
    },
    legenda: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
    },
})

