import styled from "styled-components";
import SVG from "react-inlinesvg";

const LogoIconWrapper = styled.div`
  display: ${(props) => (props.isActive || props.show ? "block" : "none")};

  svg {
    g {
      fill: ${(props) => props.theme.brown};
      stroke: ${(props) => props.theme.pink};
    }
  }
`;

const LogoIconSrc = (props) => (
  <LogoIconWrapper show={props.show}>
    <SVG
      cacheRequests={true}
      description="The Classic Lunchbox"
      src="/logo-icon.svg"
      title="The Classic Lunchbox"
      uniqueHash="1L0v3H3l3N!"
      uniquifyIDs={true}
    />
  </LogoIconWrapper>
);

const LogoIcon = ({ active, show }) => (
  <LogoIconWrapper active={active} show={show}>
    <img src="/logo-icon.svg" alt="Hover jelly splash" />
  </LogoIconWrapper>
);

export default LogoIconSrc;
