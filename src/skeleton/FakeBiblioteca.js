import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { biblioteca } from '../../config/text.json';
import AnimetedView from "../componentes/AnimatedView";
import Texto from "../componentes/Texto";
import { useTranslation } from "react-i18next";
const width = Dimensions.get('screen').width;

export default function FakeBiblioteca({ visible, children }) {

    const { t, i18n } = useTranslation();

    const SkeletonLivro = () => <>
        <View style={estilos.container}>
            <View style={estilos.prateleira}>
                <View style={estilos.imagemLivro}>
                    <AnimetedView width={'60%'} length={100} />
                </View>
                <View style={estilos.informacao}>
                    <View style={estilos.sobre}>
                        <AnimetedView width={'30%'} length={200} />
                    </View>
                    <View style={estilos.sobre}>
                        <AnimetedView width={'30%'} length={200} />
                    </View>
                    <View style={estilos.sobre}>
                        <AnimetedView width={'30%'} length={200} />
                    </View>
                </View>
            </View>
        </View>
    </>

    const SkeletonPrateleira = () => <View style={{ flexDirection: "row" }}>
        <SkeletonLivro />
        <SkeletonLivro />
        <SkeletonLivro />
    </View>

    if (visible) {

        return <ScrollView>

            <View style={estilos.topo}>
                <Texto style={estilos.titulo}>{t('biblioteca.topo.titulo')}</Texto>
                <View style={estilos.legenda}>
                    <AnimetedView width={'30%'} length={400} />
                </View>
            </View>

            <SkeletonPrateleira />

            <SkeletonPrateleira />

            <SkeletonPrateleira />


        </ScrollView>
    }
    return <>
        {children}
    </>

}

const estilos = StyleSheet.create({

    topo: {
        backgroundColor: "#112236",
        padding: 16,
        marginBottom: 15,
    },
    titulo: {
        color: "#DE9E69",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        overflow: "hidden",
    },

    legenda: {
        backgroundColor: "#C2C2C2",
        height: 22,
        borderRadius: 5,
        overflow: "hidden",
        marginTop: 8
    },

    sobre: {
        height: 15,
        backgroundColor: "#C2C2C2",
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 5,
        overflow: "hidden",
    },

    container: {
        flexDirection: "row",
    },

    prateleira: {
        borderWidth: 0.6,
        width: 0.30 * width,
        borderRadius: 8,
        marginLeft: 0.025 * width,
        marginBottom: 10,
        overflow: "hidden",
        paddingBottom: 10
    },

    imagemLivro: {
        overflow: "hidden",
        width: 100,
        height: 150,
        borderRadius: 6,
        marginVertical: 8,
        alignSelf: "center",
        backgroundColor: "#C2C2C2",

    },
})