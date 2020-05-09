import { useState, useEffect } from "react";
import styled from "styled-components";

import NavButton from "./NavButton";
import NavLink from "./NavLink";
import Signup from "./Signup";

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  position: relative;

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    margin-top: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default function Nav() {
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <StyledNav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/menu">Menu</NavLink>
      <NavLink href="/sell">Sell</NavLink>
      <NavButton href="/signup" toggle={() => setSignupOpen(!signupOpen)}>
        Signup
      </NavButton>
      <NavLink href="/orders">Orders</NavLink>
      <NavLink href="/account">Account</NavLink>
      <Signup
        signupOpen={signupOpen}
        toggle={() => setSignupOpen(!signupOpen)}
      />
    </StyledNav>
  );
}
