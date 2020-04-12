import Head from "next/head";

const Meta = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>The Classic Lunchbox</title>
    <meta
      name="description"
      content="A new take on the quintessential nut butter and jelly sandwich!"
    />
    <link rel="stylesheet" type="text/css" href="/static/fonts.css" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <link rel="stylesheet" type="text/css" href="/static/reset.css" />
    <link rel="stylesheet" type="text/css" href="/static/topography.css" />

    <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/favicons/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/static/favicons/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
);

export default Meta;
