import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import LogoIconSrc from "./LogoIconSrc";

const A = styled.a`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  padding: 1rem;

  svg {
    width: 22px;
    height: 22px;
    fill: ${(props) => props.theme.pink};
    stroke: ${(props) => props.theme.pink};
    margin: 0 -11px;
    position: absolute;
    bottom: 10px;
    left: 50%;
  }
`;

const ALink = (props, href) => {
  const router = useRouter();
  const inActive = router.pathname === href;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={props.href}>
      <A
        isActive={isActive}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {props.children}
        <LogoIconSrc show={isHovered} />
      </A>
    </Link>
  );
};

export default ALink;
