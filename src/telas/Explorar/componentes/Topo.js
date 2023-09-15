import React from "react";
import Texto from "../../../componentes/Texto";
import logo from "../../../../assets/explorarLogo.png"
import { Image, StyleSheet, View } from "react-native";
import { carregaEstante } from "../../../services/carregaDados";

class Topo extends React.Component {

    state = {
        topo: {
            titulo: '',
            legenda: '',
        },
    }

    atualizaTopo() {
        const retorno = carregaEstante();
        this.setState({topo: retorno.topo});
    }

    componentDidMount() {
        this.atualizaTopo()
    }


    render() {
        return <View style={estilos.topo}>
            <Image source={logo} style={estilos.imagem} />
            <Texto style={estilos.titulo}>{this.state.topo.titulo}</Texto>
            <Texto style={estilos.legenda}>{this.state.topo.legenda}</Texto>
        </View>
    }
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#112236",
        padding: 16,
    },
    imagem: {
        height: 75,
        width: 270,
        backgroundColor: "#112236",
    },
    titulo: {
        color: "#DE9E69",
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: "#DE9E69",
    }
})

export default Topo;