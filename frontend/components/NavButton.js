import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const Button = styled.button`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 100%; */
  text-align: center;
  padding: 3rem 6rem;
  background: ${(props) =>
    props.active ? props.theme.brightPink : props.theme.white};
  color: ${(props) => (props.active ? props.theme.white : props.theme.pink)};
  font-weight: ${(props) => (props.active ? "bolder" : "normal")};
  border: 0;
  outline: 0;

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    display: flex;
    height: 58.75px;
    font-size: 1.5rem;
    color: ${(props) => props.theme.brightPink};
    background: transparent;
  }
`;

export default function NavLink({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}
