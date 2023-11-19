import api from "../api";

export async function buscaLivro(nomeLivro) {

    try {
        const resultado = await api.get(`/livros?nome_like=${nomeLivro}`);
        return resultado.data;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}

export async function listaLivros() {
    try {
        const resultado = await api.get(`/livros`);
        return resultado.data;
    }
    catch (error) {
        console.log(error)
        return []
    }
}

export async function buscaGenero(genero) {
    try {
        const resultado = await api.get(`/livros?generos_like=${genero}`);
        return resultado.data;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}
