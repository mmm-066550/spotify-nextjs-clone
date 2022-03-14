import Document, { Html, Head, Main, NextScript } from "next/document";

export default class _document extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}
