import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
//import Navigation from "./components/nav/Navigation";
import Form from "./components/notes/Form";
import NoteList from "./components/notes/NoteList";

function App() {
  //states
  const [receivedNote, setReceivedNote] = useState([]);

  //create an array of objects with the notes
  const sendNoteHandler = (note) =>
    setReceivedNote((previousNotes) => [note, ...previousNotes]);

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
        <NoteList notelist={receivedNote} />
      </div>
    </div>
  );
}

export default App;
