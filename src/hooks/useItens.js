import { useEffect, useState } from "react";
import { carregaItensPreco } from "../services/carregaDados";

export default function useItens() {

    const [preco, setPreco] = useState(''); //declarar sempre no começo

    useEffect(() => {
        const retorno = carregaItensPreco();
        setPreco(retorno.preco)
    }, []);

    return preco;
}