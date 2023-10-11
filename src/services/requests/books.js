import api from "../api";

export async function buscaLivro(nomeLivro) {

    try {
        const resultado = await api.get(`/livros?nome=${nomeLivro}`);
        return resultado.data[0];
    }
    catch (error) {
        console.log(error)
        return {}
    }
}