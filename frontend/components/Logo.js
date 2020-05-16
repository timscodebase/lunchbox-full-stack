import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledLogo = styled.img`
  width: ${(props) => {
    props.small ? "125px" : "300px";
  }};
`;

const LogoBox = styled.section`
  position: absolute;
  display: flex;
  z-index: 3;
  margin: 3rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme.whiteTrans75};
  border: 2px double ${(props) => props.theme.brightPink};

  span {
    font: 40px "blanchcaps_inline", "Raleway", sans-serif;
    /* background: linear-gradient(138deg, #dfa456, #793817, #ae0e60, #dfa456);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    color: ${(props) => props.theme.brown};
    height: 108%;
    position: absolute;
    width: 20px;
    left: 60px;
    top: -7px;
    transform-origin: middle center;
    z-index: 5;

    /* The */
    &.the-1 {
      transform: rotate(-68deg);
    }
    &.the-2 {
      transform: rotate(-53deg);
    }
    &.the-3 {
      transform: rotate(-38deg);
    }

    /* Classic */
    &.classic-1 {
      transform: rotate(-8deg);
    }
    &.classic-2 {
      transform: rotate(7deg);
    }
    &.classic-3 {
      transform: rotate(22deg);
    }
    &.classic-4 {
      transform: rotate(37deg);
    }
    &.classic-5 {
      transform: rotate(52deg);
    }
    &.classic-6 {
      transform: rotate(70deg);
    }
    &.classic-7 {
      transform: rotate(82deg);
    }

    /* Lunchbox */
    &.lunchbox-1 .letter,
    &.lunchbox-2 .letter,
    &.lunchbox-3 .letter,
    &.lunchbox-4 .letter,
    &.lunchbox-5 .letter,
    &.lunchbox-6 .letter,
    &.lunchbox-7 .letter,
    &.lunchbox-8 .letter {
      transform: scale(-1, -1);
    }

    &.lunchbox-1 {
      transform: rotate(227deg);
    }
    &.lunchbox-2 {
      transform: rotate(213deg);
    }
    &.lunchbox-3 {
      transform: rotate(197deg);
    }
    &.lunchbox-4 {
      transform: rotate(183deg);
    }
    &.lunchbox-5 {
      transform: rotate(167deg);
    }
    &.lunchbox-6 {
      transform: rotate(153deg);
    }
    &.lunchbox-7 {
      transform: rotate(137deg);
    }
    &.lunchbox-8 {
      transform: rotate(123deg);
    }
  }
`;

const LogoSrcx90 = `https://res.cloudinary.com/the-classic-lunchbox/image/upload/c_scale,e_auto_brightness,q_auto,w_90/v1587612370/site_images/logo_rqm8zl.png`;
const LogoSrcx100 = `https://res.cloudinary.com/the-classic-lunchbox/image/upload/c_scale,e_auto_brightness,q_auto,w_100/v1587612370/site_images/logo_rqm8zl.png`;

const Logo = ({ text }) => {
  const [imgSrc, setImgSrc] = useState("");

  const logoWords = text.split(" ");
  const the = logoWords[0].split("");
  const classic = logoWords[1].split("");
  const lunchbox = logoWords[2].split("");

  const theWordThe = the.map((letter, i) => (
    <span key={i} className={`the-${i + 1}`}>
      {letter}
    </span>
  ));

  const theWordClassic = classic.map((letter, i) => (
    <span key={i} className={`classic-${i + 1}`}>
      {letter}
    </span>
  ));

  const theWordLunchbox = lunchbox.map((letter, i) => (
    <span key={i} className={`lunchbox-${i + 1}`}>
      <div className="letter">{letter}</div>
    </span>
  ));

  useEffect(() => {
    const width = window.innerWidth;
    setImgSrc(width >= 1000 ? LogoSrcx90 : LogoSrcx100);
  }, []);

  return (
    <LogoBox>
      {theWordThe}
      {theWordClassic}
      <img src={imgSrc} alt="The Classic LunchBox" />
      {theWordLunchbox}
    </LogoBox>
  );
};

export default Logo;
