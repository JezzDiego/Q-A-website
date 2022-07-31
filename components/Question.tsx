import question from "../styles/question.module.scss";

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
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label htmlFor="html">HTML</label>

          <br />

          <input type="radio" id="css" name="fav_language" value="CSS" />
          <label htmlFor="css">CSS</label>

          <br />

          <input
            type="radio"
            id="typescript"
            name="fav_language"
            value="TypeScript"
          />
          <label htmlFor="typescript">TypeScript</label>

          <br />

          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
          <label htmlFor="javascript">JavaScript</label>

          <br />

          <input
            type="radio"
            id="graphql"
            name="fav_language"
            value="GraphQL"
          />
          <label htmlFor="graphql">GraphQL</label>
        </div>

        <button className={question.button}>Responder</button>
      </div>
    </>
  );
}
