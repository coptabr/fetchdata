import { useEffect, useState } from "react";
import Card from "../card/Card";
import classes from "./Fetchdata.module.css";

// let [filtering, setFiltering] = useState([]);

function FetchData() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/games`)
      .then((response) => response.json())
      .then((loadData) => setData(loadData));
    //catch AQUI SEU PUTO
  }, []);

  let animationDelay = 0;

  return (
    <div className={classes.container}>
      {data.map((item, i) => {
        animationDelay = animationDelay + 100;
        if (i < 12) {
          return (
            <Card
              key={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              platform={item.platform}
              desc={item.short_description}
              style={{ animationDelay: `${animationDelay}ms` }}
            />
          );
        }
      })}
    </div>
  );
}

export default FetchData;

/*     
      const fetching = async () => {
      const apiResponse = await fetch("http://localhost:5000/games");
      const apiResponseJSON = await apiResponse.json();
      //console.log(apiResponseJSON);
      setData(apiResponseJSON);
    };
    fetching(); */
