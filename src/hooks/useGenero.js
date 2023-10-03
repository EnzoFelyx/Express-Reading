import { useEffect, useState } from "react";
import { carregaGenero } from "../services/carregaDados";

export default function useGenero() {

    const [lista, setLista] = useState(''); //declarar sempre no começo

    useEffect(() => {
        const retorno = carregaGenero();
        setLista(retorno.categorias);
    }, []);

    return lista;
}