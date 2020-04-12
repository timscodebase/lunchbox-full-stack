import styled from "styled-components";

const StyledLogo = styled.img`
  width: ${(props) => {
    props.small ? "125px" : "300px";
  }};
`;

const LogoSrc =
  "https://res.cloudinary.com/tihos/image/upload/c_scale,e_auto_brightness,w_180/v1586239047/The%20Classic%20Lunchbox/The_Classic_Lunchbox_Logo_transperent_1024.png";

const Logo = () => (
  <StyledLogo small src={LogoSrc} alt="The Classic LunchBox" />
);

export default Logo;
