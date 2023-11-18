import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, Animated, FlatList, StyleSheet, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icones from "../../../componentes/Icones";
import useEstoque from "../../../hooks/useEstoque";
import { deletarLivroCesta } from "../../../services/requests/carrinho";
import Item from "./Item";

export default function Detalhes({ topo: Topo, total: Total }) {

    const { t, i18n } = useTranslation();
    const lista = useEstoque();
    const [totalPrice, setTotalPrice] = useState(0);
    const [itemTotals, setItemTotals] = useState({});
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        if (lista.length > 0) {
            setLivros(lista);
            updateTotalPrice();
        }
        else {
            setLivros(lista)
            setTotalPrice(0)
        }
    }, [lista]);

    useEffect(() => {
        if (lista.length > 0) {
            updateTotalPrice();
        }
    }, [lista, itemTotals]);

    async function handleDelete(id, price) {
        const resultado = await deletarLivroCesta(id);
        if (resultado === "sucesso") {
            Alert.alert(t('cesta.warnings.removed'));
            const novaLista = livros.filter((livro) => livro.id !== id);
            setLivros(novaLista);

            setTotalPrice(totalPrice - price);
        } else {
            Alert.alert(t('cesta.warnings.removeError'));
        }
    }

    const updateTotalPrice = () => {
        const total = Object.values(itemTotals).reduce((acc, curr) => acc + curr, 0);
        setTotalPrice(total);
    }

    const TopoLista = () => {
        return (
            <SafeAreaView>
                <Topo />
                <Total totalPrice={totalPrice} />
            </SafeAreaView>
        )
    }

    const RightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })
        return <View style={estilos.RightActions}>
            <Animated.View style={{ transform: [{ scale: scale }] }} >
                <Icones icone={'delete-outline'} cor={'white'} interagivel={false} tipo={'cesta'} />
            </Animated.View>
        </View >
    }


    return (
        <FlatList
            data={livros}
            renderItem={({ item }) => (
                <Swipeable renderRightActions={RightActions} onSwipeableOpen={() => handleDelete(item.id, itemTotals[item.nome])}>
                    <Item
                        {...item}
                        feedBack={item}
                        updateTotalPrice={updateTotalPrice}
                        itemTotals={itemTotals}
                        setItemTotals={setItemTotals}
                    />
                </Swipeable>
            )}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={TopoLista}
            removeClippedSubviews={false}
        />
    )
}

const estilos = StyleSheet.create({
    RightActions: {
        backgroundColor: "#FF0000",
        justifyContent: 'center',
        flex: 1,
        alignItems: 'flex-end',
    },
});
