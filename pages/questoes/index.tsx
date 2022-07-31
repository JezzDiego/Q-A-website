import Question from "../../components/Question";
import Select from "../../components/Select";
import index from "../../styles/index.module.scss";

export default function Questions() {
  return (
    <>
      <div className={index.header}>
        <Select />
      </div>

      <div className={index.questionBox}>
        <Question />
        <Question />
        <Question />
      </div>
    </>
  );
}
