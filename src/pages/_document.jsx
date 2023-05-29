import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ===== FAVICON ===== */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        {/* ===== DESCRIPTION ===== */}
        <meta
          name="description"
          content="WatArrow is an aero design team from the University of Waterloo that competes in SAE Aero Design competitions. The team designs, fabricates, and tests radio controlled aircraft that can take off, land, and optimally meet mission requiresments set out by the competition."
        />
        {/* ===== FONT ===== */}
        <link href="https://fonts.cdnfonts.com/css/d-din" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
