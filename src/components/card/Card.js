import { BsPlusCircleDotted } from "react-icons/bs";
import classes from "./Card.module.css";

function Card() {
  return (
    <div className={classes.container}>
      <div className={classes.gameImg}></div>
      <div className={classes.shortDesc}>
        <div className={classes.details}>
          <BsPlusCircleDotted className={classes.btnDetails} />
        </div>
        <div className={classes.textDesc}>
          <ul>
            <li>DIABLO IMORAL</li>
            <li>BLI$ARD</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
