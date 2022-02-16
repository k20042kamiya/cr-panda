import NextDocument, { Head, Html, Main, NextScript } from "next/document";

interface Props {}
class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Tourney:wght@100&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="bg-original-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
