import App from "next/app";

import Page from "../components/Page";

const MyApp = (props) => {
  const { Component } = props;

  return (
    <Page>
      <Component />
    </Page>
  );
};

export default MyApp;
