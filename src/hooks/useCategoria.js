import { useEffect, useState } from "react";
import { buscaGenero } from "../services/requests/books";

export default function useBusca(genero) {
    const [lista, setLista] = useState([]);

    const fetchData = async () => {
        try {
            const retorno = await buscaGenero(genero);
            setLista(retorno);

        } catch (error) {
            console.error("Erro ao buscar a lista de genero:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [genero]);

    return lista;
}
