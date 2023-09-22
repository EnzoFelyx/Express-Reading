import React from "react";
import { StyleSheet, View } from "react-native";
import Estrela from "../../../componentes/Estrela";
import Texto from "../../../componentes/Texto";
import Icones from '../../../componentes/Icones'
import { useRoute } from "@react-navigation/native";

export default function Dados() {


    const route = useRoute();

    const { avaliacao, paginas, capa, lingua} = route.params

    return <View style={estilos.dados}>

        <View>
            <View style={{ flexDirection: "row" }}>
                <Icones icone={'star'} tipo={'capa'} cor={"#FEB555"} />
                <Texto style={estilos.titulo}>{avaliacao}</Texto>
            </View>
            <Texto style={estilos.subtitulo}>Nota</Texto>
        </View>

        <View>
            <View style={{ flexDirection: "row" }}>
                <Icones icone={'book-open-page-variant-outline'} tipo={'capa'} cor={"#D672CF"} />
                <Texto style={estilos.titulo}>{paginas}</Texto>
            </View>
            <Texto style={estilos.subtitulo}>Páginas</Texto>
        </View>

        <View>
            <View style={{ flexDirection: "row" }}>
                <Icones icone={'book-outline'} tipo={'capa'} cor={"#EC7A7A"} />
                <Texto style={estilos.titulo}>{capa}</Texto>
            </View>
            <Texto style={estilos.subtitulo}>Capa</Texto>
        </View>

        <View>
            <View style={{ flexDirection: "row" }}>
                <Icones familia={'Fontisto'} icone={'world-o'} tipo={'capa'} cor={"#2590C8"} />
                <Texto style={estilos.titulo}>{lingua}</Texto>
            </View>
            <Texto style={estilos.subtitulo}>Idioma</Texto>
        </View>

    </View>
}

const estilos = StyleSheet.create({

    dados: {
        marginLeft: 20,
        justifyContent: "space-between",
        marginVertical: 40,
    },
    titulo: {
        fontSize: 16,
        marginTop: 4,
        fontWeight: "bold",
        marginLeft: 8,
    },

    subtitulo: {
        marginTop: 4,
        fontWeight: "bold",
        fontSize: 12,
        color: "#838B9A",
    }
})