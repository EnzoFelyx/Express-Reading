import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { universal } from '../../../../config/text.json';
import Input from "../../../componentes/Input";
import Texto from '../../../componentes/Texto';
import estilos from "../../../estilos";
import { TextInput } from "react-native-gesture-handler";

export default function Item({
    nome,
    autor,
    preco,
    imagem,
    feedBack,

}) {
    const navigation = useNavigation()

    const aoPressionar = () => { navigation.navigate('Produto', feedBack) }

    const realMoeda = universal.real;

    const [quant, setQuant] =  useState(1);

    return <TouchableOpacity style={{ flexDirection: "row", backgroundColor: 'white' }} onPress={aoPressionar} >
        <Image source={imagem} accessibilityLabel={nome} style={estilos.imagemLivro} />
        <View style={estilos.conteudo}>
            <View style={[estilos.informacao, { width: "100%", }]}>
                <Texto style={estilos.nome}>{nome}</Texto>
                <Texto style={estilos.autor}>{autor}</Texto>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Texto style={{color: "#A3A3A3",}}>Quantidade : </Texto>
                        <Input valor={quant} acao={setQuant}/>
                    </View>
                    <Texto style={estilos.preco}>{realMoeda}{preco}</Texto>
                </View>
            </View>
        </View>
    </TouchableOpacity>
}