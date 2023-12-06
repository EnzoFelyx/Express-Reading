import React from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, StyleSheet, View } from "react-native";
import AnimetedView from "../componentes/AnimatedView";
import Estrelas from "../componentes/Estrelas";
import Icones from "../componentes/Icones";
import Texto from "../componentes/Texto";
import Topo from '../telas/Produto/componentes/Topo';
const width = Dimensions.get('screen').width;

export default function FakeProduto({ visible, children }) {

    const { t, i18n } = useTranslation();

    const SkeletonTexto = () => <View style={estilos.texto}>
        <AnimetedView width={'40%'} length={400} />
    </View>

    const SkeletonIcon = () => <View style={estilos.tituloIcon}>
        <AnimetedView width={'40%'} length={100} />
    </View>

    const SkeletonGenero = () => <View style={estilos.generos.caixa}>
        <AnimetedView width={'40%'} length={100} />
    </View>

    if (visible) {
        return <>

            <Topo />

            <View style={estilos.capa}>
                <View style={{ flexDirection: "row" }}>
                    <View style={estilos.imagem}>
                        <AnimetedView width={'40%'} length={400} />
                    </View>
                    <View style={estilos.dados}>
                        <View>
                            <View style={{ flexDirection: "row" }}>
                                <Icones icone={'star'} tipo={'capa'} cor={"#FEB555"} />
                                <SkeletonIcon />
                            </View>
                            <Texto style={estilos.subtitulo}>{t('produto.dados.star')}</Texto>
                        </View>

                        <View>
                            <View style={{ flexDirection: "row" }}>
                                <Icones icone={'book-open-page-variant-outline'} tipo={'capa'} cor={"#D672CF"} />
                                <SkeletonIcon />
                            </View>
                            <Texto style={estilos.subtitulo}>{t('produto.dados.pag')}</Texto>
                        </View>

                        <View>
                            <View style={{ flexDirection: "row" }}>
                                <Icones icone={'book-outline'} tipo={'capa'} cor={"#EC7A7A"} />
                                <SkeletonIcon />
                            </View>
                            <Texto style={estilos.subtitulo}>{t('produto.dados.type')}</Texto>
                        </View>

                        <View>
                            <View style={{ flexDirection: "row" }}>
                                <Icones familia={'Fontisto'} icone={'world-o'} tipo={'capa'} cor={"#2590C8"} />
                                <SkeletonIcon />
                            </View>
                            <Texto style={estilos.subtitulo}>{t('produto.dados.language')}</Texto>
                        </View>

                    </View>
                </View>
                <View style={estilos.titulo}>
                    <AnimetedView width={'40%'} length={400} />
                </View>
                <View style={estilos.autor}>
                    <AnimetedView width={'40%'} length={200} />
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
                        <AnimetedView width={'40%'} length={200} />

                    </View>
                    <SkeletonTexto />
                    <SkeletonTexto />
                    <SkeletonTexto />
                </View>
                <View style={estilos.botaoCaixa}>
                    <View style={estilos.preco}>
                        <AnimetedView width={'40%'} length={200} color={'#C2C2C2'} />
                    </View>
                    <View style={estilos.adicionar}>
                        <View style={{ alignSelf: "center", marginRight: 10 }}>
                        </View>
                    </View>
                </View>
            </View>


        </>
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