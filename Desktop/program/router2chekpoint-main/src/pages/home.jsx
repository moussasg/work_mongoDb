import React, { useState } from "react";
import FilterBtn from "../filtrebtn/index";
import classes from "./index.module.css";
import CSTFILM from "../constant/const";

function App() {
  const [ancienf, setFilm] = useState(CSTFILM);
  const handleFilter = (e) => {
    const filtervalue = e.target.value;
    if (filtervalue === "all") {
      setFilm(CSTFILM);
    } else {
      const filterefilm = CSTFILM.filter((el) => el.category === filtervalue);
      setFilm(filterefilm);
    }
  };

  const [desc, setdesc] = useState();
  const handc = (e) => {
    setdesc(e);
  };

  return (
    <>
      <div className={classes.container}>
        <h1> Film App </h1>
        <FilterBtn handleFilter={handleFilter}/>
        {desc ? (
          <div id="det">
            {CSTFILM.find((el) => el.id === desc).bonde}
          </div>
        ) : (
          <div id="det">
             {ancienf.map((el) => (
          <div key={el.id}>
            <img src={el.image} alt={el.text} />
            <button onClick={() => handc(el.id)}>{el.text}</button>
          </div>
        ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
