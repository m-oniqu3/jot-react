import React from "react";
import Dropdown from "./Dropdown";
import styled from "./Form.module.css";

const Form = () => {
  return (
    <section className={styled.formWrap}>
      <p> Add new note</p>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="Title your note" />

        <label htmlFor="">Note</label>
        <input type="text" name="note" placeholder="Jot it down here..." />

        <Dropdown />

        <button type="submit" className={styled.btnSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
