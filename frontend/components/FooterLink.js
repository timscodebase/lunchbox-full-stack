import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const A = styled.a`
  display: inline-block;
  color: ${(props) => (props.active ? props.theme.tan : props.theme.white)};

  &:hover {
    color: ${(props) => (props.active ? props.theme.white : props.theme.tan)};
    box-shadow: 0 1px 0
      ${(props) => (props.active ? props.theme.tan : props.theme.white)};
  }

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    font-size: 1.5rem;
    color: ${(props) =>
      props.active ? props.theme.white : props.theme.brightPink};
    background: ${(props) =>
      props.active ? props.theme.brightPink : props.theme.white};

    &:hover {
      color: ${(props) =>
        props.active ? props.theme.brightPink : props.theme.white};
      background: ${(props) =>
        props.active ? props.theme.white : props.theme.brightPink};
    }
  }
`;

const FooterLink = ({ children, href }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(router.pathname === href);
  });

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <A href={href} onClick={handleClick} active={active}>
      {children}
    </A>
  );
};

export default FooterLink;
