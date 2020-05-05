const GlobalStyle = () => (
  <style jsx global>
    {`
      :root {
        --color-homepage-bg: #fff,
        --color-text: #000;
        --code: #f1f1f1;
        --color-blue: #0070f3;
        --color-grey: #eaeaea;
      }

      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        transition: background 300ms;
        background: var(--color-homepage-bg);
        color: var(--color-text);
      }

      * {
        box-sizing: border-box;
      }
    `}
  </style>
);
export default GlobalStyle;
