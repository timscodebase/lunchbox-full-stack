import styled from "styled-components";

const StyledLogo = styled.img`
  width: ${(props) => {
    props.small ? "125px" : "300px";
  }};
`;

const LogoSrcx90 = `https://res.cloudinary.com/the-classic-lunchbox/image/upload/c_scale,e_auto_brightness,q_auto,w_90/v1587612370/site_images/logo_rqm8zl.png`;
const LogoSrcx360 = `https://res.cloudinary.com/the-classic-lunchbox/image/upload/c_scale,e_auto_brightness,q_auto,w_360/v1587612370/site_images/logo_rqm8zl.png`;
const logoSrcSet = `${LogoSrcx360} 1000w`;

const LocalLogoSrc = "/logo.png";
const Logo = ({ width }) => (
  <img
    src={() => {
      if (width >= 1000) {
        return LogoSrcx90;
      } else {
        return LogoSrcx360;
      }
    }}
    alt="The Classic LunchBox"
  />
);

export default Logo;
