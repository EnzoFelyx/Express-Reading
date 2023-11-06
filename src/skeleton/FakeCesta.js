import React, { useEffect } from "react";
import { Animated, Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Topo from "../telas/Cesta/componentes/Topo";

const width = Dimensions.get('screen').width;

export default function FakeCesta({ visible, children }) {

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

    if (visible) {
        return <ScrollView>
            <Topo />
            <View style={estilos.cesta}>
                <View style={estilos.nome}>
                    <Animated.View
                        style={{
                            width: '40%',
                            height: '100%',
                            opacity: 0.4,
                            backgroundColor: "#FFF",
                            transform: [{ translateX: translateX3 }],
                        }}>
                    </Animated.View>
                </View>
                <View style={estilos.descricao}>
                    <Animated.View
                        style={{
                            width: '40%',
                            height: '100%',
                            opacity: 0.4,
                            backgroundColor: "#FFF",
                            transform: [{ translateX: translateX3 }],
                        }}>
                    </Animated.View>
                </View>

                <View style={estilos.descricao}>
                    <Animated.View
                        style={{
                            width: '40%',
                            height: '100%',
                            opacity: 0.4,
                            backgroundColor: "#FFF",
                            transform: [{ translateX: translateX3 }],
                        }}>
                    </Animated.View>
                </View>
                <View style={estilos.preco}>
                    <Animated.View
                        style={{
                            width: '40%',
                            height: '100%',
                            opacity: 0.4,
                            backgroundColor: "#FFF",
                            transform: [{ translateX: translateX2 }],
                        }}>
                    </Animated.View>
                </View>
                <View style={estilos.botaoCaixa}>
                    <Animated.View
                        style={{
                            width: '40%',
                            height: '100%',
                            opacity: 0.4,
                            backgroundColor: "#FFF",
                            transform: [{ translateX: translateX3 }],
                        }}>
                    </Animated.View>
                </View>
                <View style={estilos.itenTitulo}>
                    <Animated.View
                        style={{
                            width: '40%',
                            height: '100%',
                            opacity: 0.4,
                            backgroundColor: "#FFF",
                            transform: [{ translateX: translateX2 }],
                        }}>
                    </Animated.View>
                </View>
            </View>

            <View style={{ flexDirection: "row", backgroundColor: 'white' }}>
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
                <View style={estilos.conteudo}>
                    <View style={[estilos.informacao, { width: "100%", }]}>
                        <View style={estilos.nomelivro}>
                            <Animated.View
                                style={{
                                    width: '40%',
                                    height: '100%',
                                    opacity: 0.4,
                                    backgroundColor: "#FFF",
                                    transform: [{ translateX: translateX2 }],
                                }}>
                            </Animated.View>
                        </View>
                        <View style={estilos.autor}>
                            <Animated.View
                                style={{
                                    width: '40%',
                                    height: '100%',
                                    opacity: 0.4,
                                    backgroundColor: "#FFF",
                                    transform: [{ translateX: translateX2 }],
                                }}>
                            </Animated.View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={estilos.quantidade}>
                                    <Animated.View
                                        style={{
                                            width: '40%',
                                            height: '100%',
                                            opacity: 0.4,
                                            backgroundColor: "#FFF",
                                            transform: [{ translateX: translateX }],
                                        }}>
                                    </Animated.View>
                                </View>
                            </View>
                            <View style={estilos.precolivro}>
                                <Animated.View
                                    style={{
                                        width: '40%',
                                        height: '100%',
                                        opacity: 0.4,
                                        backgroundColor: "#FFF",
                                        transform: [{ translateX: translateX }],
                                    }}>
                                </Animated.View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </ScrollView>
    }
    return <>
        {children}
    </>
}


const estilos = StyleSheet.create({

    nome: {
        height: 40,
        backgroundColor: "#C2C2C2",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        width: width / 1.8,
        overflow: "hidden",
    },

    descricao: {
        height: 20,
        backgroundColor: "#C2C2C2",
        borderRadius: 5,
        marginTop: 10,
        overflow: "hidden",
    },
    preco: {
        height: 40,
        backgroundColor: "#C2C2C2",
        borderRadius: 5,
        marginTop: 25,
        width: width / 3,
        overflow: "hidden",
    },
    botaoCaixa: {

        height: 60,
        backgroundColor: "#C2C2C2",
        borderRadius: 5,
        marginTop: 25,
        overflow: "hidden",

    },

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    itenTitulo: {

        height: 30,
        backgroundColor: "#C2C2C2",
        borderRadius: 5,
        marginTop: 25,
        marginBottom: 10,
        width: width / 2,
        overflow: "hidden",
    },
    imagemLivro: {
        width: 60,
        height: 90,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
        backgroundColor: "#C2C2C2",
        borderRadius: 5,
    },

    conteudo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },

    informacao: {
        justifyContent: "space-between",
        marginVertical: 6,
    },

    nomelivro: {
        height: 15,
        backgroundColor: "#C2C2C2",
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 5,
        overflow: "hidden",
        width: width / 2
    },
    autor: {
        height: 15,
        backgroundColor: "#C2C2C2",
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 5,
        overflow: "hidden",
        width: width / 3
    },
    quantidade: {
        height: 15,
        backgroundColor: "#C2C2C2",
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 5,
        overflow: "hidden",
        width: width / 4
    },
    precolivro: {
        height: 15,
        backgroundColor: "#C2C2C2",
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 5,
        overflow: "hidden",
        width: width / 5
    },
    avaliacao: {
        justifyContent: "flex-end",
    },
});