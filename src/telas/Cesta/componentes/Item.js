import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Input from "../../../componentes/Input";
import Texto from '../../../componentes/Texto';
import estilos from "../../../estilos";

export default function Item({
    nome,
    autor,
    preco,
    imagem,
    feedBack,
    updateTotalPrice,
    itemTotals,
    setItemTotals,
}) {
    const navigation = useNavigation()

    const aoPressionar = () => {
        navigation.navigate('Produto', feedBack)
    }

    const [quant, setQuant] = useState(1);
    const [total, setTotal] = useState(preco);

    useEffect(() => {
        const newTotal = quant * preco;
        setTotal(newTotal);
        itemTotals[nome] = newTotal;
        setItemTotals({ ...itemTotals });
        updateTotalPrice();
    }, [quant]);

    const atualizaQuantTotal = (novaQuant) => {
        setQuant(novaQuant);
    }

    return <TouchableOpacity style={{ flexDirection: "row", backgroundColor: 'white' }} onPress={aoPressionar} >
        <Image source={{ uri: imagem }} accessibilityLabel={nome} style={estilos.imagemLivro} />
        <View style={estilos.conteudo}>
            <View style={[estilos.informacao, { width: "100%", }]}>
                <Texto style={estilos.nome}>{nome}</Texto>
                <Texto style={estilos.autor}>{autor}</Texto>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Texto style={{ color: "#A3A3A3", }}>Quantidade : </Texto>
                        <Input valor={quant} acao={atualizaQuantTotal} />
                    </View>
                    <Texto style={estilos.preco}>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(total)
                        }
                    </Texto>
                </View>
            </View>
        </View>
    </TouchableOpacity>
}