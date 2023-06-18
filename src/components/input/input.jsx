import React from "react";
import styles from "./input.module.css";

function Input({ value, onChange }) {
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Input;
