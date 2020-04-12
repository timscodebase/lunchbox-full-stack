import ALink from "./ALink";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  max-width: 300px;

  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <ALink href="/">Home</ALink>
      <ALink href="sell">Sell</ALink>
      <ALink href="sell">Sell</ALink>
      <ALink href="sell">Sell</ALink>
      <ALink href="sell">Sell</ALink>
    </StyledNav>
  );
};

export default Nav;
