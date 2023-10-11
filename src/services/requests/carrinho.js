import api from "../api";

export async function listaCesta() {
    try {
        const resultadoLivros = await api.get(`/livros`);
        const resultadoCesta = await api.get(`/cesta?idCarrinho=1`);
        const livros = resultadoLivros.data;
        const cesta = resultadoCesta.data;

        const livrosNaCesta = livros.filter(livro => {
            return cesta.some(item => item.id === livro.id);
        });

        return livrosNaCesta;
    } catch (error) {
        console.log(error);
        return [];
    }
}


export async function salvarCesta(id, idCarrinho) {

    try {
        await api.put(`/cesta/${id}`, {
            id: id,
            idCarrinho: idCarrinho,
        });
        return 'sucesso'
    }
    catch (error) {
        console.log(error)
        return 'erro'
    }
}