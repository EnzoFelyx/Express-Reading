import { useEffect, useState } from "react";
import { carregaCesta } from "../services/carregaDados";

export default function useItens() {

    const [titulo, setTitulo] = useState(''); //declarar sempre no começo
    const [lista, setLista] = useState('');

    useEffect(() => {
        const retorno = carregaCesta();
        setTitulo(retorno.estante.titulo)
        setLista(retorno.estante.lista)
    }, []);

    return [titulo, lista];
}