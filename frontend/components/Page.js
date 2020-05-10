import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Meta from "../components/Meta";
import Theme from "./Theme";
import Footer from "./Footer";

import Inner from "../components/styles/Inner";

const StyledPage = styled.div`
  background: url(${(props) => props.theme.pattern3});
  color: ${(props) => props.theme.pink};
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  *::before, *::after { box-sizing: inherit };
  a {
    text-decoration: none;
  }
  body {
    overflow-x: hidden;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  [hidden] {
    display: none;
  }
  html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  a:focus {
    outline: thin dotted;
  }
  a:active,
  a:hover {
    outline: 0;
  }
  h1 {
    font-size: 2em;
  }
  abbr[title] {
    border-bottom: 1px dotted;
  }
  b,
  strong {
    font-weight: 700;
  }
  dfn {
    font-style: italic;
  }
  mark {
    background: #ff0;
    color: #000;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, serif;
    font-size: 1em;
  }
  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  q {
    quotes: 2 1c 2 1d 2 18 2 19;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
  img {
    border: 0;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
  }
  button,
  input {
    line-height: normal;
  }
  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
  }
  button[disabled],
  input[disabled] {
    cursor: default;
  }
  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  input[type="search"] {
    -webkit-appearance: textfield;
    box-sizing: content-box;
  }
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  textarea {
    overflow: auto;
    vertical-align: top;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body,
  figure {
    margin: 0;
  }
  legend,
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background: #d4d4d4;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Open Sans", sans-serif;
    font-size: 2rem;
    overflow-x: hidden;
  }

  /* Fonts */

  @font-face {
    font-family: "haymakerregular";
    src: url("/fonts/haymaker-webfont.eot");
    src: url("/fonts/haymaker-webfont.eot?#iefix")
        format("embedded-opentype"),
      url("/fonts/haymaker-webfont.woff") format("woff"),
      url("/fonts/haymaker-webfont.ttf") format("truetype"),
      url("/fonts/haymaker-webfont.svg#haymakerregular") format("svg");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "blanchcaps_inline";
    src: url("/fonts/blanch_caps_inline-webfont.eot");
    src: url("/fonts/blanch_caps_inline-webfont.eot?#iefix")
        format("embedded-opentype"),
      url("/fonts/blanch_caps_inline-webfont.woff") format("woff"),
      url("/fonts/blanch_caps_inline-webfont.ttf") format("truetype"),
      url("/fonts/blanch_caps_inline-webfont.svg#blanchcaps_inline")
        format("svg");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Raleway";
    src: url("/fonts/Raleway-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Quicksand";
    src: url("/fonts/Quicksand-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  /*  Topography */

  h1 {
    font-family: "blanchcaps_inline", "Raleway", sans-serif;
    text-align: center;
    font-weight: normal;
    margin: 0;
  }
  h2 {
    font-size: 6rem;
    font-family: "blanchcaps_inline", "Raleway", sans-serif;
    background: linear-gradient(138deg, #dfa456, #793817, #ae0e60, #dfa456);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 0.6;
    font-weight: 100;
  }
  
  a,
  p,
  h3,
  h4,
  h5,
  h6,
  button {
    font-weight: normal;
    font-family: "Quicksand", "Raleway", sans-serif;
  }
  h2 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 3rem;
  }
`;

const Page = (props) => {
  const router = useRouter();
  if (router.pathname != "/") {
    return (
      <ThemeProvider theme={Theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta />
          <Header />
          <Inner>{props.children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={Theme}>
      <StyledPage>
        <GlobalStyle />
        <Meta />
        <Header />
        {props.children}
        <Footer />
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
