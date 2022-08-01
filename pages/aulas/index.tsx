import { BsSearch } from "react-icons/bs";
import Class from "../../components/Class";
import Select from "../../components/Select";
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
        <Select></Select>
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
