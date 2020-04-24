import styled from "styled-components";

import NavLink from "./NavLink";

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    margin: 0 auto;
    height: 90px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Nav = () => (
  <StyledNav>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/menu">Menu</NavLink>
    <NavLink href="/sell">Sell</NavLink>
    <NavLink href="/signup">Signup</NavLink>
    <NavLink href="/orders">Orders</NavLink>
    <NavLink href="/account">Account</NavLink>
  </StyledNav>
);

export default Nav;
