import React, { useState, useEffect } from "react";
import ALink from "./ALink";
import styled from "styled-components";
import { useRouter } from "next/router";

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
  const [ordersActive, setOrdersActive] = useState(false);
  const [accountActive, setAccountActive] = useState(false);

  useEffect(() => {
    if (router.pathname === "/") setMenuActive(true);
    if (router.pathname === "/menu") setMenuActive(true);
    if (router.pathname === "/signup") setSignupActive(true);
    if (router.pathname === "/orders") setOrdersActive(true);
    if (router.pathname === "/account") setAccountActive(true);
  }, [ALink]);

  return (
    <StyledNav>
      <ALink href="/menu" active={menuActive}>
        Menu
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
