import React from "react";
import style from "./button.module.css";

function Button({ first, second, third, fourth, fifth, onClick, equalSign }) {
    return (
      <div className={style.coun}>
        <button className={style.button} onClick={onClick}>
          {first}
          {second}
          {third}
          {fourth}
          {fifth}
          {equalSign && <div className={style.a}>{equalSign}</div>}
        </button>
      </div>
    );
  }
  

export default Button;
