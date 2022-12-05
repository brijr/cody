import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="bg-slate-200 scroll-smooth">
      <Head>
        <link href='https://css.gg/link.css' rel='stylesheet'></link>
        <link href='https://css.gg/mail.css' rel='stylesheet'></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;1,300;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
