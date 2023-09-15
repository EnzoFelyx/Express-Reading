import Fahrenheit from "../../assets/livros/Fahrenheit.png";
import Metamorfose from "../../assets/livros/Metamorfose.png";
import Misery from "../../assets/livros/Misery.png";
import MobyDick from "../../assets/livros/MobyDick.png";
import PequenoPrincipe from "../../assets/livros/PequenoPrincipe.png";

const gerarNumeroAleatorio = () => {
    return Math.floor(Math.random() * ((max - min + 1) + min )) 
}

const explorar = {
    topo: {
        titulo: "Detalhes da Cesta",
        legenda: "Confira as nossas obras em destaque",
    },

    estante:{
        titulo: "Livros",

        lista: [
            {
                nome: "Fahrenheit 451",
                autor: "Ray Bradbury",
                preco: "R$ 27,79",
                avaliação: gerarNumeroAleatorio(1,5),
                imagem: Fahrenheit,
              },
              {
                nome: "A metamorfose",
                autor: "Franz Kafka",
                preco: "R$ 23,99",
                avaliação: gerarNumeroAleatorio(1,5),
                imagem: Metamorfose,
              },
              {
                nome: "Misery",
                autor: "Stephen King",
                preco: "R$ 32,99",
                avaliação: gerarNumeroAleatorio(1,5),
                imagem: Misery,
              },
              {
                nome: "O Pequeno Príncipe",
                autor: "Antoine de Saint-Exupéry",
                preco: "R$ 29,90",
                avaliação: gerarNumeroAleatorio(1,5),
                imagem: MobyDick,
              },
              {
                nome: "Moby Dick",
                autor: "Herman Melville",
                preco: "R$ 51,70",
                avaliação: gerarNumeroAleatorio(1,5),
                imagem: PequenoPrincipe,
              }
        ]

    }
}

export default explorar;