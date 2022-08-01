import { BsSearch } from "react-icons/bs";
import Class from "../../components/Class";
import index from "../../styles/index.module.scss";

export default function Classes() {
  return (
    <div>
      <header className={index.header}>
        <div className={index.search}>
          <input
            className={index.size}
            type="text"
            placeholder="Palavra Chave"
          />
          <button className={index.icon}>
            <BsSearch size={20}></BsSearch>
          </button>
        </div>
        <select className={index.size} defaultValue={0}>
          <option value="">Selecione uma disciplina</option>
          <option value="matematica">Matemática</option>
          <option value="portugues">Português</option>
        </select>
      </header>

      <main className={index.general}>
        <Class></Class>
        <Class></Class>
        <Class></Class>
        <Class></Class>
      </main>
    </div>
  );
}
