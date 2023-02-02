import { TbDeviceGamepad2 } from "react-icons/tb";
import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={classes.container}>
        MMO GAMES
        <small>(DEFINITIVE GUIDE)</small>
        <TbDeviceGamepad2 />
      </div>
    </>
  );
}
export default Header;
