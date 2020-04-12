import React, { useState, useEffect } from "react";
import ALink from "./ALink";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledNav = styled.nav`
  display: flex;
  max-width: 300px;

  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;

const Nav = () => {
  const router = useRouter();
  const [homeActive, setHomeActive] = useState(false);
  const [sellActive, setSellActive] = useState(false);

  useEffect(() => {
    if (router.pathname === "/") setHomeActive(true);
    if (router.pathname === "/sell") setSellActive(true);
  }, [ALink]);

  return (
    <StyledNav>
      <ALink href="/" active={homeActive}>
        Home
      </ALink>
      <ALink href="sell" active={sellActive}>
        Sell
      </ALink>
      <ALink href="sell" active={sellActive}>
        Sell
      </ALink>
      <ALink href="sell" active={sellActive}>
        Sell
      </ALink>
      <ALink href="sell" active={sellActive}>
        Sell
      </ALink>
    </StyledNav>
  );
};

export default Nav;
