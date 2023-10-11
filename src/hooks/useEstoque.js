import { useEffect, useState } from "react";
import { listaCesta } from "../services/requests/carrinho";

export default function useEstoque() {
    const [lista, setLista] = useState([]);

    const fetchData = async () => {
        try {
            const retorno = await listaCesta();
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
