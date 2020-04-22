import React, { useState, useEffect } from "react";
import ALink from "./ALink";
import styled from "styled-components";
import Router, { useRouter } from "next/router";

const StyledNav = styled.nav`
  display: flex;

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    margin: 0 auto;
  }
`;

const Nav = () => {
  const router = useRouter();
  const [menuActive, setMenuActive] = useState(false);
  const [signupActive, setSignupActive] = useState(false);
  const [sellActive, setSellActive] = useState(false);
  const [ordersActive, setOrdersActive] = useState(false);
  const [accountActive, setAccountActive] = useState(false);

  const handleRouteChange = () => {
    if (router.pathname === "/") {
      setMenuActive(true);
    } else {
      setMenuActive(false);
    }
    if (router.pathname === "/menu") {
      setMenuActive(true);
    } else {
      setMenuActive(false);
    }
    if (router.pathname === "/signup") {
      setSignupActive(true);
    } else {
      setSignupActive(false);
    }
    if (router.pathname === "/sell") {
      setSellActive(true);
    } else {
      setSellActive(false);
    }
    if (router.pathname === "/orders") {
      setOrdersActive(true);
    } else {
      setOrdersActive(false);
    }
    if (router.pathname === "/account") {
      setAccountActive(true);
    } else {
      setAccountActive(false);
    }
  };

  useEffect(() => {
    if (router.pathname === "/") setMenuActive(true);
    if (router.pathname === "/menu") setMenuActive(true);
    if (router.pathname === "/signup") setSignupActive(true);
    if (router.pathname === "/sell") setSellActive(true);
    if (router.pathname === "/orders") setOrdersActive(true);
    if (router.pathname === "/account") setAccountActive(true);
  });

  Router.events.on("routeChangeComplete", handleRouteChange);

  return (
    <StyledNav>
      <ALink href="/menu" active={menuActive}>
        Menu
      </ALink>
      <ALink href="/sell" active={sellActive}>
        Sell
      </ALink>
      <ALink href="signup" active={signupActive}>
        Signup
      </ALink>
      <ALink href="orders" active={ordersActive}>
        Orders
      </ALink>
      <ALink href="account" active={accountActive}>
        Account
      </ALink>
    </StyledNav>
  );
};

export default Nav;
