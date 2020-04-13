import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import LogoIconSrc from "./LogoIconSrc";

const A = styled.a`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  padding: 1rem;
  background: ${(props) =>
    props.active ? props.theme.brightPink : "transparent"};
  color: ${(props) => (props.active ? props.theme.white : props.theme.pink)};
  font-weight: ${(props) => (props.active ? "bolder" : "normal")};

  svg {
    width: 22px;
    height: 22px;
    fill: ${(props) =>
      props.active ? props.theme.white : props.theme.brightPink};
    stroke: ${(props) =>
      props.active ? props.theme.white : props.theme.brightPink};
    margin: 0 -11px;
    position: absolute;
    bottom: 10px;
    left: 50%;
  }
`;

const ALink = ({ children, active, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  // const [active, setActive] = useState(false);

  return (
    <Link href={href}>
      <A
        active={active}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        {/* <LogoIconSrc active={active} show={isHovered} /> */}
      </A>
    </Link>
  );
};

export default ALink;
