import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
//import Navigation from "./components/nav/Navigation";
import Form from "./components/notes/Form";
import NoteList from "./components/notes/NoteList";

function App() {
  //states
  const [receivedNote, setReceivedNote] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(receivedNote));
  }, [receivedNote]);

  //create an array of objects with the notes
  const sendNoteHandler = (note) => {
    setReceivedNote((previousNotes) => [note, ...previousNotes]);
  };

  //delete the selcted note and update the state
  const deleteNoteHandler = (note) => {
    setReceivedNote(receivedNote.filter((orignalNote) => orignalNote !== note));
    localStorage.removeItem(note);
  };

  const getNotes = () => {
    if (localStorage.getItem("notes") === null) {
      localStorage.setItem("notes", JSON.stringify([]));
    } else {
      let storage = JSON.parse(localStorage.getItem("notes"));
      setReceivedNote(storage);
    }
  };
  return (
    <div className="container">
      {/* <div className="nav">
        <Navigation />
      </div> */}

      <div className="main">
        <Header />

        {/* send note to the app component */}
        <Form sendNote={sendNoteHandler} />

        {/* accept the note from the app component */}
        <NoteList notelist={receivedNote} deleteNote={deleteNoteHandler} />
      </div>
    </div>
  );
}

export default App;
