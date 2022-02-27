import React from "react";
import styled from "./Dropdown.module.css";

const Dropdown = () => {
  return (
    <section className={styled.dropdown}>
      <label htmlFor="category">Category</label>
      <select name="categories">
        <option value="General">General</option>
        <option value="Todo">Todo</option>
        <option value="Reminders">Reminders</option>
        <option value="Resources">Resources</option>
      </select>
    </section>
  );
};

export default Dropdown;
