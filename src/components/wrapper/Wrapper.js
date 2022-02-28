import React from "react";
import styled from "./Wrapper.module.css";

function Wrapper(props) {
  return (
    //* accept the className from the child component with props
    <div className={`${styled.wrapper} ${props.className}`}>
      {props.content}
    </div>
  );
}

export default Wrapper;
