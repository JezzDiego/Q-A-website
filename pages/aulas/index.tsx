import TextField from "../../components/TextField";
import { BsSearch } from "react-icons/bs";
import Class from "../../components/Class";
import SelectSmall from "../../components/SelectSmall";
import index from "../../styles/index.module.scss";

export default function Classes() {
  return (
    <div>
      <header className={index.header}>
        <div className={index.search}>
        <TextField />
          <button className={index.icon}>
            <BsSearch size={20}></BsSearch>
          </button>
        </div>
        <SelectSmall />
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
