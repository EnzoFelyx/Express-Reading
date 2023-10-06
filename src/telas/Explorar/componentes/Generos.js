import React from "react";
import { Dimensions, StyleSheet, View, TouchableOpacity } from "react-native";
import Texto from "../../../componentes/Texto";
import Icones from "../../../componentes/Icones";
import useGenero from "../../../hooks/useGenero";

const width = Dimensions.get('screen').width;

export default function Genero({
    icon,
    genero

}) {

    let { familia, nome } = { ...icon }

    return <>

        <TouchableOpacity style={estilos.genero}>
            <Icones
                icone={nome}
                familia={familia}
                interagivel={false}
                tipo={'explorar'}
            />
            <Texto style={estilos.legenda}>{genero}</Texto>
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

