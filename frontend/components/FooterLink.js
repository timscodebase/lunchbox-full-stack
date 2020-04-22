import Link from "next/link";
import styled from "styled-components";

const A = styled.a`
  display: inline-block;
  color: ${(props) => (props.active ? props.theme.tan : props.theme.white)};

  &:hover {
    color: ${(props) => (props.active ? props.theme.white : props.theme.tan)};
    box-shadow: 0 1px 0
      ${(props) => (props.active ? props.theme.tan : props.theme.white)};
  }
`;

const FooterLink = ({ active, children, href }) => (
  <Link href={href}>
    <A active={active}>{children}</A>
  </Link>
);

export default FooterLink;
