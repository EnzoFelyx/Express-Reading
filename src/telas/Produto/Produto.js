import React from "react";
import Topo from "./componentes/Topo";
import Capa from "./componentes/Capa";
import Informacoes from "./componentes/Informacoes";
import { ScrollView } from "react-native";
import FakeProduto from "../../skeleton/FakeProduto";
import useLoading from "../../hooks/useLoading";

export default function Produto() {

    const loading = useLoading();

    return <>
        <FakeProduto visible={loading}>
            <ScrollView style={{ flex: 1 }}>
                <Topo />
                <Capa />
                <Informacoes />
            </ScrollView>
        </FakeProduto>
    </>
}