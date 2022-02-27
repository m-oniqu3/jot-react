import React, { useState, useEffect } from "react";
import styled from "./Dropdown.module.css";

const Dropdown = ({ sendCategory }) => {
  const [category, setCategory] = useState("General");
  const getCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    sendCategory(category);
  }, [category, sendCategory]);

  return (
    <section className={styled.dropdown}>
      <label htmlFor="category">Category</label>

      <select name="categories" onChange={getCategory} value={category}>
        <option value="General">General</option>
        <option value="Todo">Todo</option>
        <option value="Reminders">Reminders</option>
        <option value="Resources">Resources</option>
      </select>
    </section>
  );
};

export default Dropdown;
