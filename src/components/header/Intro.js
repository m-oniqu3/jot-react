import React from "react";
import styled from "./Intro.module.css";

function Intro({ heading, message }) {
  return (
    <article className={styled.intro}>
      <h3 className={styled.heading}>{heading}</h3>
      <p className={styled.content}>{message}</p>
    </article>
  );
}

export default Intro;
