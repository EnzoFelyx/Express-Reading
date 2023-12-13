import { useRoute } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import Icones from '../../../componentes/Icones';
import Texto from "../../../componentes/Texto";

export default function Dados() {

    const route = useRoute();

    const { avaliacao, paginas, capa, lingua } = route.params;
    const { t, i18n } = useTranslation();

    const Infomation = ({ icone, cor, val, legend, family = null, }) => <View>
        <View style={estilos.container}>
            <Icones familia={family} icone={icone} tipo={'capa'} cor={cor} />
            <Texto style={estilos.titulo}>{val}</Texto>
        </View>
        <Texto style={estilos.subtitulo}>{legend}</Texto>
    </View>


    return <View style={estilos.dados}>
        <Infomation icone={'star'} cor={"#FEB555"} val={avaliacao} legend={t('produto.dados.star')} />
        <Infomation icone={'book-open-page-variant-outline'} cor={"#D672CF"} val={paginas} legend={t('produto.dados.pag')} />
        <Infomation icone={'book-outline'} cor={"#EC7A7A"} val={capa} legend={t('produto.dados.type')} />
        <Infomation icone={'world-o'} cor={"#2590C8"} val={lingua} legend={t('produto.dados.language')} family={'Fontisto'} />
    </View>
}

const estilos = StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: "center"
    },

    dados: {
        marginLeft: 20,
        justifyContent: "space-between",
        marginVertical: 40,
    },
    titulo: {
        fontSize: 16,
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