import newsCard from "../styles/newsCard.module.scss";
import index from "../styles/index.module.scss";

interface NewsProps {
  news: {
    time: string,
    content: string
  }
}

export default function NewsCard(props: NewsProps) {
  return (
    <div className={`${index.borderBox} ${index.newsBox}`}>
      <div className={newsCard.info}>
        <img
          className={newsCard.img}
          src="https://vali.qconcursos.com/odin/users/avatars/6f698bde-7d68-4fe1-bea2-fd5ecc2b6e84avatar-kqkyed4f.png"
        />
        <h3 className={newsCard.text}>Qconsursos</h3>
        <p className={newsCard.timestamp}>{props.news.time}</p>
      </div>

      <div className={newsCard.content}>
        <p>
          {props.news.content}
        </p>
      </div>
    </div>
  );
}
