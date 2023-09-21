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
            capa: 'Flexível', 
            paginas: 216,
            avaliacao: gerarNumeroAleatorio(1, 5),
            lingua: 'PT-BR',
            imagem: Fahrenheit,
        },
        {
            nome: "A metamorfose",
            autor: "Franz Kafka",
            preco: 23.99,
            generos: ["Fantasia", "História", "Ficção"],
            capa: 'Dura', 
            paginas: 112,
            avaliacao: gerarNumeroAleatorio(1, 5),
            lingua: 'PT-BR',
            imagem: Metamorfose,
        },
        {
            nome: "Misery",
            autor: "Stephen King",
            preco: 32.99,
            generos: ["Fantasia", "História", "Ficção"],
            capa: 'Dura', 
            paginas: 328,
            avaliacao: gerarNumeroAleatorio(1, 5),
            lingua: 'PT-BR',
            imagem: Misery,
        },
        {
            nome: "O Pequeno Príncipe",
            autor: "Antoine de Saint",
            preco: 29.90,
            generos: ["Fantasia", "História", "Ficção"],
            capa: 'Flexível', 
            paginas: 96,
            avaliacao: gerarNumeroAleatorio(1, 5),
            lingua: 'PT-BR',
            imagem: PequenoPrincipe,
        },
        {
            nome: "Moby Dick",
            autor: "Herman Melville",
            preco: 51.70,
            generos: ["Fantasia", "História", "Ficção"],
            capa: 'Dura', 
            paginas: 202,
            avaliacao: gerarNumeroAleatorio(1, 5),
            lingua: 'PT-BR',
            imagem: MobyDick,
        },
    ]
}

export default estoque;