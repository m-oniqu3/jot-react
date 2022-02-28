import React from "react";
import styled from "./Wrapper.module.css";

function Wrapper(props) {
  return (
    <div className={`${styled.wrapper} ${props.className}`}>
      {props.content}
    </div>
  );
}

export default Wrapper;
