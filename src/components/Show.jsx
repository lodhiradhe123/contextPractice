import axios from "../utils/axios";
import React, { useState } from "react";

function Show() {
  const [val, setVal] = useState([]);

  const getData = () => {
    axios
      .get("/products")
      .then((response) => {
        setVal(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div>Show</div>
      <button
        className="px-2 py-1 rounded-md bg-blue-500 capitalize mt-9"
        onClick={getData}
      >
        {" "}
        get data{" "}
      </button>

      <h1>{val.map((data,i)=>{
        return <li key={i}>{data.title}</li>  
      })}</h1>
    </>
  );
}

export default Show;
