import Question from "../../components/Question";
import Search from "../../components/Search";
import index from "../../styles/index.module.scss";

const questions = [
  {
    id: 0,
    request: "Guilherme, por acaso o nome do seu pai seria...",
    alt1: {
      name: "João",
      slug: "joao",
    },
    alt2: {
      name: "Maria",
      slug: "maria",
    },
    correct: "joao",
  },
  {
    id: 1,
    request: "Qual o seu sobrenome?",
    alt1: {
      name: "Silva",
      slug: "silva",
    },
    alt2: {
      name: "Santos",
      slug: "santos",
    },
    correct: "santos",
  },
  {
    id: 2,
    request: "Qual o seu nome de usuário?",
    alt1: {
      name: "Joaozinho",
      slug: "joaozinho",
    },
    alt2: {
      name: "Mariazinha",
      slug: "mariazinha",
    },
    correct: "joaozinho",
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
          
          {
            questions.map((question) => {
              return (
                <Question key={question.id} question={question} />
              )
            })
          }
        </main>
      </div>
    </>
  );
}
