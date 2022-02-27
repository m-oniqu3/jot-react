import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import styled from "./Form.module.css";

const Form = () => {
  //states
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [categoryChosen, setCategoryChosen] = useState("");
  const [timeStamp, setTimeStamp] = useState("");

  const [showForm, setShowForm] = useState(false);
  const ref = useRef();

  //showForm Handlers
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

  //inputHandlers

  const categoryHandler = (option) => {
    setCategoryChosen(option);
  };

  //TODO get the time/date when the user creates note
  //TODO try to fix this. I feel like something is wrong here
  const noteHandler = (e) => {
    setNote(e.target.value);

    const time = new Date().toDateString();
    setTimeStamp(time);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    //*creates object with the state values
    const noteDetails = { title, note, categoryChosen, timeStamp };

    //*show an alert if the fields are empty, if they aren't then send the object to the app component
    !note || !title
      ? alert("Fields must not be empty")
      : console.table(noteDetails);

    //*reset values to original states
    setShowForm(false);
    setTitle("");
    setNote("");
    setCategoryChosen("General");
  };

  return (
    <section ref={ref} className={styled.formWrap} onClick={showFormHandler}>
      <p> Add new note</p>

      {/* /if showForm is true / if the section is clicked on then show the form */}
      {showForm && (
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title your note"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="note">Note</label>
          <input
            type="text"
            name="note"
            placeholder="Jot it down here..."
            value={note}
            onChange={noteHandler}
          />

          {/* get the selected category from the dropdown componentand send it to the form component (parent) */}
          <Dropdown sendCategory={categoryHandler} />

          <button type="submit" className={styled.btnSubmit}>
            Submit
          </button>
        </form>
      )}
    </section>
  );
};

export default Form;
