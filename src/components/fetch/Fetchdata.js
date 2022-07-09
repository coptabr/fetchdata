import { useEffect, useState } from "react";
import Card from "../card/Card";

function FetchData() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.100.3:5000/games`)
      .then((response) => response.json())
      .then((loadData) => setData(loadData));

    /*     const fetching = async () => {
      const apiResponse = await fetch("http://localhost:5000/games");
      const apiResponseJSON = await apiResponse.json();
      //console.log(apiResponseJSON);
      setData(apiResponseJSON);
    };
    fetching(); */
  }, []);

  //let retData = JSON.stringify(data);
  //teste atualização git 4 ADD

  return (
    <>
      {data.map((item, i) => {
        if (i < 12) {
          return (
            <Card
              key={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              platform={item.platform}
              desc={item.short_description}
            />
          );
        }
      })}
    </>
  );
}

export default FetchData;
