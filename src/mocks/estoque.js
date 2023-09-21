import Fahrenheit from "../../assets/livros/Fahrenheit.png";
import Metamorfose from "../../assets/livros/Metamorfose.png";
import Misery from "../../assets/livros/Misery.png";
import MobyDick from "../../assets/livros/MobyDick.png";
import PequenoPrincipe from "../../assets/livros/PequenoPrincipe.png";

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min ); 
}

const estoque = {

    livros: [
        {
            nome: "Fahrenheit 451",
            autor: "Ray Bradbury",
            preco: 27.79,
            generos: ["Fantasia", "História", "Ficção"],
            avaliacao: gerarNumeroAleatorio(1, 5),
            imagem: Fahrenheit,
        },
        {
            nome: "A metamorfose",
            autor: "Franz Kafka",
            preco: 23.99,
            generos: ["Fantasia", "História", "Ficção"],
            avaliacao: gerarNumeroAleatorio(1, 5),
            imagem: Metamorfose,
        },
        {
            nome: "Misery",
            autor: "Stephen King",
            preco: 32.99,
            generos: ["Fantasia", "História", "Ficção"],
            avaliacao: gerarNumeroAleatorio(1, 5),
            imagem: Misery,
        },
        {
            nome: "O Pequeno Príncipe",
            autor: "Antoine de Saint",
            preco: 29.90,
            generos: ["Fantasia", "História", "Ficção"],
            avaliacao: gerarNumeroAleatorio(1, 5),
            imagem: PequenoPrincipe,
        },
        {
            nome: "Moby Dick",
            autor: "Herman Melville",
            preco: 51.70,
            generos: ["Fantasia", "História", "Ficção"],
            avaliacao: gerarNumeroAleatorio(1, 5),
            imagem: MobyDick,
        },
    ]
}

export default estoque;