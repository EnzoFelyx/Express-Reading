import React from "react";
import { StyleSheet, View } from "react-native";
import Topo from './Componentes/Topo'
import Trends from './Componentes/Trends'
import Index from './Componentes/Index'

export default function Home() {
    return <Index topo={Topo} trends={Trends} />
}

const estilos = StyleSheet.create({

})