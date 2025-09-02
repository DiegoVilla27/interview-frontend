import { ISection } from "../../types";

export const questionsRegularExpresions: ISection = {
  title: "Expresiones Regulares",
  collapse: "collapseRegularExpresions",
  icon: "regular-expresions",
  questions: [
    {
      title: "¿Qué es una expresión regular?",
      response: "Una secuencia de caracteres que define un patrón de búsqueda."
    },
    {
      title: "¿Cómo se usa una expresión regular simple en JavaScript?",
      response:
        "Con el constructor `RegExp` o las barras `/patrón/`. Ej: `/abc/`."
    },
    {
      title: "¿Qué significa el metacarácter `.`?",
      response: "Coincide con cualquier carácter excepto saltos de línea."
    },
    {
      title: "¿Qué significa `^` y `$` en regex?",
      response: "`^` coincide con el inicio de la cadena y `$` con el final."
    },
    {
      title: "¿Qué hace el operador `*`?",
      response: "Coincide con cero o más repeticiones del elemento anterior."
    },
    {
      title: "¿Qué hace el operador `+`?",
      response: "Coincide con una o más repeticiones del elemento anterior."
    },
    {
      title: "¿Qué hace el operador `?`?",
      response: "Hace que el elemento anterior sea opcional (cero o una vez)."
    },
    {
      title: "¿Qué significa el cuantificador `{n,m}`?",
      response: "Coincide entre `n` y `m` repeticiones del patrón anterior."
    },
    {
      title: "¿Cómo validar un número entero con regex?",
      response: "`/^-?\\d+$/` permite enteros positivos y negativos."
    },
    {
      title: "¿Qué hace la clase `[a-z]`?",
      response: "Coincide con cualquier letra minúscula de la 'a' a la 'z'."
    },
    {
      title: "¿Qué hace `\\d` y `\\D`?",
      response:
        "`\\d` coincide con cualquier dígito, `\\D` con cualquier carácter que no sea dígito."
    },
    {
      title: "¿Qué hace `\\w` y `\\W`?",
      response:
        "`\\w` coincide con letras, dígitos y `_`. `\\W` coincide con lo contrario."
    },
    {
      title: "¿Qué hace `\\s` y `\\S`?",
      response:
        "`\\s` coincide con espacios en blanco, `\\S` con caracteres que no son espacio."
    },
    {
      title: "¿Cómo usar 'grupos de captura' en regex?",
      response:
        "Con paréntesis `( )`. Ejemplo: `/(\\d{4})-(\\d{2})-(\\d{2})/` captura fecha."
    },
    {
      title: "¿Qué son los 'grupos no capturantes'?",
      response: "Son grupos que no guardan coincidencias, usando `(?: )`."
    },
    {
      title: "¿Qué hace una 'lookahead' positiva `(?=...)`?",
      response:
        "Coincide si después de la posición actual está el patrón, sin consumirlo."
    },
    {
      title: "¿Qué hace una 'lookahead' negativa `(?!...)`?",
      response: "Coincide si después de la posición actual NO está el patrón."
    },
    {
      title: "¿Qué hace una 'lookbehind' positiva `(?<=...)`?",
      response: "Coincide si antes de la posición actual está el patrón."
    },
    {
      title: "¿Qué hace una 'lookbehind' negativa `(?<!...)`?",
      response: "Coincide si antes de la posición actual NO está el patrón."
    },
    {
      title: "¿Cómo validar un correo electrónico con regex?",
      response: "Ejemplo: `/^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$/`."
    },
    {
      title: "¿Cómo extraer todas las coincidencias en JavaScript?",
      response: "Con `string.matchAll(regex)`."
    },
    {
      title: "¿Cómo usar 'named capturing groups' en regex?",
      response:
        "Con `(?<nombre>...)`. Ejemplo: `/(?<year>\\d{4})-(?<month>\\d{2})/`."
    },
    {
      title: "¿Qué son las 'expresiones condicionales' en regex?",
      response:
        "Permiten comprobar si un grupo capturó o no. Ejemplo: `(?(1)yes|no)`."
    },
    {
      title: "¿Cómo limitar 'backtracking' excesivo en regex?",
      response:
        "Usando cuantificadores possessive en algunos lenguajes (`++`, `*+`)."
    },
    {
      title: "¿Qué es 'catastrophic backtracking'?",
      response:
        "Cuando una regex mal optimizada prueba demasiadas combinaciones y se vuelve lenta."
    },
    {
      title: "¿Cómo usar regex para validar una URL?",
      response:
        "Ejemplo avanzado: `/^(https?:\\/\\/)?([\\w.-]+)\\.([a-z\\.]{2,6})([\\/\\w.-]*)*\\/?$/`."
    },
    {
      title: "¿Qué diferencia hay entre `greedy` y `lazy matching`?",
      response:
        "`Greedy` toma la mayor coincidencia posible, `lazy` la menor. Ejemplo: `.*` vs `.*?`."
    },
    {
      title: "¿Qué hace el modificador `g`, `i`, `m` y `u` en regex?",
      response:
        "`g`: global, `i`: insensible a mayúsculas, `m`: multilinea, `u`: Unicode."
    }
  ]
};

export default questionsRegularExpresions;
