import React from "react";
import { Dimensions, StyleSheet, View, TouchableOpacity } from "react-native";
import Texto from "../../../componentes/Texto";
import Icones from "../../../componentes/Icones";
import useGenero from "../../../hooks/useGenero";

const width = Dimensions.get('screen').width;

export default function Genero({ 
    id,
    cor,
    icon,
    genero
                                        
 }) {

    let {familia, icone} = {...icon}

    return <>

        <TouchableOpacity style={estilos.genero}>
            <Icones icone={icone} familia={familia} interagivel={false} tipo={'explorar'}/>
            <Texto style={estilos.legenda}>{genero}</Texto>
        </TouchableOpacity>

    </>
}

const estilos = StyleSheet.create({

    genero: {
        backgroundColor: "red",
        width: 0.45 * width,
        paddingVertical: 14,
        alignItems: "center",
        borderRadius: 8,
    },
    legenda: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "bold",
    },
})

