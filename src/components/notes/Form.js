import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import styled from "./Form.module.css";

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const ref = useRef();

  const showFormHandler = () => {
    setShowForm(true);
  };

  useEffect(() => {
    const clickedOutside = (e) => {
      //* If the section is open and the clicked target is not within the menu,then close the section
      if (showForm && ref.current && !ref.current.contains(e.target)) {
        setShowForm(false);
      }
    };

    document.addEventListener("mousedown", clickedOutside);

    return () => {
      //* Remove event listener with cleanup function
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [showForm]);

  return (
    <section ref={ref} className={styled.formWrap} onClick={showFormHandler}>
      <p> Add new note</p>

      {showForm && (
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
      )}
    </section>
  );
};

export default Form;
