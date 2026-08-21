import { ISection } from "../../types";

export const questionsRegularExpresions: ISection = {
  title: "Expresiones Regulares",
  collapse: "collapseRegularExpresions",
  icon: "regular-expresions",
  questions: [
    // === BÁSICO ===
    {
      title: "¿Qué es una Expresión Regular (RegEx)?",
      response:
        "Es una secuencia formal de caracteres que define un patrón de búsqueda y coincidencia de texto. Se utiliza para validar entradas de usuario, buscar, reemplazar y extraer fragmentos de strings.",
      level: "basico"
    },
    {
      title: "¿Cómo se crea una RegEx en JavaScript?",
      response:
        "De dos formas: 1) Literal: `/patrón/flags` (compilada en tiempo de parseo, preferida si es estática) o 2) Constructor: `new RegExp('patrón', 'flags')` (permite construir patrones dinámicos en runtime).",
      level: "basico"
    },
    {
      title: "¿Qué significan las anclas `^` y `$`?",
      response:
        "`^` coincide con el inicio de la línea/string. `$` coincide con el final de la línea/string. Ejemplo: `/^admin$/` solo coincide con la palabra exacta 'admin' sin caracteres adicionales alrededor.",
      level: "basico"
    },
    {
      title: "¿Qué hacen los cuantificadores `*`, `+` y `?`?",
      response:
        "`*` coincide con 0 o más repeticiones. `+` coincide con 1 o más repeticiones. `?` hace que el elemento precedente sea opcional (0 o 1 repetición).",
      level: "basico"
    },
    {
      title: "¿Qué representan las clases de caracteres abreviadas `\\d`, `\\w` y `\\s`?",
      response:
        "`\\d` representa cualquier dígito `[0-9]`. `\\w` representa cualquier carácter alfanumérico más guion bajo `[a-zA-Z0-9_]`. `\\s` representa cualquier espacio en blanco (espacio, tabulador, salto de línea). Sus versiones en mayúscula (`\\D`, `\\W`, `\\S`) son sus negaciones exactas.",
      level: "basico"
    },
    // === MEDIO ===
    {
      title: "¿Qué significan los flags `g`, `i`, `m`, `s`, `u` e `y` en JavaScript?",
      response:
        "`g` (global: busca todas las coincidencias), `i` (case-insensitive), `m` (multilínea: `^` y `$` aplican por línea), `s` (dotAll: el punto `.` incluye saltos de línea), `u` (unicode completo), e `y` (sticky: busca exactamente en `lastIndex`).",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre grupos de captura `(...)` y no capturantes `(?:...)`?",
      response:
        "`(abc)` guarda la coincidencia en la memoria de grupos para ser referenciada posteriormente (`$1` o en el array retornado). `(?:abc)` aplica cuantificadores o agrupaciones lógicas sin consumir memoria ni generar entradas de captura.",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre coincidencia codiciosa (Greedy) y perezosa (Lazy)?",
      response:
        "Por defecto, los cuantificadores son codiciosos (Greedy): consumen la mayor cantidad posible de texto (`<.*>` en `<div><span>` toma todo hasta el último `>`). Añadir un `?` los vuelve perezosos (Lazy: `<.*?>`), deteniéndose en la primera coincidencia.",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre `RegExp.test()`, `String.match()` y `String.matchAll()`?",
      response:
        "`test()` retorna un booleano rápido sin extraer datos. `match()` retorna un array de coincidencias o null. `matchAll()` retorna un iterador de objetos detallados con grupos de captura para expresiones con flag `/g`.",
      level: "medio"
    },
    {
      title: "¿Cómo validar un formato de correo electrónico estándar con RegEx?",
      response:
        "`/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/`. Valida el identificador de usuario, el signo `@`, el dominio y un TLD de al menos 2 letras alfabéticas.",
      level: "medio"
    },
    // === AVANZADO ===
    {
      title: "¿Qué son los Lookaheads `(?=...)` y `(?!...)`?",
      response:
        "Son aserciones de longitud cero hacia adelante. **Positive Lookahead `(?=...)`**: asegura que el patrón siguiente coincida sin consumirlo (ej. `\\d+(?=px)` extrae el número antes de 'px'). **Negative Lookahead `(?!...)`**: asegura que el patrón siguiente NO coincida.",
      level: "avanzado"
    },
    {
      title: "¿Qué son los Lookbehinds `(?<=...)` y `(?<!...)`?",
      response:
        "Son aserciones de longitud cero hacia atrás. **Positive Lookbehind `(?<=...)`**: verifica que lo que precede coincida (ej. `(?<=\\$)\\d+` extrae el valor monetario tras un '$'). **Negative Lookbehind `(?<!...)`**: verifica que lo que precede NO coincida.",
      level: "avanzado"
    },
    {
      title: "¿Qué son los Named Capturing Groups `(?<name>...)`?",
      response:
        "Permiten asignar un nombre identificador a un grupo de captura. Se accede a ellos mediante `result.groups.name` en lugar de índices numéricos, mejorando la legibilidad del código. Ejemplo: `/(?<year>\\d{4})-(?<month>\\d{2})/`.",
      level: "avanzado"
    },
    {
      title: "¿Qué es el flag `v` (Unicode Sets) introducido en ECMAScript 2024?",
      response:
        "Extiende el flag `u` permitiendo operaciones de conjuntos con propiedades Unicode (unión, intersección `&&`, diferencia `--`) y coincidencia de secuencias de grafemas como emojis compuestos (`[\\p{RGI_Emoji}]`).",
      level: "avanzado"
    },
    {
      title: "¿Cómo funciona el estado interno mutable `lastIndex` en RegEx globales?",
      response:
        "Cuando una RegEx tiene el flag `/g` o `/y`, el objeto `RegExp` retiene el índice de la última coincidencia en `regex.lastIndex`. Invocar `regex.test(str)` sucesivamente avanza en la cadena, lo cual puede provocar bugs sutiles si se reutiliza la misma instancia en bucles.",
      level: "avanzado"
    },
    // === EXPERTO ===
    {
      title: "¿Qué es el Retroceso Catastrófico (Catastrophic Backtracking) y cómo causa ataques ReDoS?",
      response:
        "Ocurre cuando una expresión regular contiene cuantificadores anidados ambiguos (ej. `(a+)+$`). Ante una entrada que casi coincide pero falla al final, el motor prueba exponencialmente todas las combinaciones posibles (O(2^n)), bloqueando el hilo de ejecución al 100% de CPU (Regular Expression Denial of Service).",
      level: "experto"
    },
    {
      title: "¿Cómo prevenir y mitigar vulnerabilidades ReDoS en el Frontend?",
      response:
        "1) Eliminar cuantificadores superpuestos, 2) Usar analizadores estáticos como `eslint-plugin-regexp`, 3) Validar longitudes máximas de input antes de evaluar la regex (`input.length < 255`), y 4) Utilizar motores lineales garantizados (como Google RE2 o Web Workers aislados con timeout).",
      level: "experto"
    },
    {
      title: "¿Cómo optimizar el compilador y motor de RegEx en aplicaciones de procesamiento de texto masivo?",
      response:
        "Reutilizar instancias de `RegExp` precompiladas fuera de funciones de renderizado, evitar capturas innecesarias usando grupos no capturantes `(?:...)`, anclar las búsquedas siempre que sea posible (`^`), y estructurar las alternativas `(A|B)` ordenando primero las opciones de mayor probabilidad.",
      level: "experto"
    }
  ]
};

export default questionsRegularExpresions;
