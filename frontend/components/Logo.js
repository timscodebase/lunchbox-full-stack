import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const LogoBox = styled.section`
  position: absolute;
  display: grid;
  justify-content: center;
  align-items: center;

  a.logo-link {
    position: fixed;
    display: block;
    margin: 3rem;
    width: ${(props) => (props.scrollPosition > 50 ? "67px" : "134px")};
    height: ${(props) => (props.scrollPosition > 50 ? "67px" : "134px")};
    opacity: ${(props) => (props.scrollPosition > 50 ? "0.75" : "1")};
    margin-left: ${(props) =>
      props.scrollPosition > 50 ? "-33.5px" : "-67px"};
    top: 0px;
    left: 50%;
    border-radius: 50%;

    &:hover {
      opacity: 1 !important;
    }
  }
`;

const LogoSrcx134 = `https://res.cloudinary.com/the-classic-lunchbox/image/upload/c_scale,q_auto,w_134/v1589774697/The-Classic-Lunchbox-Logo_pzlfso.png`;
const LogoSrcx67 = `https://res.cloudinary.com/the-classic-lunchbox/image/upload/c_scale,q_auto,w_67/v1589774697/The-Classic-Lunchbox-Logo_pzlfso.png`;

const Logo = () => {
  const [imgSrc, setImgSrc] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position);
    setScrollPosition(position);
  };

  useEffect(() => {
    setImgSrc(scrollPosition > 50 ? LogoSrcx67 : LogoSrcx134);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <LogoBox scrollPosition={scrollPosition}>
      <Link href="/">
        <a className="logo-link">
          <img src={imgSrc} alt="The Classic LunchBox" />
        </a>
      </Link>
    </LogoBox>
  );
};

export default Logo;
