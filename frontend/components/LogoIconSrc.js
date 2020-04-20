import styled from "styled-components";
import SVG from "react-inlinesvg";

const LogoIconWrapper = styled.div`
  display: ${(props) => (props.isActive || props.show ? "block" : "none")};

  svg {
    g {
      fill: ${(props) => props.theme.pink};
      stroke: ${(props) => props.theme.pink};
    }
  }
`;

const LogoIconSrc = (props) => (
  <LogoIconWrapper show={props.show}>
    <SVG
      baseURL="/home"
      cacheRequests={true}
      description="The Classic Lunchbox"
      loader={() => <span>Loading...</span>}
      onError={(error) => console.log(error.message)}
      onLoad={(src, hasCache) => console.log(src, hasCache)}
      src="/logo-icon.svg"
      title="The Classic Lunchbox"
      uniqueHash="1L0v3H3l3N!"
      uniquifyIDs={true}
    />
  </LogoIconWrapper>
);

const LogoIcon = ({ active, show }) => (
  <LogoIconWrapper active={active} show={show}>
    <LogoIconSrc />
  </LogoIconWrapper>
);

export default LogoIconSrc;
