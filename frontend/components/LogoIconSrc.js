import styled from "styled-components";
import SVG from "react-inlinesvg";

const LogoIconWrapper = styled.div`
  display: ${(props) => (props.isActive || props.show ? "block" : "none")};
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
      preProcessor={(code) => code.replace(/fill=".*?"/g, "#eee")}
      src="/static/logo-icon.svg"
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
