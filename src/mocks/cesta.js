import Fahrenheit from "../../assets/livros/Fahrenheit.png";
import Metamorfose from "../../assets/livros/Metamorfose.png";
import Misery from "../../assets/livros/Misery.png";
import MobyDick from "../../assets/livros/MobyDick.png";
import PequenoPrincipe from "../../assets/livros/PequenoPrincipe.png";


const cesta = {
    topo: {
        titulo: "Detalhes da Cesta",
    },
    
    detalhes: {
        nome: "Cesta de livros",
        descricao: "Confira abaixo seus livros selecionados abaixo antes de finalizar a sua compra:",
        preco: "R$ 166,37",
        botao: "Comprar",
    },

    itens: {
        titulo: "Livros da cesta",
        lista: [
          {
            nome: "Fahrenheit 451",
            autor: "Ray Bradbury",
            preco: "R$ 27,79",
            imagem: Fahrenheit,
          },
          {
            nome: "A metamorfose",
            autor: "Franz Kafka",
            preco: "R$ 23,99",
            imagem: Metamorfose,
          },
          {
            nome: "Misery",
            autor: "Stephen King",
            preco: "R$ 32,99",
            imagem: Misery,
          },
          {
            nome: "O Pequeno Príncipe",
            autor: "Antoine de Saint-Exupéry",
            preco: "R$ 29,90",
            imagem: MobyDick,
          },
          {
            nome: "Moby Dick",
            autor: "Herman Melville",
            preco: "R$ 51,70",
            imagem: PequenoPrincipe,
          }
        ]
      },
}

export default cesta;