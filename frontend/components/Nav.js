import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import NavButton from "./NavButton";
import NavLink from "./NavLink";
import Signup from "./Signup";

const StyledNav = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: ${(props) => props.theme.white};
  top: -200px;
  right: 0;
  padding-top: 5.5rem;
  width: ${(props) => (props.menuOpen ? "300px" : "0px")};
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

export default function Nav({ menuOpen, menuToggle }) {
  const [signupOpen, setSignupOpen] = useState(false);

  function handleSignup() {}

  return (
    <StyledNav menuOpen={menuOpen}>
      <button className="toggle" onClick={menuToggle}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <Signup
        signupOpen={signupOpen}
        menuToggle={menuToggle}
        signupToggle={() => setSignupOpen(!signupOpen)}
      />
      <NavLink menuToggle={menuToggle} href="/">
        Home
      </NavLink>
      <NavLink menuToggle={menuToggle} href="/menu">
        Menu
      </NavLink>
      <NavLink menuToggle={menuToggle} href="/create">
        Create
      </NavLink>
      <NavButton href="/signup" onClick={() => setSignupOpen(!signupOpen)}>
        Signup
      </NavButton>
      <NavLink menuToggle={menuToggle} href="/orders">
        Orders
      </NavLink>
      <NavLink menuToggle={menuToggle} href="/account">
        Account
      </NavLink>
    </StyledNav>
  );
}
