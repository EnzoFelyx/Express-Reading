import api from "../api";

export async function listaCesta() {
    try {
        const resultado = await api.get(`/livros?idCarrinho=1`);
        return resultado.data;
    }
    catch (error) {
        console.log(error)
        return []
    }
}