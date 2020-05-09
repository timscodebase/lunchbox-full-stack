import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledLogo = styled.img`
  width: ${(props) => {
    props.small ? "125px" : "300px";
  }};
`;

const LogoSrcx90 = `https://res.cloudinary.com/the-classic-lunchbox/image/upload/c_scale,e_auto_brightness,q_auto,w_90/v1587612370/site_images/logo_rqm8zl.png`;
const LogoSrcx100 = `https://res.cloudinary.com/the-classic-lunchbox/image/upload/c_scale,e_auto_brightness,q_auto,w_100/v1587612370/site_images/logo_rqm8zl.png`;

const Logo = () => {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const width = window.innerWidth;
    setImgSrc(width >= 1000 ? LogoSrcx90 : LogoSrcx100);
  }, []);

  return <img src={imgSrc} alt="The Classic LunchBox" />;
};

export default Logo;
