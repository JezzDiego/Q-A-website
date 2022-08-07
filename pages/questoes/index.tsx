import Question from "../../components/Question";
import Search from "../../components/Search";
import index from "../../styles/index.module.scss";

const questions = [
  {
    id: 0,
    request:
      "Seis jogadores, vestidos com camisas numeradas de 1 até 6, formaram uma fila. O técnico fez um aquecimento da seguinte maneira: Ele primeiro gritou “três” e, por 3 vezes, quem estava no começo da fila correu até o fim da fila, ou seja, considerando a ordem da fila antes do grito, o primeiro foi para o fim da fila, depois o segundo foi para o fim da fila e finalmente o terceiro foi para o fim da fila; nesse momento, o técnico observou que quem estava no começo da fila era o jogador com a camisa 3 e ele pediu que esse jogador saísse da fila. Em seguida, ele gritou “seis” e, por 6 vezes, quem estava no começo da fila correu até o fim da fila, de maneira que houve jogador que voltou para o fim da fila mais de uma vez. Quando o processo se repetiu as 6 vezes, o técnico observou que quem estava no começo da fila era o jogador com a camisa 6 e ele pediu que esse jogador saísse da fila. O técnico repetiu esse processo todo mais três vezes, tendo gritado “cinco”, depois, “quatro” e depois “dois”, e ao fim de cada comando percebeu que estavam no começo da fila, respectivamente, os jogadores com as camisas 5, 4 e 2 e pediu, a cada vez, que o respectivo jogador saísse da fila. Quando sobrou somente o jogador com a camisa número 1 na fila, o técnico perguntou: “você estava atrás de quem na fila original?”, então esse jogador respondeu corretamente que estava atrás do jogador de número",
    alt1: {
      name: "3",
      slug: "A",
    },
    alt2: {
      name: "4",
      slug: "B",
    },
    alt3: {
      name: "6",
      slug: "C",
    },
    alt4: {
      name: "5",
      slug: "D",
    },
    alt5: {
      name: "2",
      slug: "E",
    },
    correct: "D",
  },
  {
    id: 1,
    request:
      "Uma fazenda tem 14 funcionários e todos sabem cuidar de cavalos ou bois ou cachorros. Apenas um funcionário sabe cuidar de qualquer uma dessas espécies e quem sabe cuidar de boi, também sabe cuidar de cavalo. O número de funcionários que cuidam apenas de cavalos é igual ao número dos que cuidam apenas de cavalos e bois. O funcionário que sabe cuidar de ambos, cavalos e cachorros, também sabe cuidar de bois e 5 funcionários só sabem cuidar de cachorros. O número de funcionários que sabe cuidar apenas de cavalos é",
    alt1: {
      name: "3",
      slug: "A",
    },
    alt2: {
      name: "6",
      slug: "B",
    },
    alt3: {
      name: "5",
      slug: "C",
    },
    alt4: {
      name: "7",
      slug: "D",
    },
    alt5: {
      name: "4",
      slug: "E",
    },
    correct: "E",
  },
  {
    id: 2,
    request:
      "Ao visitar a tradicional ilha, onde parte dos habitantes só falam verdades e os demais habitantes só falam mentiras, um turista encontrou três habitantes, um vestido de verde, outro de vermelho e outro de azul. O turista perguntou ao habitante de azul qual a cor da própria camisa, em seguida pediu para o habitante de vermelho fazer uma afirmação e finalmente pediu ao que estava vestido de verde para repetir o que havia respondido o habitante de azul. O turista obteve, respectivamente, as seguintes respostas: “verde”, “quem está de verde está mentindo”, “verde”.Os habitantes vestidos de verde, vermelho e azul falam, respectivamente,",
    alt1: {
      name: "verdades, mentiras, verdades.",
      slug: "A",
    },
    alt2: {
      name: "mentiras, mentiras, verdades.",
      slug: "B",
    },
    alt3: {
      name: "mentiras, verdades, mentiras.",
      slug: "C",
    },
    alt4: {
      name: "verdades, verdades, mentiras.",
      slug: "D",
    },
    alt5: {
      name: "verdades, mentiras, mentiras.",
      slug: "E",
    },
    correct: "E",
  },
];

export default function Questions() {
  return (
    <>
      <div>
        <header className={index.header}>
          <Search />
        </header>

        <main>
          {questions.map((question) => {
            return <Question key={question.id} question={question} />;
          })}
        </main>
      </div>
    </>
  );
}
