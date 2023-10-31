import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Vitrine from "./Vitrine";
import Texto from "../../../componentes/Texto";

export default function Trends({ titulo, lista }) {

    return <View>
        <Texto style={estilos.titulo}>{titulo}</Texto>
        <FlatList
            nestedScrollEnabled={true}
            data={lista}
            renderItem={({ item }) => <Vitrine {...item} feedBack={item} />}
            keyExtractor={({ nome }) => String(nome)}
            horizontal
            style={{ marginRight: 10, }}
        />
    </View>
}

const estilos = StyleSheet.create({

    titulo: {
        fontSize: 20,
        lineHeight: 26,
        color: "#464646",
        fontWeight: "bold",
        margin: 12,
    }

})