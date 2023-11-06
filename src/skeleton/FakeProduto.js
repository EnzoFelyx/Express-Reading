import React, { useEffect } from "react";
import { Animated, Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Estrelas from "../componentes/Estrelas";
import Icones from "../componentes/Icones";
import Texto from "../componentes/Texto";
import Topo from '../telas/Produto/componentes/Topo';
const width = Dimensions.get('screen').width;

export default function FakeProduto({ visible, children }) {

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


    const SkeletonTexto = () => <View style={estilos.texto}>
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

    const SkeletonIcon = () => <View style={estilos.tituloIcon}>
        <Animated.View
            style={{
                width: '40%',
                height: '100%',
                opacity: 0.4,
                backgroundColor: "#FFF",
                transform: [{ translateX: translateX }],
            }}></Animated.View>
    </View>

    const SkeletonGenero = () => <View style={estilos.generos.caixa}>
        <Animated.View
            style={{
                width: '40%',
                height: '100%',
                opacity: 0.4,
                backgroundColor: "#FFF",
                transform: [{ translateX: translateX }],
            }}></Animated.View>
    </View>

    if (visible) {
        return <ScrollView>

            <Topo />

            <View style={estilos.capa}>
                <View style={{ flexDirection: "row" }}>
                    <View style={estilos.imagem}>
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
                    <View style={estilos.dados}>
                        <View>
                            <View style={{ flexDirection: "row" }}>
                                <Icones icone={'star'} tipo={'capa'} cor={"#FEB555"} />
                                <SkeletonIcon />
                            </View>
                            <Texto style={estilos.subtitulo}>Nota</Texto>
                        </View>

                        <View>
                            <View style={{ flexDirection: "row" }}>
                                <Icones icone={'book-open-page-variant-outline'} tipo={'capa'} cor={"#D672CF"} />
                                <SkeletonIcon />
                            </View>
                            <Texto style={estilos.subtitulo}>Páginas</Texto>
                        </View>

                        <View>
                            <View style={{ flexDirection: "row" }}>
                                <Icones icone={'book-outline'} tipo={'capa'} cor={"#EC7A7A"} />
                                <SkeletonIcon />
                            </View>
                            <Texto style={estilos.subtitulo}>Capa</Texto>
                        </View>

                        <View>
                            <View style={{ flexDirection: "row" }}>
                                <Icones familia={'Fontisto'} icone={'world-o'} tipo={'capa'} cor={"#2590C8"} />
                                <SkeletonIcon />
                            </View>
                            <Texto style={estilos.subtitulo}>Idioma</Texto>
                        </View>

                    </View>
                </View>
                <View style={estilos.titulo}>
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
            </View>

            <View style={{ alignItems: "center", }}>
                <View style={estilos.generos}>
                    <SkeletonGenero />
                    <SkeletonGenero />
                    <SkeletonGenero />
                </View>

                <Estrelas editavel={false} grande={true} />
            </View>

            <View style={estilos.informacoes}>

                <View style={{ padding: 14 }}>
                    <View style={estilos.subtitle}>
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
                    <SkeletonTexto />
                    <SkeletonTexto />
                    <SkeletonTexto />
                </View>
                <View style={estilos.botaoCaixa}>
                    <View style={estilos.preco}>
                        <Animated.View
                            style={{
                                width: '40%',
                                height: '100%',
                                opacity: 0.4,
                                backgroundColor: "#C2C2C2",
                                transform: [{ translateX: translateX2 }],
                            }}>
                        </Animated.View>
                    </View>
                    <View style={estilos.adicionar}>
                        <View style={{ alignSelf: "center", marginRight: 10 }}>
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



    capa: {
        marginLeft: 30,
        marginTop: 30,
    },

    imagem: {
        overflow: "hidden",
        borderRadius: 15,
        marginVertical: 8,
        backgroundColor: "#C2C2C2",
        width: 225,
        height: 338,
    },

    titulo: {
        height: 30,
        backgroundColor: "#C2C2C2",
        borderRadius: 5,
        marginTop: 10,
        overflow: "hidden",
        width: width / 1.4
    },

    autor: {
        height: 20,
        backgroundColor: "#C2C2C2",
        borderRadius: 5,
        marginTop: 15,
        overflow: "hidden",
        width: width / 2
    },

    generos: {

        flexDirection: "row",
        marginVertical: 8,

        caixa: {
            marginHorizontal: 12,
            marginVertical: 12,
            height: 30,
            backgroundColor: "#C2C2C2",
            borderRadius: 8,
            overflow: "hidden",
            width: width / 6
        },
    },
    dados: {
        marginLeft: 20,
        justifyContent: "space-between",
        marginVertical: 40,
    },

    tituloIcon: {
        height: 20,
        backgroundColor: "#C2C2C2",
        borderRadius: 5,
        overflow: "hidden",
        width: 50,
        marginLeft: 10,
    },

    subtitulo: {
        marginTop: 4,
        fontWeight: "bold",
        fontSize: 12,
        color: "#838B9A",
    },

    informacoes: {
        marginTop: 24,
        paddingBottom: 24,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#DAE1F7",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        marginHorizontal: 12,
        marginBottom: 40
    },

    botaoCaixa: {
        marginTop: 24,
        width: "60%",
        alignSelf: "flex-end",
        borderRadius: 20,
        height: 45,
        backgroundColor: "#FFFF",
        overflow: "hidden",
    },

    preco: {
        fontSize: 20,
        marginLeft: 16,
        fontWeight: "bold",
        lineHeight: 32,
    },

    subtitle: {
        height: 25,
        backgroundColor: "#C2C2C2",
        borderRadius: 8,
        marginTop: 10,
        overflow: "hidden",
        width: width / 2.5
    },

    texto: {
        height: 15,
        backgroundColor: "#C2C2C2",
        borderRadius: 8,
        marginTop: 10,
        overflow: "hidden",
    },

    adicionar: {
        width: "45%",
        alignSelf: "flex-end",
        borderRadius: 20,
        position: "absolute",
        height: 45,
        backgroundColor: "#2A9F85",
        overflow: "hidden",
    },

})