import Class from "../../components/Class";
import Search from "../../components/Search";
import index from "../../styles/index.module.scss";

export default function Classes() {
  return (
    <div>
      <header className={index.header}>
        <Search />
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
