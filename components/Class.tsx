import classes from "../styles/class.module.scss";

interface ClassProps {
  class: {
    id: number;
    imgSrc: string;
    title: string;
    subject: string;
    discussion: string;
    author: string;
  };
}

export default function Class(props: ClassProps) {
  return (
    <div className={classes.borderBox}>
      <div className={classes.centerImg}>
        <img className={classes.img} src={props.class.imgSrc} />
      </div>
      <h2 className={classes.mediumFont}>{props.class.title}</h2>
      <div className={classes.displayFlex}>
        <p className={classes.smallFont}>Disciplina: </p>
        <p className={classes.smallFont}>{props.class.subject}</p>
      </div>
      <div className={classes.displayFlex}>
        <p className={classes.smallFont}>Assunto: </p>
        <p className={classes.smallFont}>{props.class.discussion}</p>
      </div>
      <div className={classes.displayFlex}>
        <p className={classes.smallFont}>Autor: </p>
        <p className={classes.smallFont}>{props.class.author}</p>
      </div>
    </div>
  );
}
