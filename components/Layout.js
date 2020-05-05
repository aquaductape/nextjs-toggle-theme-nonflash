import Link from "next/link";
import GlobalStyle from "../style/GlobalStyle";
import { useState, useEffect } from "react";
import { setThemeConfig } from "../lib/theme";

export default function Layout({ children, home }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(() => {
      try {
        const theme = localStorage.getItem("theme");
        return theme || "light";
      } catch (err) {}

      return "light";
    });
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const theme = prev === "light" ? "dark" : "light";
      setThemeConfig(theme);
      return theme;
    });
  };
  return (
    <div>
      <button className="btn btn-toggle-theme" onClick={toggleTheme}>
        {theme}
      </button>
      <main>{children}</main>
      {!home && (
        <Link href="/">
          <div className="route-home">
            <a>← Back to home</a>
          </div>
        </Link>
      )}
      <GlobalStyle></GlobalStyle>
      <style jsx>
        {`
          .route-home {
            color: #000;
            position: absolute;
            top: 50px;
            left: 50px;
            cursor: pointer;
            padding: 10px 20px;
            border-radius: 10px;
            background: rgb(221, 221, 221);
          }
          .btn {
            border: none;
            cursor: pointer;
            font: inherit;
          }

          .btn-toggle-theme {
            position: fixed;
            top: 50px;
            right: 50px;
            padding: 10px 20px;
            background: rgb(221, 221, 221);
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
}
