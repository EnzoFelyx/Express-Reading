import React from "react";
import Topo from "./componentes/Topo";
import Estante from "./componentes/Estante";
import FakeBiblioteca from "../../skeleton/FakeBiblioteca";
import useLoading from "../../hooks/useLoading";

export default function Biblioteca() {

    const loading = useLoading();

    return <>
        <FakeBiblioteca visible={loading}>
            <Estante topo={Topo} />
        </FakeBiblioteca>
    </>

}