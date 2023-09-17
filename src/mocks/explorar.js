import Fahrenheit from "../../assets/livros/Fahrenheit.png";
import Metamorfose from "../../assets/livros/Metamorfose.png";
import Misery from "../../assets/livros/Misery.png";
import MobyDick from "../../assets/livros/MobyDick.png";
import PequenoPrincipe from "../../assets/livros/PequenoPrincipe.png";

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min ); 
}

const explorar = {
    topo: {
        titulo: "Explorar",
        legenda: "Confira as nossas obras em destaque",
    },
    estante:{
        titulo: "Destaques",
        lista: [
            {
                nome: "Fahrenheit 451",
                autor: "Ray Bradbury",
                preco: "R$ 27,79",
                avaliacao: gerarNumeroAleatorio(1,5),
                imagem: Fahrenheit,
              },
              {
                nome: "A metamorfose",
                autor: "Franz Kafka",
                preco: "R$ 23,99",
                avaliacao: gerarNumeroAleatorio(1,5),
                imagem: Metamorfose,
              },
              {
                nome: "Misery",
                autor: "Stephen King",
                preco: "R$ 32,99",
                avaliacao: gerarNumeroAleatorio(1,5),
                imagem: Misery,
              },
              {
                nome: "O Pequeno Príncipe",
                autor: "Antoine de Saint",
                preco: "R$ 29,90",
                avaliacao: gerarNumeroAleatorio(1,5),
                imagem: PequenoPrincipe,
              },
              {
                nome: "Moby Dick",
                autor: "Herman Melville",
                preco: "R$ 51,70",
                avaliacao: gerarNumeroAleatorio(1,5),
                imagem: MobyDick,
              },
              
        ]
    }
}

export default explorar;