import React from "react";
import styled from "./NoteList.module.css";
import Wrapper from "../wrapper/Wrapper";

const NoteList = ({ notelist }) => {
  const notes = notelist.map((note) => {
    return (
      <article key={note.currentTime} className={styled.frame}>
        <section className={styled.head}>
          <p className={styled.title}>{note.title}</p>
          <Wrapper content={note.categoryChosen} className={styled.category} />
        </section>

        <p className={styled.note}>{note.note}</p>

        <section className={styled.actions}>
          <b className={styled.time}>{note.timeStamp}</b>
          <button className={styled.delete}>
            <i className="fa-solid fa-trash fa-lg"></i>
          </button>
        </section>
      </article>
    );
  });

  return <section className={styled.noteGrid}>{notes}</section>;
};

export default NoteList;
