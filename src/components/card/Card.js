import classes from "./Card.module.css";

function Card() {
  return (
    <div className={classes.container}>
      <div className={classes.img}></div>
      <div className={classes.shortDesc}>ShortDesc</div>
    </div>
  );
}

export default Card;
