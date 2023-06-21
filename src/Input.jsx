import React from "react";
import "./WordCounter.jsx";
import "./style.css";

function Input({ value, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="type..."
        className="input"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default Input;
