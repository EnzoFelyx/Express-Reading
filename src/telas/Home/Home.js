import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Topo from './Componentes/Topo'
import Trends from './Componentes/Trends'
import Index from './Componentes/Index'
import FakeHome from "../../skeleton/FakeHome";
import useLoading from "../../hooks/useLoading";

export default function Home() {

    const loading = useLoading();

    return (
        <>
            <FakeHome visible={loading}>
                <Index topo={Topo} trends={Trends} />
            </FakeHome>
        </>
    );
}