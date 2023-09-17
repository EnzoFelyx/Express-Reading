import { useEffect, useState } from "react";
import { carregaEstoque } from "../services/carregaDados";

export default function useEstoque() {

    const [lista, setLista] = useState(''); //declarar sempre no começo

    useEffect(() => {
        const retorno = carregaEstoque();
        setLista(retorno.livros);
    }, []);

    return lista;
}