import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, View } from "react-native";
import { useBarato, useJovens, useMelhores } from "../../../hooks/useHome";


export default function Index({ topo: Topo, trends: Trends }) {

    const { t, i18n } = useTranslation();
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
                                ? t('home.corpo.trend1')
                                : index === 1
                                    ? t('home.corpo.trend2')
                                    : t('home.corpo.trend3')
                        }
                        lista={item}
                    />
                </View>
            )}
        />
    );
}