import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const A = styled.a`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: ${(props) =>
    props.active ? props.theme.brightPink : "transparent"};
  color: ${(props) => (props.active ? props.theme.white : props.theme.pink)};
  font-weight: ${(props) => (props.active ? "bolder" : "normal")};

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    display: flex;
    height: 58.75px;
    font-size: 1.5rem;
    color: ${(props) =>
      props.active ? props.theme.white : props.theme.brightPink};
    background: ${(props) =>
      props.active ? props.theme.brightPink : "transparent"};
  }
`;

export default function NavLink({ children, href }) {
  const [active, setActive] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setActive(router.pathname === href);
  });

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href}>
      <A href={href} onClick={handleClick} active={active}>
        {children}
      </A>
    </Link>
  );
}
