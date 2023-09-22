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
            descricao: "    A narrativa acompanha a trajetória de Guy Montag, um bombeiro cujo trabalho é incendiar livros. Ele faz parte de uma corporação de agentes do Estado que vigiam, fiscalizam e destroem livros, pois esses objetos eram vistos como maléficos aos cidadãos, deixando-os descontentes e improdutivos.",
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
            descricao: "    A Metamorfose é a mais célebre novela de Franz Kafka e uma das mais importantes de toda a história da literatura. Sem a menor cerimônia, o texto coloca o leitor diante de um caixeiro-viajante - o famoso Gregor Samsa - transformado em inseto monstruoso.",
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
            descricao: "    Quando Paul sofre um acidente de carro em uma nevasca, ele é resgatado justamente por Annie, e esse encontro entre fã e autor é o ponto de partida de uma das tramas mais aterrorizantes de Stephen King.",
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
            descricao: "    Um piloto cai com seu avião no deserto e ali encontra uma criança loura e frágil. Ela diz ter vindo de um pequeno planeta distante. E ali, na convivência com o piloto perdido, os dois repensam os seus valores e encontram o sentido da vida.",
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
            descricao: "    O capitão Ahab embarca em uma jornada perigosa com um único objetivo: caçar Moby Dick, a baleia que arrancou sua perna. Com sede de vingança, ele arrisca a sua vida e a de sua tripulação para encontrar e matar o animal, custe o que custar.",
            imagem: MobyDick,
        },
    ]
}

export default estoque;