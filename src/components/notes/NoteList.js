import React from "react";
import styled from "./NoteList.module.css";
const NoteList = ({ notelist }) => {
  console.table(notelist);

  const notes = notelist.map((note) => {
    return (
      <article key={note.currentTime} className={styled.frame}>
        <p>{note.title}</p>
        <p className={styled.note}>{note.note}</p>

        <section className={styled.actions}>
          <b className={styled.time}>{note.timeStamp}</b>

          <button className={styled.delete}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </section>
      </article>
    );
  });

  return <section className={styled.noteGrid}>{notes}</section>;
};

export default NoteList;
