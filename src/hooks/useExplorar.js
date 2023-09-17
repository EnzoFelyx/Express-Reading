import { useEffect, useState } from "react";
import { carregaEstante } from "../services/carregaDados";

export default function useExplorar() {

    const [subTitulo, setSubTitulo] = useState(''); //declarar sempre no começo
    const [lista, setLista] = useState('');

    useEffect(() => {
        const retorno = carregaEstante();
        setSubTitulo(retorno.estante.titulo);
        setLista(retorno.estante.lista);
    }, []);

    return [subTitulo, lista];
}