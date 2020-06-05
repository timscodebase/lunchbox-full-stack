import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 190px;
  top: 0;
  z-index: -2;
  background-image: url("https://res.cloudinary.com/the-classic-lunchbox/image/upload/q_auto/v1589383172/lunchbox/zpzackauncklhmbwm6oe.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    grid-template-columns: 1fr;
  }
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
      {/* <div>Cart</div> */}
    </>
  );
};

export default Header;
