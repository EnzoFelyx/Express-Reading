import api from "../api";

export async function listaCesta() {
    try {
        const resultadoLivros = await api.get(`/livros`);
        const resultadoCesta = await api.get(`/cesta`);
        const livros = resultadoLivros.data;
        const cesta = resultadoCesta.data;

        const livrosNaCesta = livros.filter(livro => {
            return cesta.some(item => item.idLivro === livro.id);
        });

        return livrosNaCesta;
    } catch (error) {
        console.log(error);
        return [];
    }
}


export async function salvarCesta(idLivro) {

    try {
        await api.post(`/cesta/`, {
            idLivro: idLivro
        });
        return 'sucesso'
    }
    catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function deletarLivroCesta(idLivro) {
    try {
        const resultadoCesta = await api.get(`/cesta`);
        const cesta = resultadoCesta.data;
        const itemParaDeletar = cesta.find(item => item.idLivro === idLivro);

        if (!itemParaDeletar) {
            return 'Item não encontrado na cesta';
        }
        console.log(itemParaDeletar.id);

        // Utilize a URL diretamente para enviar o id do item a ser deletado
        await api.delete(`/cesta/${itemParaDeletar.id}`);
        return 'sucesso';
    } catch (error) {
        console.log(error);
        return 'erro';
    }
}

export async function buscaCesta(idLivro) {

    const resultadoCesta = await api.get(`/cesta`);
    const cesta = resultadoCesta.data;
    const itemBuscado = cesta.find(item => item.idLivro === idLivro);

    if (itemBuscado) {
        return 'encontrado'
    }
    else {
        return false
    }
}

export async function resetarCesta() {
    try {
        await api.delete(`/cesta/`);
        return 'sucesso';
    } catch (error) {
        console.log(error);
        return 'erro';
    }
}

