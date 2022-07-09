import { BsPlusCircleDotted } from "react-icons/bs";
import classes from "./Card.module.css";

function Card(props) {
  //const [title, thumbnail, short_description] = [...props]

  return (
    <div className={classes.container}>
      <div
        className={classes.gameImg}
        style={{ backgroundImage: `url(${props.thumbnail})` }}
      ></div>
      <div className={classes.shortDesc}>
        <div className={classes.details}>
          <BsPlusCircleDotted className={classes.btnDetails} />
        </div>
        <div className={classes.textDesc}>
          <ul>
            <li>{props.title}</li>
            <li>{props.platform}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
