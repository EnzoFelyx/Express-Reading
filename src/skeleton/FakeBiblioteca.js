import React, { useEffect } from "react";
import { Animated, Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Texto from "../componentes/Texto";
const width = Dimensions.get('screen').width;

export default function FakeBiblioteca({ visible, children }) {

    const AnimatedValue = new Animated.Value(0);

    useEffect(() => {
        circleAnimated();

        return () => circleAnimated();
    }, []);

    const circleAnimated = () => {
        AnimatedValue.setValue(0)
        Animated.timing(
            AnimatedValue,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }
        ).start(() => {
            setTimeout(() => {
                circleAnimated()
            }, 1000);
        })
    }

    const translateX = AnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-10, 100]
    });

    const translateX2 = AnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-10, 200]
    });


    const translateX3 = AnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-10, 400]
    });


    const SkeletonLivro = () => <>
        <View style={estilos.container}>
            <View style={estilos.prateleira}>
                <View style={estilos.imagemLivro}>
                    <Animated.View
                        style={{
                            width: '60%',
                            height: '100%',
                            opacity: 0.4,
                            backgroundColor: "#FFF",
                            transform: [{ translateX: translateX }],
                        }}>
                    </Animated.View>
                </View>
                <View style={estilos.informacao}>
                    <View style={estilos.sobre}>
                        <Animated.View
                            style={{
                                width: '30%',
                                height: '100%',
                                opacity: 0.4,
                                backgroundColor: "#FFF",
                                transform: [{ translateX: translateX2 }],
                            }}>
                        </Animated.View>
                    </View>
                    <View style={estilos.sobre}>
                        <Animated.View
                            style={{
                                width: '30%',
                                height: '100%',
                                opacity: 0.4,
                                backgroundColor: "#FFF",
                                transform: [{ translateX: translateX2 }],
                            }}>
                        </Animated.View>
                    </View>
                    <View style={estilos.sobre}>
                        <Animated.View
                            style={{
                                width: '30%',
                                height: '100%',
                                opacity: 0.4,
                                backgroundColor: "#FFF",
                                transform: [{ translateX: translateX2 }],
                            }}>
                        </Animated.View>
                    </View>
                </View>
            </View>
        </View>
    </>

    const SkeletonPrateleira = () => <>

        <View style={{ flexDirection: "row" }}>
            <SkeletonLivro />
            <SkeletonLivro />
            <SkeletonLivro />
        </View>
    </>

    if (visible) {

        return <ScrollView>

            <View style={estilos.topo}>
                <Texto style={estilos.titulo}>Biblioteca</Texto>
                <View style={estilos.legenda}>
                    <Animated.View
                        style={{
                            width: '30%',
                            height: '100%',
                            opacity: 0.4,
                            backgroundColor: "#FFF",
                            transform: [{ translateX: translateX3 }],
                        }}>
                    </Animated.View>
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