import { useEffect, useState } from "react";
import { buscaLivro } from "../services/requests/books";

export default function useBusca(termoDeBusca) {
    const [lista, setLista] = useState([]);

    const fetchData = async () => {
        try {
            if (termoDeBusca.trim() === "") {
                setLista([]);
            } else {
                const retorno = await buscaLivro(termoDeBusca);
                setLista(retorno);
            }
        } catch (error) {
            console.error("Erro ao buscar a lista de livros:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [termoDeBusca]);

    return lista;
}
