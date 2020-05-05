import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="/static/theme.js"></script>
        </Head>
        <body>
          {/* some sources placed script inside body, before Main, but I experienced flashing */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
