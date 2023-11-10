import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { produto } from '../../../../config/text.json';
import Icones from '../../../componentes/Icones';
import Texto from "../../../componentes/Texto";

export default function Dados() {

    const route = useRoute();
    
    const { avaliacao, paginas, capa, lingua } = route.params;
    const { star, pag, type, language } = produto.dados

    const Infomation = ({ icone, cor, val, legend, family = null, }) => <View>
        <View style={{ flexDirection: "row" }}>
            <Icones familia={family} icone={icone} tipo={'capa'} cor={cor} />
            <Texto style={estilos.titulo}>{val}</Texto>
        </View>
        <Texto style={estilos.subtitulo}>{legend}</Texto>
    </View>


    return <View style={estilos.dados}>
        <Infomation icone={'star'} cor={"#FEB555"} val={avaliacao} legend={star} />
        <Infomation icone={'book-open-page-variant-outline'} cor={"#D672CF"} val={paginas} legend={pag} />
        <Infomation icone={'book-outline'} cor={"#EC7A7A"} val={capa} legend={type} />
        <Infomation icone={'world-o'} cor={"#2590C8"} val={lingua} legend={language} family={'Fontisto'} />
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