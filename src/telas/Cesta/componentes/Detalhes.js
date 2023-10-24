import React, { useEffect, useState } from "react";
import { Alert, Animated, FlatList, StyleSheet, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Testando from "../../../componentes/teste";
import useEstoque from "../../../hooks/useEstoque";
import { deletarLivroCesta } from "../../../services/requests/carrinho";
import Item from "./Item";

export default function Detalhes({ topo: Topo, total: Total }) {

    const lista = useEstoque();

    const [totalPrice, setTotalPrice] = useState(0);

    const [itemTotals, setItemTotals] = useState({});

    const [livros, setLivros] = useState([]);

    useEffect(() => {
        setLivros(lista);
        updateTotalPrice();
    }, []);


    const RightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })
        return <View style={estilos.RightActions.view}>
            <Animated.View style={{ transform: [{ scale: scale }] }} >
                <Testando style={estilos.RightActions.icone} />
            </Animated.View>
        </View >
    }

    async function handleDelete(id) {
        const resultado = await deletarLivroCesta(id);
        if (resultado === "sucesso") {
            Alert.alert("Livro retirado na cesta");
            const novaLista = livros.filter((livro) => livro.id !== id);
            setLivros(novaLista);
            updateTotalPrice();
        } else {
            Alert.alert("Erro ao retirar livro da cesta");
        }
    }

    useEffect(() => {
        updateTotalPrice();
    }, [lista, itemTotals]);

    const TopoLista = () => {
        return (
            <SafeAreaView>
                <Topo />
                <Total totalPrice={totalPrice} />
            </SafeAreaView>
        )
    }

    const updateTotalPrice = () => {
        const total = Object.values(itemTotals).reduce((acc, curr) => acc + curr, 0);
        setTotalPrice(total);
    }

    return (
        <FlatList
            data={lista}
            renderItem={({ item }) => (
                <Swipeable renderRightActions={RightActions} onSwipeableOpen={() => handleDelete(item.id)}>
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
        view: {
            backgroundColor: "#FF0000",
            justifyContent: 'center',
            flex: 1,
            alignItems: 'flex-end',
        },
        icone: {
            fontSize: 30,
            padding: 20,
            color: '#FFFF',
        }
    },
});
