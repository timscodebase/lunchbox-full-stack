import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: transparent;
  color: ${(props) => props.theme.pink};
  font-weight: normal;
  border: 0px;
  outline: none;

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    display: flex;
    height: 58.75px;
    font-size: 1.5rem;
    color: ${(props) => props.theme.brightPink};
    background: ${(props) => props.theme.brightPink};

    &:hover {
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme.white};
      font-weight: bolder;
    }
  }
`;

export default function NavLink({ children, toggle }) {
  return <Button onClick={toggle}>{children}</Button>;
}
