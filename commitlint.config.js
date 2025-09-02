/** 
 * Docs https://commitlint.js.org/#/reference-rules
  Each rule has 3 properties:
  -> Level
  0: Disables the rule
  1: Enables the rule like a warning
  2: Enables the rule like a error
  -> Applicable
  "always": Enables the rule always
  "never": Disable the rule always
  -> Value
  string|boolean|number|array

  "name-rule": [Level, Applicable, Value]
*/

export const Configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-empty": [
      // Se encarga de validar el tipo
      2,
      "never"
    ],
    "type-enum": [
      // Se encarga de los tipos (Example: feat, fix, bug and others)
      2,
      "always",
      ["feat", "fix", "styles", "docs", "test", "refactor"]
    ],
    "type-case": [
      // Se encarga del case en el type
      2,
      "always",
      "upper-case"
    ],
    "scope-empty": [
      // Se encarga del scope (Example: feat(frontend), fix(web) and others)
      2,
      "always"
    ],
    "subject-empty": [
      // Se encarga de validar el subject
      2,
      "never"
    ],
    "subject-case": [
      // Se encarga del case en el subject
      2,
      "always",
      "sentence-case"
    ],
    "subject-min-length": [
      // Se encarga del tamaño minimo del subject
      2,
      "always",
      10
    ],
    "subject-max-length": [
      // Se encarga del tamaño máximo del subject
      2,
      "always",
      50
    ],
    "body-empty": [
      // Se encarga de validar el body
      2,
      "always"
    ],
    "footer-empty": [
      // Se encarga de validar el footer
      2,
      "always"
    ]
  }
};

export default Configuration;
