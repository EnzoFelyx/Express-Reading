import React from "react";
import useLoading from "../../hooks/useLoading";
import FakeHome from "../../skeleton/FakeHome";
import Index from './Componentes/Index';
import Topo from './Componentes/Topo';
import Trends from './Componentes/Trends';

export default function Home() {

    const loading = useLoading();

    return <FakeHome visible={loading}>
        <Index topo={Topo} trends={Trends} />
    </FakeHome>
}