import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import styled from "styled-components";

import FooterLink from "./FooterLink";

const StyledFooterNav = styled.nav`
  padding-right: 2rem;
  text-align: right;
  background: ${(props) => props.theme.purple};

  h3 {
    margin: 0;
    font-size: 2.75rem;
    color: ${(props) => props.theme.tan};
  }
`;

const FooterNav = () => {
  const router = useRouter();
  const [menuActive, setMenuActive] = useState(false);
  const [signupActive, setSignupActive] = useState(false);
  const [sellActive, setSellActive] = useState(false);
  const [ordersActive, setOrdersActive] = useState(false);
  const [accountActive, setAccountActive] = useState(false);

  const handleRouteChange = () => {
    setMenuActive(router.pathname === "/" ? true : false);
    setMenuActive(router.pathname === "/menu" ? true : false);
    setSignupActive(router.pathname === "/signup" ? true : false);
    setSellActive(router.pathname === "/sell" ? true : false);
    setOrdersActive(router.pathname === "/orders" ? true : false);
    setAccountActive(router.pathname === "/account" ? true : false);
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
    <StyledFooterNav>
      <ul>
        <li>
          <FooterLink active={menuActive} href="/menu">
            Menu
          </FooterLink>
        </li>
        <li>
          <FooterLink active={sellActive} href="/sell">
            Sell
          </FooterLink>
        </li>
        <li>
          <FooterLink active={signupActive} href="signup">
            Signup
          </FooterLink>
        </li>
        <li>
          <FooterLink active={ordersActive} href="orders">
            Orders
          </FooterLink>
        </li>
        <li>
          <FooterLink active={accountActive} href="account">
            Accouts
          </FooterLink>
        </li>
      </ul>
    </StyledFooterNav>
  );
};

export default FooterNav;
