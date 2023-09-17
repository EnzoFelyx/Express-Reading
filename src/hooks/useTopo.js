import { useEffect, useState } from "react";
import { carregaEstante } from "../services/carregaDados";

export default function useTopo() {

    const [titulo, setTitulo] = useState('');
    const [legenda, setLegenda] = useState('');

    useEffect(() => {
        const retorno = carregaEstante();
        setTitulo(retorno.topo.titulo);
        setLegenda(retorno.topo.legenda);
    }, []);

    return [titulo, legenda];
}