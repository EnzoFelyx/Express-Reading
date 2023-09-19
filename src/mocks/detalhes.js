import Fahrenheit from "../../assets/livros/Fahrenheit.png";

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min ); 
}

const estoque = {

    livros: 
        {
            nome: "Fahrenheit 451",
            autor: "Ray Bradbury",
            preco: 27.79,
            avaliacao: gerarNumeroAleatorio(1, 5),
            generos: ["Fantasia", "História", "Ficção"],
            imagem: Fahrenheit,
            parcela: "6x de R$9,55",
        },
}

export default estoque;