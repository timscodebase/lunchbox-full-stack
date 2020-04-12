import Link from "next/link";
import styled from "styled-components";

import H1 from "./styles/H1";
import Logo from "./Logo";
import Nav from "./Nav";

const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    flex-direction: column;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => props.theme.pink};
  background: rgba(255, 255, 255, 0.75);

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    flex-direction: column;
  }
`;

const Header = () => (
  <>
    <StyledHeader>
      <Link href="/">
        <A>
          <Logo />
          <H1>The Classic Lunchbox</H1>
        </A>
      </Link>
      <Nav />
    </StyledHeader>
    <div className="sub-bar">Search</div>
    <div>Cart</div>
  </>
);

export default Header;
