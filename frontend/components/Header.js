import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 190px;
  top: 0;
  z-index: -1;
  background-image: url("https://res.cloudinary.com/the-classic-lunchbox/image/upload/q_auto/v1589383172/lunchbox/zpzackauncklhmbwm6oe.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    grid-template-columns: 1fr;
  }
`;

const SubBar = styled.input`
  width: 100%;
  background: ${(props) => props.theme.whiteTrans75};
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid ${(props) => props.theme.pink};
  color: ${(props) => props.theme.pink};
  padding: 5px 1rem;
`;

Router.events.on("routeChangeStart", (e) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", (e) => {
  NProgress.done();
});
Router.events.on("routeChangeError", (e) => {
  NProgress.done();
});

const Header = () => {
  return (
    <>
      <StyledHeader></StyledHeader>
      <SubBar placeholder="Search" />
      <div>Cart</div>
    </>
  );
};

export default Header;
