import React from "react";
import { FlatList, View } from "react-native";
import { home } from '../../../../config/text.json';
import { useBarato, useJovens, useMelhores } from "../../../hooks/useHome";

export default function Index({ topo: Topo, trends: Trends }) {

    const melhores = useMelhores();
    const barato = useBarato();
    const jovens = useJovens();

    const { trend1, trend2, trend3 } = home.corpo;

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
                                ? trend1
                                : index === 1
                                    ? trend2
                                    : trend3
                        }
                        lista={item}
                    />
                </View>
            )}
        />
    );
}