import styled from "styled-components";

import FooterLink from "./FooterLink";

const StyledFooterNav = styled.nav`
  padding-right: 2rem;
  text-align: right;
  background: ${(props) => props.theme.purple};

  h3 {
    margin: 0;
    font-size: 2.75rem;
    color: ${(props) => props.theme.tan};
  }

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    padding: 0;

    ul {
      display: grid;
      height: 117.5px;
      grid-template-columns: 1fr 1fr 1fr;

      li {
        display: block;
      }
    }
  }
`;

const FooterNav = () => (
  <StyledFooterNav>
    <ul>
      <li>
        <FooterLink href="/">Home</FooterLink>
      </li>
      <li>
        <FooterLink href="/menu">Menu</FooterLink>
      </li>
      <li>
        <FooterLink href="/create">Create</FooterLink>
      </li>
      <li>
        <FooterLink href="signup">Signup</FooterLink>
      </li>
      <li>
        <FooterLink href="/orders">Orders</FooterLink>
      </li>
      <li>
        <FooterLink href="/account">Accounts</FooterLink>
      </li>
    </ul>
  </StyledFooterNav>
);

export default FooterNav;
