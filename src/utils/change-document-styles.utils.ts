import { TTheme } from "./storage.utils";

const themeLight: TTheme = {
  "--text-color": "#000000",
  "--item": "#ffffff",
  "--bg": "#e9e9e9",
  "--icon-arrow": 'url("/public/icons/arrow-black.svg")'
};

const themeDark: TTheme = {
  "--text-color": "#ffffff",
  "--item": "#1e1e1e",
  "--bg": "#121212",
  "--icon-arrow": 'url("/public/icons/arrow-white.svg")'
};

/**
 * Updates the document's CSS variables based on the provided theme.
 *
 * @param theme - An object representing the theme, where each key is a 
 *                CSS variable and the corresponding value is the desired 
 *                style setting.
 */
const changeDocumentStyles = (theme: TTheme) => {
  const root = document.documentElement;
  root.style.setProperty("--text-color", theme["--text-color"]);
  root.style.setProperty("--item", theme["--item"]);
  root.style.setProperty("--bg", theme["--bg"]);
  root.style.setProperty("--icon-arrow", theme["--icon-arrow"]);
};

export { changeDocumentStyles, themeDark, themeLight };
