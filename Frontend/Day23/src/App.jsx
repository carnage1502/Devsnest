import React, { useState, useEffect } from 'react';
import useTittleCount from './hook/useTitleCount';
import "./style.css";


const App =() => {
  const [count, setCount] =useState(0);  
  useTittleCount(count);
  const IncNum =() =>{
  setCount(count + 1);
  };

  return(
    <>
    <h1 className="head"> {count} </h1>
    <button className="btn" onClick={IncNum}> Click Me! </button>
    </>
  );
};

export default App;