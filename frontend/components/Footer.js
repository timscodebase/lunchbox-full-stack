import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";

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

  a {
    display: inline-block;
    color: ${(props) => props.theme.tan};

    &:hover {
      color: ${(props) => props.theme.white};
      box-shadow: 0 1px 0 ${(props) => props.theme.tan};
    }
  }

  .left,
  .middle,
  .right {
    padding: 2rem 0;
  }

  .left {
    padding-left: 2rem;
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

// Router.events.on('routeChangeComplete', handleRouteChange)

const Footer = () => (
  <StyledFooter>
    <section className="left">
      <h3>The Classic Lunchbox</h3>
      <p>
        Here at The Classic Lunchbox, we are reinventing the quintessential
        peanut butter and jelly sandwich.
      </p>
    </section>
    <section className="middle">Hi</section>
    <section className="right">
      <ul>
        <li>
          <Link href="/menu">
            <a>Menu</a>
          </Link>
        </li>
        <li>
          <Link href="/sell">
            <a>Sell</a>
          </Link>
        </li>
        <li>
          <Link href="signup">
            <a>Signup</a>
          </Link>
        </li>
        <li>
          <Link href="orders">
            <a>Orders</a>
          </Link>
        </li>
        <li>
          <Link href="account">
            <a>Accouts</a>
          </Link>
        </li>
      </ul>
    </section>
  </StyledFooter>
);

export default Footer;
