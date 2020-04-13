import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";

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
  border-bottom: 2px solid ${(props) => props.theme.purple};
  background: rgba(255, 255, 255, 0.75);

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    flex-direction: column;
  }
`;

const SubBar = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.75);
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid ${(props) => props.theme.pink};
  color: ${(props) => props.theme.pink};
  padding: 5px 1rem;
`;

Router.events.on("routeChangeStart", (e) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", (e) => {
  NProgress.done();
});
Router.events.on("routeChangeError", (e) => {
  console.log(e);
});

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
    <SubBar placeholder="Search" />
    <div>Cart</div>
  </>
);

export default Header;
