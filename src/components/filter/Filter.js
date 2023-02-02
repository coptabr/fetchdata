import classes from "./Filter.module.css";
import { MdSortByAlpha } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { IconContext } from "react-icons";

function Filter() {
  return (
    <IconContext.Provider
      value={{
        style: {
          verticalAlign: "middle",
          fontSize: "1.8rem",
          borderRadius: "4px",
          padding: "5px",
        },
      }}
    >
      <div className={classes.container}>
        <form>
          <div className={classes.inputContainer}>
            <input type="text" value="teste"/>
            <button>
              <BiSearchAlt style={{ color: "white", fontSize: "1.5rem" }} />
            </button>
          </div>
          <div className={classes.filters}>
            <fieldset>
              <legend>SORT BY</legend>
              <MdSortByAlpha />
              <IoCalendarNumber />
            </fieldset>
          </div>
        </form>
      </div>
    </IconContext.Provider>
  );
}

export default Filter;
