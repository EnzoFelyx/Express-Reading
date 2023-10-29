import React, { useEffect, useState } from "react";
import { Alert, Animated, FlatList, StyleSheet, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Testando from "../../../componentes/teste";
import useEstoque from "../../../hooks/useEstoque";
import { deletarLivroCesta } from "../../../services/requests/carrinho";
import Item from "./Item";

export default function Detalhes({ topo: Topo, total: Total, vazia: Vazia }) {
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
            Alert.alert("Livro retirado na cesta");
            const novaLista = livros.filter((livro) => livro.id !== id);
            setLivros(novaLista);

            setTotalPrice(totalPrice - price);
        } else {
            Alert.alert("Erro ao retirar livro da cesta");
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
        return <View style={estilos.RightActions.view}>
            <Animated.View style={{ transform: [{ scale: scale }] }} >
                <Testando style={estilos.RightActions.icone} />
            </Animated.View>
        </View >
    }

    if (livros.length === 0) {
        return <Vazia />
    }
    else {
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
