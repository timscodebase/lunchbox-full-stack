import React, { useCallback } from "react";
import styled from "styled-components";

import useResizeObserver from "../lib/useResizeObserver";

import FooterNav from "./FooterNav";
import SocialGrid from "./SocialGrid";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: ${(props) => props.theme.white};
  margin-top: 2rem;
  color: ${(props) => props.theme.white};
  padding-top: 4px;
  border-top: 4px solid ${(props) => props.theme.brightPink};

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  h3 {
    margin: 0;
    font-size: 2.75rem;
    color: ${(props) => props.theme.tan};
  }

  .left,
  .right {
    padding: 2rem;
  }

  .left {
    background: ${(props) => props.theme.purple};
  }

  .middle {
    padding: 0;
    text-align: center;
    color: ${(props) => props.theme.brightPink};
    background: ${(props) => props.theme.white};
  }

  .right {
    padding-right: 2rem;
    text-align: right;
    background: ${(props) => props.theme.purple};

    @media (max-width: ${(props) => props.theme.tabletMQ}) {
      padding-left: 0;
      padding-right: 0;
    }

    ul {
      margin: 17.5px 0;
    }

    @media (max-width: ${(props) => props.theme.tabletMQ}) {
      text-align: center;

      nav {
        text-align: center;
      }
    }
  }
`;

const Footer = () => {
  const [ref, { contentRect }] = useResizeObserver();
  const getContentRect = useCallback(
    (key) => {
      return contentRect && Math.round(contentRect[key]);
    },
    [contentRect]
  );
  return (
    <StyledFooter ref={ref}>
      <section className="left">
        <h3>The Classic Lunchbox</h3>
        <p>
          Here at The Classic Lunchbox, we are reinventing the quintessential
          peanut butter and jelly sandwich.
        </p>
      </section>
      <section className="middle">
        <SocialGrid height={getContentRect("height")} />
      </section>
      <section className="right">
        <h3>Navigation</h3>
        <FooterNav />
      </section>
    </StyledFooter>
  );
};

export default Footer;
