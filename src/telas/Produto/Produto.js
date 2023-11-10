import React from "react";
import { ScrollView } from "react-native";
import useLoading from "../../hooks/useLoading";
import FakeProduto from "../../skeleton/FakeProduto";
import Capa from "./componentes/Capa";
import Informacoes from "./componentes/Informacoes";
import Topo from "./componentes/Topo";

export default function Produto() {

    const loading = useLoading();

    return <FakeProduto visible={loading}>
            <ScrollView style={{ flex: 1 }}>
                <Topo />
                <Capa />
                <Informacoes />
            </ScrollView>
        </FakeProduto>
}