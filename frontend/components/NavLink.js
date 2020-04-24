import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

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
`;

const NavLink = ({ children, href }) => {
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
};

export default NavLink;
