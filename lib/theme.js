const themeConfig = {
  dark: {
    "--color-homepage-bg": "#0e141b",
    "--color-text": "#fff",
    "--code": "#ccc",
    "--color-blue": "#f300e0",
    "--color-grey": "#ccc",
  },
  light: {
    "--color-homepage-bg": "#fff",
    "--color-text": "#000",
    "--code": "#f1f1f1",
    "--color-blue": "#0070f3",
    "--color-grey": "#eaeaea",
  },
};

export const setThemeConfig = (inputTheme) => {
  if (inputTheme === "dark") {
    const theme = themeConfig.dark;
    for (let key in theme) {
      setCSSVar(key, theme[key]);
    }
    localStorage.setItem("theme", inputTheme);
  } else {
    const theme = themeConfig.light;
    for (let key in theme) {
      setCSSVar(key, theme[key]);
    }
    localStorage.setItem("theme", inputTheme);
  }
};

function setCSSVar(property, color) {
  document.documentElement.style.setProperty(property, color);
}
