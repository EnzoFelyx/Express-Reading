import { useEffect, useState } from "react";
import api from "../services/api";

export default function useLoading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDataFromAPI() {
            try {
                await api();
                setTimeout(() => {
                    setLoading(false);
                }, ); // 2 segundos para mostrar o skeleton
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
                setTimeout(() => {
                    setLoading(false);
                }, );
            }
        }

        fetchDataFromAPI();
    }, []);

    return loading;
}
