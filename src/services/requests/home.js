import api from "../api";

export async function lista5estrelas() {
    try {
        const resultadoLivros = await api.get(`/livros`);
        const livros = resultadoLivros.data;
        const livros5stars = livros.filter(livro => livro.avaliacao === 5);
        return livros5stars;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function listaBarato() {
    try {
        const resultadoLivros = await api.get(`/livros`);
        const livros = resultadoLivros.data;
        const livroBarato = livros.filter(livro => livro.preco < 30.00);
        return livroBarato;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function listaJovens() {
    try {
        const resultado = await api.get(`/livros?generos_like=Mangá`);
        const livrosJovens = resultado.data;
        return livrosJovens;
    } catch (error) {
        console.log(error);
        return [];
    }
}