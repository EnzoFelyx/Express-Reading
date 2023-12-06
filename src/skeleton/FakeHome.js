import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import AnimetedView from "../componentes/AnimatedView";
import Texto from "../componentes/Texto";
const width = Dimensions.get('screen').width;

export default function FakeHome({ visible, children }) {

    const SkeletonLivro = () => <>
        <View style={{ flexDirection: "row" }}>
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
                </View>
            </View>
        </View>
    </>

    const SkeletonPrateleira = () => <>
        <View style={estilos.subtitulo}>
            <AnimetedView width={'30%'} length={400} />
        </View>
        <View style={{ flexDirection: "row" }}>
            <SkeletonLivro />
            <SkeletonLivro />
            <SkeletonLivro />
        </View>
    </>

    if (visible) {
        return <>
            <View style={estilos.topo}>
                <Texto style={estilos.titulo}>Home</Texto>
                <View style={estilos.legenda}>
                    <AnimetedView width={'30%'} length={400} />
                </View>
                <View style={estilos.sublegenda}>
                    <AnimetedView width={'30%'} length={200} />
                </View>
            </View>
            <View style={estilos.busca}>
                <AnimetedView width={'30%'} length={400} />
            </View>
            <SkeletonPrateleira />
            <SkeletonPrateleira />
            <SkeletonPrateleira />
        </>
    }

    return (
        <>
            {children}
        </>
    );

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

    busca: {
        backgroundColor: "#C2C2C2",
        height: 50,
        borderRadius: 8,
        margin: 12,
        overflow: "hidden",
    },

    subtitulo: {
        backgroundColor: "#C2C2C2",
        height: 30,
        borderRadius: 5,
        margin: 12,
        width: width / 1.5,
        overflow: "hidden",
    },
    legenda: {
        backgroundColor: "#C2C2C2",
        height: 22,
        borderRadius: 5,
        overflow: "hidden",
        marginTop: 8
    },

    sublegenda: {
        backgroundColor: "#C2C2C2",
        height: 22,
        borderRadius: 5,
        marginTop: 8,
        overflow: "hidden",
        width: width / 2
    },

    sobre: {
        height: 15,
        backgroundColor: "#C2C2C2",
        borderRadius: 5,
        marginBottom: 5,
        marginHorizontal: 5,
        overflow: "hidden",
    },

    prateleira: {
        borderWidth: 0.6,
        width: 0.30 * width,
        borderRadius: 8,
        marginLeft: 0.025 * width,
        marginBottom: 10,
        overflow: "hidden"
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