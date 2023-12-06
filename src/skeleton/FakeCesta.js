import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import AnimetedView from "../componentes/AnimatedView";
import Topo from "../telas/Cesta/componentes/Topo";

const width = Dimensions.get('screen').width;

export default function FakeCesta({ visible, children }) {

    if (visible) {
        return <>
            <Topo />
            <View style={estilos.cesta}>
                <View style={estilos.nome}>
                    <AnimetedView width={'40%'} length={400} />
                </View>
                <View style={estilos.descricao}>
                    <AnimetedView width={'40%'} length={400} />
                </View>

                <View style={estilos.descricao}>
                    <AnimetedView width={'40%'} length={400} />
                </View>
                <View style={estilos.preco}>
                    <AnimetedView width={'40%'} length={200} />
                </View>
                <View style={estilos.botaoCaixa}>
                    <AnimetedView width={'40%'} length={400} />
                </View>
                <View style={estilos.itenTitulo}>
                    <AnimetedView width={'40%'} length={200} />
                </View>
            </View>

            <View style={{ flexDirection: "row", backgroundColor: 'white' }}>
                <View style={estilos.imagemLivro}>
                    <AnimetedView width={'60%'} length={100} />
                </View>
                <View style={estilos.conteudo}>
                    <View style={[estilos.informacao, { width: "100%", }]}>
                        <View style={estilos.nomelivro}>
                            <AnimetedView width={'40%'} length={200} />
                        </View>
                        <View style={estilos.autor}>
                            <AnimetedView width={'40%'} length={200} />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={estilos.quantidade}>
                                    <AnimetedView width={'40%'} length={100} />
                                </View>
                            </View>
                            <View style={estilos.precolivro}>
                                <AnimetedView width={'40%'} length={100} />
                            </View>
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
});