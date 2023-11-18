import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Icones from "../../../componentes/Icones";
import Texto from "../../../componentes/Texto";

const width = Dimensions.get('screen').width;

export default function Genero({
    icon,
    nomeGeneroBr,
    nomeGeneroEn,
}) {

    const navigation = useNavigation();

    const aoPressionar = () => { navigation.navigate('ExibirGenero', { nomeGeneroBr }) }

    let { familia, nome } = { ...icon }

    return <>

        <TouchableOpacity style={estilos.genero} onPress={aoPressionar}>
            <Icones
                icone={nome}
                familia={familia}
                interagivel={false}
                tipo={'explorar'}
            />
            <Texto style={estilos.legenda}>{nomeGeneroBr}</Texto>
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

