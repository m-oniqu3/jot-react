import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/nav/Navigation";
import Form from "./components/notes/Form";

function App() {
  return (
    <div className="grid">
      <div className="nav">
        <Navigation />
      </div>
      <div className="main">
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default App;
