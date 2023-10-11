import { useEffect, useState } from "react";
import { listaLivros } from "../services/requests/books";

export default function useDestaque() {
    const [lista, setLista] = useState([]);

    const fetchData = async () => {
        try {
            const retorno = await listaLivros();
            setLista(retorno);
        } catch (error) {
            console.error("Erro ao buscar a lista de cesta:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Certifique-se de que o array de dependências esteja vazio para executar apenas uma vez

    return lista;
}
