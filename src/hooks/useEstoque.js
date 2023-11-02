import { useEffect, useState } from "react";
import { listaCesta } from "../services/requests/carrinho";
import { useIsFocused } from "@react-navigation/native";

export default function useEstoque() {
    const [lista, setLista] = useState([]);
    const estaNaTela = useIsFocused();

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
    }, [estaNaTela]);

    return lista;
}

