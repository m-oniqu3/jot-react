import React from "react";
import styled from "./Header.module.css";
import Intro from "./Intro";
import Wrapper from "../wrapper/Wrapper";

function Header() {
  const heading = "Jot it down..";
  const message = "Risus interdum faucibus praesent habitant justo, id sit. ";

  return (
    <section className={styled.header}>
      <>
        <Intro heading={heading} message={message} />
      </>
      <Wrapper content="The date" />
    </section>
  );
}

export default Header;
