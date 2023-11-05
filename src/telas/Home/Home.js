import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Topo from './Componentes/Topo'
import Trends from './Componentes/Trends'
import Index from './Componentes/Index'
import FakeHome from "../../skeleton/FakeHome";

export default function Home() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let timer = setInterval(() => {
            setLoading(false)
        }, 3000)
    }, [])


    return <>
        <FakeHome visible={loading}>
            <Index topo={Topo} trends={Trends} />
        </FakeHome>
    </>
}
