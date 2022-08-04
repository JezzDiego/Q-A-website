import Class from "../../components/Class";
import Search from "../../components/Search";
import index from "../../styles/index.module.scss";

const classesArray = [
  {
    id: 0,
    imgSrc: "https://github.com/jezzdiego.png",
    title: "Aula 01 - Título da aula aqui",
    subject: "Português",
    discussion: "Orações subordinadas",
    author: "Jessé",
  },
  {
    id: 1,
    imgSrc: "https://github.com/guilherme-gjv.png",
    title: "Aula 02 - Título da aula aqui",
    subject: "Português",
    discussion: "Orações subordinadas",
    author: "Guilherme",
  },
  {
    id: 2,
    imgSrc: "https://github.com/wallrony.png",
    title: "Aula 03 - Título da aula aqui",
    subject: "Português",
    discussion: "Orações subordinadas",
    author: "Rony",
  },
  {
    id: 3,
    imgSrc: "https://github.com/duardoqueiroz.png",
    title: "Aula 04 - Título da aula aqui",
    subject: "Português",
    discussion: "Orações subordinadas",
    author: "Eduardo",
  },
];

export default function Classes() {
  return (
    <div>
      <header className={index.header}>
        <Search />
      </header>

      <main className={index.general}>
        {classesArray.map((classe) => {
          return (
            <button key={classe.id} className={index.button}>
              <Class class={classe} />
            </button>
          );
        })}
      </main>
    </div>
  );
}
