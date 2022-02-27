import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/nav/Navigation";
import Form from "./components/notes/Form";
import NoteList from "./components/notes/NoteList";

function App() {
  const [receivedNote, setReceivedNote] = useState([]);

  const sendNoteHandler = (note) =>
    setReceivedNote((previousNotes) => [note, ...previousNotes]);

  return (
    <div className="grid">
      <div className="nav">
        <Navigation />
      </div>

      <div className="main">
        <Header />
        <Form sendNote={sendNoteHandler} />
        <NoteList notelist={receivedNote} />
      </div>
    </div>
  );
}

export default App;
