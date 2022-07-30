import classes from "../styles/class.module.scss";

export default function Class() {
  return (
    <div className={classes.borderBox}>
      <div className={classes.centerImg}>
        <img className={classes.img} src="#" />
      </div>
      <h2 className={classes.mediumFont}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum, id
      </h2>
      <div className={classes.displayFlex}>
        <p className={classes.smallFont}>Disciplina: </p>
        <p className={classes.smallFont}></p>
      </div>
      <div className={classes.displayFlex}>
        <p className={classes.smallFont}>Assunto: </p>
        <p className={classes.smallFont}></p>
      </div>
      <div className={classes.displayFlex}>
        <p className={classes.smallFont}>Autor: </p>
        <p className={classes.smallFont}></p>
      </div>
    </div>
  );
}
