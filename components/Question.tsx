import question from "../styles/question.module.scss";
import { Button, Control, Label, Radio } from "rbx";

export default function Question() {
  return (
    <>
      <div className={question.question}>
        <div>
          <p className={question.justify}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            tempore nulla unde magni obcaecati ut cumque totam, deserunt maiores
            esse doloremque veritatis. Expedita quae possimus totam quasi
            molestias explicabo excepturi?
          </p>
        </div>

        <div className={question.p}>
          <Control>
            <Label>
              <Radio name="answer" /> JavaScript
            </Label>
            <br />
            <Label>
              <Radio name="answer" /> TypeScript
            </Label>
            <br />
            <Label>
              <Radio name="answer" /> GraphQL
            </Label>
            <br />
            <Label>
              <Radio name="answer" /> React
            </Label>
          </Control>
        </div>

        <Button color={"warning"} textColor={"white"}>
          Responder
        </Button>
      </div>
    </>
  );
}
