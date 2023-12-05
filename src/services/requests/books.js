import api from "../api";

export async function buscaLivro(nomeLivro) {

    try {
        const resultado = await api.get(`/livros`);
        const livroProcurado = resultado.data;
        const livroAchado = livroProcurado.filter(livro => livro.nome.toLowerCase().includes(nomeLivro.toLowerCase()));
        return livroAchado;
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
        const resultado = await api.get(`/livros`);
        const generoBuscado = resultado.data
        const generoAchado = generoBuscado.filter(livro => livro.generos.includes(genero));
        return generoAchado;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}
