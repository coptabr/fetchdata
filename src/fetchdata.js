import { useEffect, useState } from "react";

function FetchData() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/games`)
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
  //teste atualização git

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <img src={item.thumbnail} />
        </div>
      ))}
    </>
  );
}

export default FetchData;
