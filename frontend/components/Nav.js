import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import NavButton from "./NavButton";
import NavLink from "./NavLink";
import Signup from "./Signup";

const StyledNav = styled.nav`
  position: absolute;
  width: 300px;
  background: ${(props) => props.theme.white};
  top: -200px;
  right: 0;
  padding-top: 5.5rem;
  width: ${(props) => (props.menuOpen ? "300px" : "0px")};
  /* height: ${(props) => (props.menuOpen ? "440px" : "0px")}; */
  opacity: ${(props) => (props.menuOpen ? "1" : "0")};
  overflow: ${(props) => (props.menuOpen ? "visible" : "hidden")};
  z-index: 2;
  transition: all 0.5s ease-in;

  .toggle {
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${(props) => props.theme.brown};
    z-index: 3;
  }

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    margin-top: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default function Nav({ menuOpen, toggle }) {
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <StyledNav menuOpen={menuOpen}>
      <button className="toggle" onClick={toggle}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <Signup
        signupOpen={signupOpen}
        toggle={() => setSignupOpen(!signupOpen)}
      />
      <NavLink href="/">Home</NavLink>
      <NavLink href="/menu">Menu</NavLink>
      <NavLink href="/create">Create</NavLink>
      <NavButton href="/signup" toggle={() => setSignupOpen(!signupOpen)}>
        Signup
      </NavButton>
      <NavLink href="/orders">Orders</NavLink>
      <NavLink href="/account">Account</NavLink>
    </StyledNav>
  );
}
