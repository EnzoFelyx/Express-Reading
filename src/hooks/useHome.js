import { useEffect, useState } from "react";
import { lista5estrelas, listaBarato, listaJovens } from "../services/requests/home";

export function useMelhores() {
    const [lista, setLista] = useState([]);

    const fetchData = async () => {
        try {
            const retorno = await lista5estrelas();
            setLista(retorno);
        } catch (error) {
            console.error("Erro ao buscar a lista de cesta:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return lista;
}

export function useBarato() {
    const [lista, setLista] = useState([]);

    const fetchData = async () => {
        try {
            const retorno = await listaBarato();
            setLista(retorno);
        } catch (error) {
            console.error("Erro ao buscar a lista de cesta:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return lista;
}

export function useJovens() {
    const [lista, setLista] = useState([]);

    const fetchData = async () => {
        try {
            const retorno = await listaJovens();
            setLista(retorno);
        } catch (error) {
            console.error("Erro ao buscar a lista de cesta:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return lista;
}