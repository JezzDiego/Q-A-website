import newsCard from "../styles/newsCard.module.scss";
import index from "../styles/index.module.scss";

export default function NewsCard() {
  return (
    <div className={index.borderBox}>
      <div className={newsCard.info}>
        <img
          className={newsCard.img}
          src="https://vali.qconcursos.com/odin/users/avatars/6f698bde-7d68-4fe1-bea2-fd5ecc2b6e84avatar-kqkyed4f.png"
        />
        <h3 className={newsCard.text}>Qconsursos</h3>
        <p className={newsCard.timestamp}>há um mês</p>
      </div>

      <div className={newsCard.content}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          quisquam, aliquam totam eius quod illo fuga cupiditate expedita?
          Alias, repudiandae. Explicabo enim neque nulla obcaecati reiciendis
          accusamus sunt nihil repudiandae!
        </p>
      </div>
    </div>
  );
}
