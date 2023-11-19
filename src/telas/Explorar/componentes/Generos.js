import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Icones from "../../../componentes/Icones";
import Texto from "../../../componentes/Texto";
import { useTranslation } from "react-i18next";

const width = Dimensions.get('screen').width;

export default function Genero({
    icon,
    nomeGeneroBr,
}) {

    const { t, i18n } = useTranslation();

    const genres = t(`explorar.categorias.${nomeGeneroBr}`);

    const navigation = useNavigation();

    const aoPressionar = () => { navigation.navigate('ExibirGenero', { genres, nomeGeneroBr }) }

    let { familia, nome } = { ...icon }

    return <>

        <TouchableOpacity style={estilos.genero} onPress={aoPressionar}>
            <Icones
                icone={nome}
                familia={familia}
                interagivel={false}
                tipo={'explorar'}
            />
            <Texto style={estilos.legenda}>{genres}</Texto>
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

