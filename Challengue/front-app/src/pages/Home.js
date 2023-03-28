import React from "react";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [year, setYear] = useState();
  const navigate = useNavigate();

  const handleYear = () => {
    navigate("/calendar", { state: { year } });
  };

  return (
    <div className="App">
      <h3>Introduzca el año del Calendario</h3>
      <input type="number" style={{width: '10%'}} onChange={(e) => setYear(e.target.value)} min={2011} max={2023}/>
      <button className="headerBtn" onClick={handleYear}>
        Ir
      </button>
    </div>
  );
};

export default Home;
