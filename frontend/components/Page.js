import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

import Header from "../components/Header";
import Meta from "../components/Meta";
import Theme from "./Theme";

const pattern =
  "https://res.cloudinary.com/tihos/image/upload/q_auto/v1585937290/pattern3_btd9kp.png";

const StyledPage = styled.div`
  background: url(${(props) => props.theme.pattern3});
  color: ${(props) => props.theme.pink};
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.bs};
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  state = {
    lightTheme: true,
  };
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
