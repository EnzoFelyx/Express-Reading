import { useEffect, useState } from "react";
import api from "../services/api";

export default function useLoading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDataFromAPI() {
            try {
                await api();
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
                setLoading(false);
            }
        }

        fetchDataFromAPI();
    }, []);

    return loading;
}
