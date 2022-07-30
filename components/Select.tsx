import select from "../styles/select.module.scss";

export default function Select() {
  return (
    <div>
      <select className={select.size} defaultValue={0}>
        <option value="">Selecione uma disciplina</option>
        <option value="matematica">Matemática</option>
        <option value="portugues">Português</option>
      </select>
    </div>
  );
}
