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
  background: ${(props) => (props.isActive ? props.theme.pink : "transparent")};
  color: ${(props) => (props.isActive ? props.theme.white : props.theme.pink)};
  font-weight: ${(props) => (props.isActive ? "bolder" : "normal")};

  svg {
    width: 22px;
    height: 22px;
    fill: ${(props) => (props.isActive ? props.theme.white : props.theme.pink)};
    stroke: ${(props) =>
      props.isActive ? props.theme.white : props.theme.pink};
    margin: 0 -11px;
    position: absolute;
    bottom: 10px;
    left: 50%;
  }
`;

const ALink = ({ children, href }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const isActive = router.pathname === href;
    setActive(isActive);
  }, []);
  return (
    <Link href={href}>
      <A
        isActive={active}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        <LogoIconSrc active={active} show={isHovered} />
      </A>
    </Link>
  );
};

export default ALink;
