import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { useBarato, useJovens, useMelhores } from "../../../hooks/useHome";

export default function Index({ topo: Topo, trends: Trends }) {

    const melhores = useMelhores();

    const barato = useBarato();

    const jovens = useJovens();

    return (
        <FlatList
            data={[melhores, barato, jovens]}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={() => <Topo />}
            renderItem={({ item, index }) => (
                <View style={{ flex: 1, marginTop: index === 0 ? 16 : 0 }}>
                    <Trends
                        titulo={
                            index === 0
                                ? 'Os nossos melhores (5☆)'
                                : index === 1
                                    ? 'Promoção (até R$29,99)'
                                    : 'HQs mais vendidas'
                        }
                        lista={item}
                    />
                </View>
            )}
        />
    );
}

const estilos = StyleSheet.create({

})