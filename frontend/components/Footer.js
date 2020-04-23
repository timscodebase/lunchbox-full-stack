import styled from "styled-components";

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

  h3 {
    margin: 0;
    font-size: 2.75rem;
    color: ${(props) => props.theme.tan};
  }

  .left,
  .middle,
  .right {
    padding: 2rem 0;
  }

  .left {
    padding: 0 2rem;
    background: ${(props) => props.theme.purple};
  }

  .middle {
    text-align: center;
    color: ${(props) => props.theme.brightPink};
    background: ${(props) => props.theme.white};
  }

  .right {
    padding-right: 2rem;
    text-align: right;
    background: ${(props) => props.theme.purple};
  }
`;

const Footer = () => (
  <StyledFooter>
    <section className="left">
      <h3>The Classic Lunchbox</h3>
      <p>
        Here at The Classic Lunchbox, we are reinventing the quintessential
        peanut butter and jelly sandwich.
      </p>
    </section>
    <section className="middle">
      <SocialGrid />
    </section>
    <section className="right">
      <FooterNav />
    </section>
  </StyledFooter>
);

export default Footer;
