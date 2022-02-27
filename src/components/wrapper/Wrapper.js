import React from "react";
import styled from "./Wrapper.module.css";

function Wrapper({ content }) {
  return <div className={styled.wrapper}>{content}</div>;
}

export default Wrapper;
