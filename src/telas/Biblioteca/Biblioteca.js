import React from "react";
import useLoading from "../../hooks/useLoading";
import FakeBiblioteca from "../../skeleton/FakeBiblioteca";
import Estante from "./componentes/Estante";
import Topo from "./componentes/Topo";

export default function Biblioteca() {

    const loading = useLoading();

    return <FakeBiblioteca visible={loading}>
        <Estante topo={Topo} />
    </FakeBiblioteca>
}