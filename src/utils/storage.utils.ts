import {
  changeDocumentStyles,
  themeDark,
  themeLight
} from "./change-document-styles.utils";

type TTheme = {
  [key: string]: string;
};

/**
 * Saves the theme configuration to local storage and applies the styles to the document.
 *
 * Depending on the value of the `theme` parameter, it chooses between `themeDark` 
 * and `themeLight`. If a custom theme `themeAux` is provided, it overrides the 
 * default selection. The selected or custom theme is then stored in local storage
 * under the key "theme". Additionally, it updates the document's styles to reflect
 * the chosen theme.
 *
 * @param {boolean} theme - Boolean flag indicating whether to use the dark theme.
 * @param {TTheme} [themeAux] - Optional custom theme to override the default theme.
 */
const saveStorage = (theme: boolean, themeAux?: TTheme) => {
  let themeSave = theme ? themeDark : themeLight;
  themeSave = themeAux ?? themeSave;
  localStorage.setItem("theme", JSON.stringify(themeSave));
  changeDocumentStyles(themeSave);
};

/**
 * Loads the theme configuration from local storage and applies it.
 * 
 * Retrieves the stored theme from local storage and converts it from
 * a JSON string into an object. It then saves the theme using `saveStorage`.
 * If the text color within the theme object is white, it returns true to
 * indicate the dark theme is applied; otherwise, it returns false. If no
 * theme is stored, it defaults to saving and applying the dark theme.
 * 
 * @returns {boolean} True if the dark theme is applied, otherwise false.
 */
const loadStorage = () => {
  const themeBrowser: string = localStorage.getItem("theme") as string;
  if (themeBrowser) {
    saveStorage(true, JSON.parse(themeBrowser));
    if (JSON.parse(themeBrowser)["--text-color"] === "#ffffff") return true;
    return false;
  }
  saveStorage(true);
  return true;
};

export { loadStorage, saveStorage, type TTheme };
