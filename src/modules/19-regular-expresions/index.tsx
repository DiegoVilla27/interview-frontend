import { ISection } from "../../types";

export const questionsRegularExpresions: ISection = {
  id: "regular-expresions",
  title: "Expresiones Regulares",
  collapse: "collapseRegularExpresions",
  icon: "regular-expresions",
  category: "javascript-typescript",
  description:
    "Patrones sintácticos, cuantificadores, grupos de captura, aserciones lookaround, flags modernos (u, v) y mitigación de ReDoS.",
  questions: [
    {
      id: "regex-01",
      title: "\u00bfQu\u00e9 es una Expresi\u00f3n Regular (RegEx)?",
      level: "basico",
      tags: ["RegEx", "Pattern-Matching", "NFA", "Automaton", "Parsing"],
      response: "Una Expresi\u00f3n Regular (RegEx o RegExp) es una secuencia formal de caracteres que define un patr\u00f3n de b\u00fasqueda abstracto para la coincidencia, validaci\u00f3n, extracci\u00f3n y manipulaci\u00f3n de texto en cadenas de caracteres. Se fundamenta en la teor\u00eda de aut\u00f3matas y lenguajes formales (espec\u00edficamente en aut\u00f3matas finitos no deterministas, NFA, en motores como V8).\n\nEn el desarrollo frontend moderno, las expresiones regulares son indispensables para validar entradas en formularios (emails, tel\u00e9fonos, c\u00f3digos postales), sanitizar contenido contra ataques XSS, tokenizar c\u00f3digo en editores de texto, y extraer metadatos de URLs y cadenas JSON. En JavaScript, el objeto nativo `RegExp` est\u00e1 integrado directamente en los m\u00e9todos de cadena (`match`, `replace`, `split`, `search`, `matchAll`) y proporciona sus propios m\u00e9todos (`test`, `exec`).",
      codeExample: {
        language: "typescript",
        code: "// Validaci\u00f3n de formato de identificador (slug URL):\nconst slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;\n\nconsole.log(slugRegex.test(\"react-19-guia\")); // \u2705 true\nconsole.log(slugRegex.test(\"React--Invalido!\")); // \u274c false\n\n// Extracci\u00f3n de datos con grupos:\nconst versionRegex = /^v?(\\d+)\\.(\\d+)\\.(\\d+)$/;\nconst match = \"v19.2.1\".match(versionRegex);\n\nif (match) {\n  const [, major, minor, patch] = match;\n  console.log(`Versi\u00f3n: Major ${major}, Minor ${minor}, Patch ${patch}`);\n}"
      },
      visualDiagram: {
        id: "diag-regex-01",
        title: "Arquitectura y Motor de Coincidencia de Expresiones Regulares",
        caption: "El motor de aut\u00f3matas (NFA) analiza la cadena de entrada contra el patr\u00f3n para resolver coincidencias, \u00edndices y grupos.",
        diagramType: "regex-engine-nfa-dfa"
      },
      interviewTips: {
        whatInterviewersWant: "Entender si concibes las expresiones regulares como patrones de aut\u00f3matas formales con implicaciones de rendimiento y no solo como 'atajos con caracteres raros'.",
        commonPitfalls: ["Usar expresiones regulares complejas para tareas triviales que se resuelven m\u00e1s r\u00e1pido con `str.startsWith()` o `str.includes()`.", "Olvidar anclar las expresiones (`^` y `$`), permitiendo que entradas con caracteres inv\u00e1lidos alrededor pasen la validaci\u00f3n.", "Creer que las regex son universales entre todos los lenguajes: JavaScript tiene su propio sabor con soporte ES2024."],
        followUps: [
          "¿Qué diferencia hay entre un motor NFA y uno DFA?",
          "¿Cuándo no deberías usar regex (por ejemplo, para parsear HTML)?"
        ]
      },
      quiz: {
        question: "\u00bfEn qu\u00e9 tipo de modelo computacional se basan principalmente los motores de RegEx de navegadores como V8?",
        options: ["Aut\u00f3matas Finitos No Deterministas (NFA) con retroceso (backtracking).", "\u00c1rboles Binarios de B\u00fasqueda AVL exclusivamente.", "Redes Neuronales de Convoluci\u00f3n en WebAssembly.", "Pilas LIFO sin capacidad de retroceso condicional."],
        correctIndex: 0,
        explanation: "La mayor\u00eda de los motores de RegEx en lenguajes modernos (incluido JavaScript V8) implementan variantes de NFA con retroceso (backtracking), lo que permite soportar grupos de captura y aserciones complejas."
      }
    },
    {
      id: "regex-02",
      title: "\u00bfC\u00f3mo se crea una RegEx en JavaScript?",
      level: "basico",
      tags: ["RegExp", "Literal-Syntax", "Constructor", "Runtime-Compilation", "Escaping"],
      response: "En JavaScript existen dos formas fundamentales de instanciar un objeto `RegExp`:\n\n1. **Notaci\u00f3n Literal (`/patr\u00f3n/flags`)**: Se delimita entre barras diagonales. Se compila **una sola vez en tiempo de parseo/carga del script**. Es la opci\u00f3n recomendada cuando el patr\u00f3n es est\u00e1tico o constante, ya que maximiza el rendimiento y no requiere escapar dobles barras invertidas.\n\n2. **Constructor (`new RegExp(patr\u00f3n, flags)`)**: Recibe cadenas de texto como argumentos y compila el patr\u00f3n **din\u00e1micamente en tiempo de ejecuci\u00f3n**. Es indispensable cuando el patr\u00f3n depende de variables din\u00e1micas o entradas del usuario. Requiere doble escape (`\\\\`) para secuencias especiales como d\u00edgitos (`\"\\\\d+\"` en lugar de `/\\d+/`) y debe sanitizarse contra inyecciones de regex mediante funciones de escape.",
      codeExample: {
        language: "typescript",
        code: "// 1. Literal: Compilada en tiempo de parseo (Est\u00e1tica)\nconst STATIC_ZIP_REGEX = /^\\d{5}$/;\n\n// 2. Constructor: Construcci\u00f3n din\u00e1mica en tiempo de ejecuci\u00f3n\nfunction highlightSearchTerm(text: string, term: string): string {\n  // Funci\u00f3n defensiva para escapar caracteres especiales de regex:\n  const escapedTerm = term.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\");\n  \n  // Instanciaci\u00f3n din\u00e1mica con flag 'gi':\n  const dynamicRegex = new RegExp(`(${escapedTerm})`, \"gi\");\n  \n  return text.replace(dynamicRegex, \"<mark>$1</mark>\");\n}\n\nconst html = highlightSearchTerm(\"TypeScript y React son geniales\", \"react\");\nconsole.log(html); // \"TypeScript y <mark>React</mark> son geniales\" "
      },
      visualDiagram: {
        id: "diag-regex-02",
        title: "Notaci\u00f3n Literal vs Constructor Din\u00e1mico new RegExp",
        caption: "La notaci\u00f3n literal se compila en tiempo de parseo para m\u00e1ximo rendimiento; el constructor compila en runtime para variables din\u00e1micas.",
        diagramType: "regex-literal-vs-constructor"
      },
      interviewTips: {
        whatInterviewersWant: "Que sepas cu\u00e1ndo utilizar cada sintaxis, la regla de doble escape (`\\\\d`) en cadenas, y la necesidad cr\u00edtica de escapar caracteres especiales cuando creas regex con input de usuario.",
        commonPitfalls: ["No escapar las barras invertidas en el constructor (`new RegExp('\\d')` compila err\u00f3neamente como `/d/`).", "Recrear una regex literal dentro de un bucle caliente o funci\u00f3n de render de React provocando recolecci\u00f3n de basura innecesaria.", "Inyectar entradas de usuario directamente en `new RegExp(userInput)` sin sanitizar, exponiendo la app a ataques ReDoS o excepciones."],
        followUps: [
          "¿Cuándo es necesario usar el constructor RegExp?",
          "¿Cómo escaparías la entrada del usuario antes de usarla en un RegExp?"
        ]
      },
      quiz: {
        question: "\u00bfPor qu\u00e9 se debe escribir 'new RegExp(\"\\\\d+\")' con dos barras invertidas en lugar de una sola?",
        options: ["Porque la primera barra escapa la segunda dentro del string de JavaScript antes de que el motor de RegEx reciba la expresi\u00f3n.", "Porque TypeScript exige dos barras para diferenciar enteros de flotantes.", "Porque la primera barra indica el inicio del token y la segunda su fin.", "Es un requisito exclusivo de Node.js que no aplica en navegadores."],
        correctIndex: 0,
        explanation: "En un literal de string de JavaScript, '\\' es un car\u00e1cter de escape. Para que el motor de RegExp reciba el string literal '\\d', la barra invertida debe escaparse a s\u00ed misma como '\\\\'."
      }
    },
    {
      id: "regex-03",
      title: "\u00bfQu\u00e9 significan las anclas ^ y $?",
      level: "basico",
      tags: ["Anchors", "Zero-Width", "Line-Boundary", "Word-Boundary", "Multiline"],
      response: "Las anclas son **aserciones de posici\u00f3n de longitud cero** (no consumen caracteres del texto): no coinciden con caracteres concretos, sino con **l\u00edmites o fronteras espaciales**:\n\n- **`^` (Circunflejo / Caret)**: Coincide con el inicio absoluto del texto (o el inicio de cada l\u00ednea si se activa el flag `/m` multil\u00ednea).\n- **`$` (Signo de D\u00f3lar)**: Coincide con el final absoluto del texto (o el final de cada l\u00ednea con el flag `/m`).\n- **`\\b` (Word Boundary)**: Coincide con el l\u00edmite entre un car\u00e1cter alfanum\u00e9rico (`\\w`) y un car\u00e1cter que no lo es (`\\W` o inicio/fin de cadena).\n\n**Importancia en validaci\u00f3n**: Sin `^` y `$`, el patr\u00f3n `/admin/` devolver\u00e1 `true` para cadenas como `\"bad_admin_hacker\"`. Con `/^admin$/`, solo coincide exactamente con la palabra `\"admin\"` de inicio a fin.",
      codeExample: {
        language: "typescript",
        code: "const input = \"admin123\";\n\n// Error com\u00fan: Sin anclas (coincidencia parcial peligrosa)\nconst unanchored = /admin/;\nconsole.log(unanchored.test(\"bad_admin_override\")); // \u26a0\ufe0f true (Falso positivo!)\n\n// Validaci\u00f3n estricta con anclas de inicio y fin:\nconst strictUser = /^[a-zA-Z0-9_]{4,12}$/;\nconsole.log(strictUser.test(\"usr_01\")); // \u2705 true\nconsole.log(strictUser.test(\"usr_01 extra\")); // \u274c false\n\n// L\u00edmite de palabra \\b:\nconst wordBoundary = /\\bcat\\b/i;\nconsole.log(wordBoundary.test(\"The cat sleeps\")); // \u2705 true\nconsole.log(wordBoundary.test(\"Scatter the pieces\")); // \u274c false (\"cat\" es subcadena de \"Scatter\")"
      },
      visualDiagram: {
        id: "diag-regex-03",
        title: "Aserciones de L\u00edmites y Anclas de Longitud Cero (^, $, \\b)",
        caption: "Las anclas delimitan el inicio (^), final ($) y fronteras de palabra (\\b) sin consumir caracteres del texto.",
        diagramType: "regex-anchors-boundary"
      },
      interviewTips: {
        whatInterviewersWant: "Validar si anclas sistem\u00e1ticamente las expresiones en formularios y comprobaciones de seguridad para evitar falsos positivos por coincidencia de subcadenas.",
        commonPitfalls: ["Olvidar `^` o `$`, permitiendo que cadenas maliciosas pasen la validaci\u00f3n si contienen el patr\u00f3n en medio.", "Confundir el circunflejo `^` como ancla de inicio con el `[^abc]` dentro de corchetes, donde act\u00faa como negaci\u00f3n de conjunto.", "Desconocer el impacto del flag `/m` (multil\u00ednea), que hace que `^` y `$` coincidan tras cada `\\n`."],
        followUps: [
          "¿Cómo cambia el comportamiento de ^ y $ con el flag m?",
          "¿Qué hace \\b?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 eval\u00faa la expresi\u00f3n '/^token$/i.test(\"token\\n\")' sin el flag multil\u00ednea '/m'?",
        options: ["false, porque el salto de l\u00ednea '\\n' est\u00e1 al final y no coincide con '$'.", "true, porque los saltos de l\u00ednea se ignoran siempre por defecto.", "true, porque contiene la palabra token de forma aislada.", "Lanza un error de sintaxis en tiempo de ejecuci\u00f3n."],
        correctIndex: 0,
        explanation: "Sin el flag multil\u00ednea '/m', '$' solo coincide con el final absoluto del string. Al contener un salto de l\u00ednea '\\n' al final, la comprobaci\u00f3n estricta resulta en false."
      }
    },
    {
      id: "regex-04",
      title: "\u00bfQu\u00e9 hacen los cuantificadores *, + y ?",
      level: "basico",
      tags: ["Quantifiers", "Cardinality", "Repetition", "Greedy", "Optionality"],
      response: "Los cuantificadores determinan la **cardinalidad o frecuencia de repetici\u00f3n** del elemento precedente (un car\u00e1cter literal, una clase de caracteres o un grupo):\n\n1. **`*` (Asterisco)**: Coincide con **cero o m\u00e1s** repeticiones (`{0,}`). El elemento es enteramente opcional y puede repetirse indefinidamente.\n2. **`+` (Signo M\u00e1s)**: Coincide con **una o m\u00e1s** repeticiones (`{1,}`). Exige que el elemento aparezca al menos una vez.\n3. **`?` (Signo de Interrogaci\u00f3n)**: Coincide con **cero o una** repetici\u00f3n (`{0,1}`). Marca el elemento como estrictamente opcional.\n4. **`{n,m}` (Rango Exacto)**: Coincide entre `n` y `m` veces inclusive (ej. `\\d{2,4}` coincide con 2, 3 o 4 d\u00edgitos).\n\nPor defecto, todos estos cuantificadores son **codiciosos (greedy)**: consumen la mayor cantidad posible de texto compatible.",
      codeExample: {
        language: "typescript",
        code: "// Validaci\u00f3n de n\u00fameros decimales con signo opcional:\n// - ^[+-]?       -> Signo + o - opcional (0 o 1 vez)\n// - \\d+          -> Uno o m\u00e1s d\u00edgitos enteros (m\u00ednimo 1)\n// - (?:\\.\\d+)?   -> Punto seguido de d\u00edgitos decimales opcional\nconst decimalNumberRegex = /^[+-]?\\d+(?:\\.\\d+)?$/;\n\nconsole.log(decimalNumberRegex.test(\"42\"));      // \u2705 true\nconsole.log(decimalNumberRegex.test(\"+3.14159\")); // \u2705 true\nconsole.log(decimalNumberRegex.test(\"-0.5\"));     // \u2705 true\nconsole.log(decimalNumberRegex.test(\".5\"));       // \u274c false (exige d\u00edgito antes del punto)\nconsole.log(decimalNumberRegex.test(\"abc\"));      // \u274c false"
      },
      visualDiagram: {
        id: "diag-regex-04",
        title: "Cardinalidad y Rangos de Cuantificadores (*, +, ?, {n,m})",
        caption: "Esquema de repeticiones desde 0 hasta infinito, opcionalidad de elementos y rangos finitos de coincidencia.",
        diagramType: "regex-quantifiers-cardinality"
      },
      interviewTips: {
        whatInterviewersWant: "Comprensi\u00f3n precisa de la diferencia entre cero repeticiones permitidas (`*` y `?`) y la obligatoriedad de al menos una repetici\u00f3n (`+`), adem\u00e1s del uso de rangos `{min,max}`.",
        commonPitfalls: ["Usar `*` en lugar de `+` en validaciones donde un campo vac\u00edo ser\u00eda inv\u00e1lido (`/\\d*/` valida cadenas vac\u00edas).", "No escapar el signo `?` cuando se busca el car\u00e1cter de interrogaci\u00f3n literal (`\\?`).", "Anidar cuantificadores `(a+)+`, lo que expone la aplicaci\u00f3n a retroceso catastr\u00f3fico (ReDoS)."],
        followUps: [
          "¿Qué hace {n,m}?",
          "¿Qué diferencia hay entre * y + al validar un campo obligatorio?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de las siguientes cadenas NO coincide con el patr\u00f3n '/^go*l$/'?",
        options: ["\"g\"", "\"gl\"", "\"gol\"", "\"goool\""],
        correctIndex: 0,
        explanation: "El patr\u00f3n exige una 'g' inicial, cero o m\u00e1s 'o' ('o*'), y una 'l' final. 'gl' tiene cero 'o' y es v\u00e1lida. 'g' carece de la 'l' obligatoria y por tanto no coincide."
      }
    },
    {
      id: "regex-05",
      title: "\u00bfQu\u00e9 representan las clases de caracteres abreviadas \\d, \\w y \\s?",
      level: "basico",
      tags: ["Character-Classes", "Shorthands", "Negation", "ASCII", "Alphanumeric"],
      response: "Las clases abreviadas (Character Class Shorthands) son secuencias predefinidas que representan conjuntos comunes de caracteres. Tienen una regla nemot\u00e9cnica universal: **la letra min\u00fascula representa el conjunto positivo y la letra may\u00fascula representa su negaci\u00f3n exacta**:\n\n1. **`\\d` (D\u00edgito)**: Equivale a `[0-9]`. Su inverso **`\\D`** equivale a `[^0-9]` (cualquier car\u00e1cter que no sea un n\u00famero).\n2. **`\\w` (Palabra / Word)**: Equivale a `[a-zA-Z0-9_]` (caracteres alfanum\u00e9ricos ASCII m\u00e1s el guion bajo). Su inverso **`\\W`** equivale a `[^a-zA-Z0-9_]` (s\u00edmbolos, espacios, signos de puntuaci\u00f3n).\n3. **`\\s` (Espacio / Whitespace)**: Coincide con espacios en blanco, tabuladores (`\\t`), retornos de carro (`\\r`) y saltos de l\u00ednea (`\\n`). Su inverso **`\\S`** coincide con cualquier car\u00e1cter que no sea espacio.\n4. **`.` (Punto / Wildcard)**: Coincide con cualquier car\u00e1cter individual excepto terminadores de l\u00ednea (a menos que se use el flag `/s`).",
      codeExample: {
        language: "typescript",
        code: "const input = \"Usuario:  _diego_27  [ID: #9901] \\n\";\n\n// 1. Extraer identificador con \\w+ (alfanum\u00e9rico y guion bajo)\nconst usernameMatch = input.match(/_\\w+_/);\nconsole.log(usernameMatch?.[0]); // \"_diego_27\"\n\n// 2. Extraer n\u00fameros con \\d+\nconst idMatch = input.match(/\\d+/);\nconsole.log(idMatch?.[0]); // \"9901\"\n\n// 3. Normalizar espacios m\u00faltiples con \\s+\nconst cleanString = input.replace(/\\s+/g, \" \").trim();\nconsole.log(cleanString); // \"Usuario: _diego_27 [ID: #9901]\" "
      },
      visualDiagram: {
        id: "diag-regex-05",
        title: "Clases de Caracteres Abreviadas y sus Negaciones (\\d, \\w, \\s)",
        caption: "Mapeo directo entre shorthands y conjuntos de caracteres POSIX/ASCII con sus variantes invertidas en may\u00fascula.",
        diagramType: "regex-character-classes-shorthand"
      },
      interviewTips: {
        whatInterviewersWant: "Saber si conoces qu\u00e9 caracteres espec\u00edficos componen cada abreviatura (en especial que `\\w` incluye `_` pero excluye tildes o caracteres especiales en JS sin flag unicode).",
        commonPitfalls: ["Creer que `\\w` valida nombres en espa\u00f1ol: rechaza caracteres como '\u00f1', '\u00e1', '\u00e9' a menos que se use `[\\p{Letter}]` con flag `/u`.", "Confundir `\\s` con un simple espacio de la barra espaciadora (incluye `\\t` y `\\n`).", "Olvidar que el punto `.` no incluye saltos de l\u00ednea por defecto sin el flag dotAll `/s`."],
        followUps: [
          "¿Qué diferencia hay entre \\w y [a-zA-Z0-9_] con caracteres Unicode?",
          "¿Qué hace \\p{L} con el flag u?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de los siguientes caracteres es aceptado por la clase '\\w' en JavaScript por defecto?",
        options: ["El guion bajo '_'", "El guion medio '-'", "El signo de arroba '@'", "La letra '\u00f1'"],
        correctIndex: 0,
        explanation: "En JavaScript, '\\w' equivale exactamente a '[a-zA-Z0-9_]'. Incluye el guion bajo, pero excluye guiones medios, s\u00edmbolos y caracteres no ASCII como la '\u00f1'."
      }
    },
    {
      id: "regex-06",
      title: "\u00bfQu\u00e9 significan los flags g, i, m, s, u e y en JavaScript?",
      level: "medio",
      tags: ["Flags", "Modifier", "dotAll", "Unicode", "Sticky", "Multiline"],
      response: "Los flags modifican el comportamiento global de b\u00fasqueda y coincidencia del motor de expresiones regulares en JavaScript:\n\n- **`g` (Global)**: Busca todas las coincidencias a lo largo de toda la cadena en lugar de detenerse tras la primera.\n- **`i` (Ignore Case)**: Insensible a may\u00fasculas y min\u00fasculas (`/a/i` coincide con `'a'` y `'A'`).\n- **`m` (Multiline)**: Hace que `^` y `$` coincidan con el inicio y final de **cada l\u00ednea individual** delimitada por `\\n`, en lugar de solo los extremos globales de la cadena.\n- **`s` (dotAll / Single Line)**: Permite que el punto comod\u00edn (`.`) coincida con cualquier car\u00e1cter **incluyendo** saltos de l\u00ednea `\\n`.\n- **`u` (Unicode)**: Habilita el manejo completo de puntos de c\u00f3digo Unicode UTF-16, reconociendo pares sustitutos (surrogate pairs) y propiedades `\\p{Category}`.\n- **`y` (Sticky)**: B\u00fasqueda anclada que solo coincide a partir de la posici\u00f3n exacta indicada por la propiedad mutable `regex.lastIndex`.",
      codeExample: {
        language: "typescript",
        code: "// 1. Flag multiline (m) para parsear archivos de configuraci\u00f3n o logs:\nconst logText = `[INFO] Server started\n[ERROR] Database timeout\n[INFO] Request handled`;\n\nconst errors = logText.match(/^\\[ERROR\\]\\s+(.*)$/gm);\nconsole.log(errors); // [\"[ERROR] Database timeout\"]\n\n// 2. Flag dotAll (s) para extraer bloques multil\u00ednea:\nconst html = `<article>\n  <h1>T\u00edtulo</h1>\n  <p>P\u00e1rrafo</p>\n</article>`;\n\nconst articleContent = html.match(/<article>(.*?)<\\/article>/s);\nconsole.log(articleContent?.[1].trim());\n\n// 3. Flag unicode (u) para emojis y caracteres especiales:\nconsole.log(/^.$/.test(\"\ud834\udf06\")); // \u274c false (mide 2 unidades de c\u00f3digo UTF-16)\nconsole.log(/^.$/u.test(\"\ud834\udf06\")); // \u2705 true (reconoce el punto de c\u00f3digo completo)"
      },
      visualDiagram: {
        id: "diag-regex-06",
        title: "Matriz de Flags Modificadores en JavaScript (g, i, m, s, u, y)",
        caption: "Comportamientos clave alterados por los 6 modificadores del motor RegExp de ECMAScript.",
        diagramType: "regex-flags-matrix"
      },
      interviewTips: {
        whatInterviewersWant: "Demostrar conocimiento profundo del motor: explicar con soltura casos de uso para `s` (dotAll), `m` (multiline) y las trampas del flag `y` (sticky) en compiladores y parsers.",
        commonPitfalls: ["Olvidar el flag `u` al procesar texto internacional o emojis, provocando que se dividan pares sustitutos UTF-16.", "Usar el flag `g` con `regex.test()` en bucles sin resetear `lastIndex`, causando resultados falsos alternados.", "Confundir el flag `m` (multil\u00ednea) con el flag `s` (dotAll)."],
        followUps: [
          "¿Qué hace el flag y (sticky)?",
          "¿Qué hace el flag d (hasIndices)?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 flag de JavaScript permite que el punto '.' coincida tambi\u00e9n con caracteres de salto de l\u00ednea '\\n'?",
        options: ["Flag 's' (dotAll)", "Flag 'm' (multiline)", "Flag 'u' (unicode)", "Flag 'g' (global)"],
        correctIndex: 0,
        explanation: "El flag 's' (dotAll, introducido en ES2018) hace que el car\u00e1cter punto '.' coincida con absolutamente cualquier car\u00e1cter, incluyendo saltos de l\u00ednea '\\n' y retornos de carro '\\r'."
      }
    },
    {
      id: "regex-07",
      title: "\u00bfQu\u00e9 diferencia hay entre grupos de captura (...) y no capturantes (?:...)?",
      level: "medio",
      tags: ["Capturing-Groups", "Non-Capturing", "Memory-Allocation", "Backreferences", "Performance"],
      response: "La diferencia radica en la **reserva de memoria y la extracci\u00f3n de datos**:\n\n1. **Grupo de Captura `(...)`**:\n   - Agrupa sub-expresiones para aplicar cuantificadores.\n   - **Guarda el texto coincidente en memoria**, asign\u00e1ndole un \u00edndice num\u00e9rico (`$1`, `$2`, etc.).\n   - Devuelve las coincidencias en el array de retorno de `.match()` o `.exec()`.\n   - Permite retro-referencias (backreferences) como `\\1` para buscar repeticiones del mismo texto.\n   - **Incurre en un coste de CPU y asignaci\u00f3n de memoria** para almacenar cada fragmento.\n\n2. **Grupo No Capturante `(?:...)`**:\n   - Permite aplicar agrupaciones l\u00f3gicas y cuantificadores (`(?:https?|ftp)`) pero **sin guardar el resultado en memoria**.\n   - No incrementa el contador de grupos (`$1`, `$2`).\n   - **Es una optimizaci\u00f3n de rendimiento cr\u00edtica** en aplicaciones de alto rendimiento y parsers l\u00e9xicos.",
      codeExample: {
        language: "typescript",
        code: "const url = \"https://cabuweb.com/blog\";\n\n// Con grupo de captura tradicional (reserva memoria para $1 y $2):\nconst capturing = /(https?):\\/\\/([^/]+)/;\nconst matchCap = url.match(capturing);\nconsole.log(matchCap?.[1]); // \"https\" (Grupo 1)\nconsole.log(matchCap?.[2]); // \"cabuweb.com\" (Grupo 2)\n\n// Con grupo no capturante (?:...) para optimizar:\n// Solo queremos capturar el host, pero necesitamos agrupar el protocolo:\nconst optimized = /(?:https?|ftp):\\/\\/([^/]+)/;\nconst matchOpt = url.match(optimized);\nconsole.log(matchOpt?.[1]); // \"cabuweb.com\" (El protocolo NO consumi\u00f3 \u00edndice de grupo!)"
      },
      visualDiagram: {
        id: "diag-regex-07",
        title: "Grupos de Captura vs Grupos No Capturantes (?:...)",
        caption: "Los grupos de captura reservan slots de memoria indexables ($1, $2); los grupos no capturantes reducen overhead en memoria.",
        diagramType: "regex-capturing-vs-non-capturing"
      },
      interviewTips: {
        whatInterviewersWant: "Verificar si piensas en la optimizaci\u00f3n del Garbage Collector y la memoria. Usar sistem\u00e1ticamente `(?:...)` cuando no se necesita extraer el dato demuestra nivel Senior.",
        commonPitfalls: ["Llenar expresiones complejas de par\u00e9ntesis `(...)` innecesarios, creando decenas de grupos de captura que nadie utiliza.", "Desordenar los \u00edndices de grupos capturantes `$1`, `$2` al a\u00f1adir nuevos par\u00e9ntesis de agrupaci\u00f3n sin `?:`.", "Olvidar que `(?:...)` sigue consumiendo caracteres del texto (a diferencia de los lookaheads que son de longitud cero)."],
        followUps: [
          "¿Por qué los grupos no capturantes mejoran el rendimiento?",
          "¿Cómo se usan las backreferences (\\1)?"
        ]
      },
      quiz: {
        question: "En el patr\u00f3n '/(?:https|http):\\/\\/(\\w+)/.exec(\"https://cabuweb\")', \u00bfqu\u00e9 valor contiene el \u00edndice [1] del resultado?",
        options: ["\"cabuweb\"", "\"https\"", "\"https://cabuweb\"", "undefined"],
        correctIndex: 0,
        explanation: "Como '(?:https|http)' es un grupo no capturante, no ocupa una ranura en el array de resultados. El primer grupo de captura real '[1]' corresponde a '(\\w+)', capturando 'cabuweb'."
      }
    },
    {
      id: "regex-08",
      title: "\u00bfQu\u00e9 diferencia hay entre coincidencia codiciosa (Greedy) y perezosa (Lazy)?",
      level: "medio",
      tags: ["Greedy", "Lazy", "Reluctant", "Quantifiers", "Parsing"],
      response: "La diferencia radica en la **estrategia de consumo de caracteres** de los cuantificadores (`*`, `+`, `?`, `{}`):\n\n1. **Coincidencia Codiciosa (Greedy - por defecto)**:\n   - El motor intenta coincidir con **la mayor cantidad posible de caracteres** antes de evaluar el resto de la expresi\u00f3n.\n   - Si la expresi\u00f3n falla m\u00e1s adelante, el motor retrocede car\u00e1cter por car\u00e1cter (backtracking) hasta encontrar una combinaci\u00f3n v\u00e1lida.\n   - Ejemplo: `<.*>` sobre `\"<div><span>Texto</span></div>\"` coincide desde el primer `<` hasta el **\u00faltimo** `>`, consumiendo todo el bloque.\n\n2. **Coincidencia Perezosa (Lazy / Reluctant)**:\n   - Se activa a\u00f1adiendo un signo de interrogaci\u00f3n `?` tras el cuantificador (`*?`, `+?`, `??`, `{n,m}?`).\n   - El motor intenta coincidir con **la menor cantidad posible de caracteres**, deteni\u00e9ndose en el primer punto de \u00e9xito.\n   - Ejemplo: `<.*?>` sobre el mismo string solo coincide con `\"<div>\"`.",
      codeExample: {
        language: "typescript",
        code: "const html = \"<div>Primero</div><div>Segundo</div>\";\n\n// 1. Codicioso (Greedy: <.*>)\nconst greedyMatch = html.match(/<.*>/);\nconsole.log(greedyMatch?.[0]);\n// Imprime: \"<div>Primero</div><div>Segundo</div>\" (Toma todo hasta el \u00daLTIMO '>')\n\n// 2. Perezoso (Lazy: <.*?>)\nconst lazyMatches = html.match(/<.*?>/g);\nconsole.log(lazyMatches);\n// Imprime: [\"<div>\", \"</div>\", \"<div>\", \"</div>\"] (Se detiene en cada '>' individual)"
      },
      visualDiagram: {
        id: "diag-regex-08",
        title: "Estrategias de Consumo: Codicioso (Greedy) vs Perezoso (Lazy)",
        caption: "Greedy maximiza el consumo hasta el \u00faltimo delimitador; Lazy se detiene en la primera oportunidad minimizando el rango.",
        diagramType: "regex-greedy-vs-lazy"
      },
      interviewTips: {
        whatInterviewersWant: "Comprender por qu\u00e9 un selector greedy puede causar bugs graves al parsear texto delimitado (como HTML, Markdown o cadenas entre comillas) y c\u00f3mo solucionarlo con cuantificadores lazy o clases negadas `[^>]*`.",
        commonPitfalls: ["Usar `.*` para parsear c\u00f3digo HTML, capturando accidentalmente m\u00faltiples etiquetas consecutivas en una sola coincidencia.", "No saber que una clase negada como `/[^<]+/` suele ser m\u00e1s eficiente que un cuantificador lazy `.*?` porque evita el backtracking continuo.", "Confundir el signo `?` como cuantificador opcional con el `?` como modificador de pereza."],
        followUps: [
          "¿Cómo extraerías el contenido entre comillas con un cuantificador lazy?",
          "¿Qué es un cuantificador posesivo y por qué JavaScript no lo soporta?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 coincide '\"foo\" and \"bar\"'.match(/\\\".*?\\\"/)[0]?",
        options: ["\"\"foo\"\"", "\"\"foo\" and \"bar\"\"", "\"foo\"", "null"],
        correctIndex: 0,
        explanation: "Al usar el cuantificador perezoso '.*?', el motor se detiene en las primeras comillas de cierre que encuentra, coincidiendo \u00fanicamente con '\"foo\"'."
      }
    },
    {
      id: "regex-09",
      title: "\u00bfQu\u00e9 diferencia hay entre RegExp.test(), String.match() y String.matchAll()?",
      level: "medio",
      tags: ["RegExp-API", "test", "match", "matchAll", "Iterators", "ES2020"],
      response: "Cada m\u00e9todo est\u00e1 optimizado para un caso de uso t\u00e9cnico espec\u00edfico en JavaScript:\n\n1. **`RegExp.prototype.test(str)`**:\n   - Retorna un booleano (`true`/`false`).\n   - Es el m\u00e9todo **m\u00e1s r\u00e1pido y eficiente en memoria** porque no crea arrays de coincidencias ni captura subgrupos. Ideal para validaciones de formularios.\n\n2. **`String.prototype.match(regex)`**:\n   - **Sin flag `/g`**: Retorna el primer match completo con sus grupos de captura, \u00edndice y propiedades auxiliares (`RegExpMatchArray`).\n   - **Con flag `/g`**: Retorna un array simple con todas las coincidencias encontradas, pero **pierde todos los grupos de captura** y los \u00edndices de posici\u00f3n.\n\n3. **`String.prototype.matchAll(regex)` (ES2020)**:\n   - Requiere obligatoriamente el flag `/g`.\n   - Retorna un **iterador lazy** (`Iterator<RegExpMatchArray>`) donde cada elemento contiene el objeto de coincidencia completo con todos sus grupos de captura e \u00edndices.",
      codeExample: {
        language: "typescript",
        code: "const text = \"Item: A12, Item: B34, Item: C56\";\nconst itemRegex = /Item:\\s+([A-Z])(\\d+)/g;\n\n// 1. test(): Solo presencia booleana (Ultra r\u00e1pido)\nconsole.log(/Item:/.test(text)); // true\n\n// 2. match() con /g: Pierde los grupos de captura:\nconsole.log(text.match(itemRegex));\n// [\"Item: A12\", \"Item: B34\", \"Item: C56\"] (Sin acceso a letras ni n\u00fameros aislados)\n\n// 3. matchAll() con /g: Conserva TODOS los grupos de captura por cada ocurrencia:\nfor (const match of text.matchAll(itemRegex)) {\n  const [fullMatch, letter, number] = match;\n  console.log(`Encontrado: Letra ${letter}, N\u00famero ${number} en \u00edndice ${match.index}`);\n}"
      },
      visualDiagram: {
        id: "diag-regex-09",
        title: "Comparativa de APIs: test() vs match() vs matchAll()",
        caption: "test() para validaci\u00f3n booleana O(1), match() para arrays planos y matchAll() para iteradores de grupos completos.",
        diagramType: "regex-matching-methods-api"
      },
      interviewTips: {
        whatInterviewersWant: "Saber si conoces la limitaci\u00f3n hist\u00f3rica de `match()` con `/g` (que pierde los subgrupos) y c\u00f3mo `matchAll()` introducido en ES2020 resolvi\u00f3 este problema de forma limpia con iteradores.",
        commonPitfalls: ["Usar `match()` cuando solo se necesita validar existencia booleana (genera basura en memoria innecesariamente en vez de usar `test()`).", "Invocar `matchAll()` sin el flag `/g`, lo que lanza un error `TypeError` en runtime.", "No saber que `matchAll()` devuelve un iterador y no un array directo (debe recorrerse con `for...of` o convertirse con `Array.from()`)."],
        followUps: [
          "¿Qué devuelve match con el flag g frente a sin él?",
          "¿Por qué matchAll exige el flag g?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 ocurre si se ejecuta 'str.matchAll(/test/)' con una expresi\u00f3n regular que NO tiene el flag '/g'?",
        options: ["Lanza una excepci\u00f3n TypeError en tiempo de ejecuci\u00f3n.", "Retorna un array con una \u00fanica coincidencia.", "A\u00f1ade autom\u00e1ticamente el flag '/g' en segundo plano.", "Retorna null."],
        correctIndex: 0,
        explanation: "La especificaci\u00f3n ECMAScript exige estrictamente que la expresi\u00f3n regular pasada a matchAll() contenga el flag '/g'; de lo contrario, lanza un TypeError."
      }
    },
    {
      id: "regex-10",
      title: "\u00bfC\u00f3mo validar un formato de correo electr\u00f3nico est\u00e1ndar con RegEx?",
      level: "medio",
      tags: ["Email-Validation", "RFC-5322", "Production-Patterns", "Sanitization", "Forms"],
      response: "Validar un correo electr\u00f3nico al 100% de la especificaci\u00f3n t\u00e9cnica **RFC 5322** mediante una \u00fanica expresi\u00f3n regular es pr\u00e1cticamente imposible (requerir\u00eda un patr\u00f3n de m\u00e1s de 6,000 caracteres que soporta comentarios anidados, IPs y comillas).\n\nEn la ingenier\u00eda de software profesional, se aplica una **expresi\u00f3n regular pragm\u00e1tica** que valida la estructura real utilizada en la web:\n`/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/`\n\n**Regla de Oro en Arquitectura**:\nUna expresi\u00f3n regular en el cliente solo debe servir para detectar erratas obvias de escritura (falta de `@`, espacios accidentales, dominio incompleto). La **\u00fanica validaci\u00f3n real y definitiva** de un correo electr\u00f3nico es enviar un enlace de confirmaci\u00f3n o c\u00f3digo OTP al buz\u00f3n del usuario.",
      codeExample: {
        language: "typescript",
        code: "// Validador defensivo enterprise para formularios:\nfunction isValidEmail(email: string): boolean {\n  if (!email || email.length > 254) return false; // L\u00edmite RFC 5321\n\n  // Patr\u00f3n est\u00e1ndar de la especificaci\u00f3n HTML5:\n  const emailRegex =\n    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;\n\n  return emailRegex.test(email);\n}\n\nconsole.log(isValidEmail(\"diego@cabuweb.com\")); // \u2705 true\nconsole.log(isValidEmail(\"usuario+tag@sub.dominio.org\")); // \u2705 true\nconsole.log(isValidEmail(\"invalido@.com\")); // \u274c false\nconsole.log(isValidEmail(\"sin_arroba.com\")); // \u274c false"
      },
      visualDiagram: {
        id: "diag-regex-10",
        title: "Anatom\u00eda y Pipeline de Validaci\u00f3n de Correo Electr\u00f3nico",
        caption: "Desglose por secciones: parte local (usuario), separador @, dominio corporativo y TLD superior.",
        diagramType: "regex-email-validation-anatomy"
      },
      interviewTips: {
        whatInterviewersWant: "Esperan una respuesta madura: que expliques que una regex no puede garantizar que un email exista realmente en el servidor de correo, y que en producci\u00f3n se usa un patr\u00f3n est\u00e1ndar HTML5 complementado con confirmaci\u00f3n por token/OTP.",
        commonPitfalls: ["Rechazar caracteres perfectamente v\u00e1lidos en emails como el signo `+` (usado para alias) o puntos `.` en el usuario.", "Creer que si la regex da `true` el email existe f\u00edsicamente en el mundo real.", "Copiar expresiones gigantescas de Internet que causan retroceso catastr\u00f3fico ante inputs maliciosos."],
        followUps: [
          "¿Por qué no existe una regex perfecta para emails?",
          "¿Qué validación complementaria usarías (input type='email', verificación por correo)?"
        ]
      },
      quiz: {
        question: "\u00bfPor qu\u00e9 las mejores pr\u00e1cticas de la industria desaconsejan implementar la especificaci\u00f3n RFC 5322 completa en una RegEx?",
        options: ["Porque genera expresiones inmensas e incomprensibles propensas a vulnerabilidades ReDoS, cuando la \u00fanica validaci\u00f3n real es enviar un email con token.", "Porque los navegadores modernos bloquean regex de m\u00e1s de 50 caracteres.", "Porque el RFC 5322 fue derogado y reemplazado por JSON Schema.", "Porque solo funciona en entornos backend Node.js."],
        correctIndex: 0,
        explanation: "El est\u00e1ndar RFC 5322 permite estructuras te\u00f3ricas extremadamente complejas que casi ning\u00fan proveedor de correo moderno soporta; intentar cubrirlas con regex complejas degrada el rendimiento y expone a ReDoS."
      }
    },
    {
      id: "regex-11",
      title: "\u00bfQu\u00e9 son los Lookaheads (?=...) y (?!...)?",
      level: "avanzado",
      tags: ["Lookahead", "Positive-Lookahead", "Negative-Lookahead", "Zero-Width", "Password-Validation"],
      response: "Los Lookaheads son **aserciones de longitud cero hacia adelante (Zero-Width Lookahead Assertions)**. Permiten comprobar si el texto que sigue inmediatamente a la posici\u00f3n actual cumple una condici\u00f3n determinada **sin consumir caracteres ni incluirlos en el resultado coincidente**:\n\n1. **Positive Lookahead `(?=patr\u00f3n)`**:\n   - Exige que el `patr\u00f3n` coincida inmediatamente despu\u00e9s de la posici\u00f3n actual.\n   - Si coincide, el motor avanza en la coincidencia pero deja el cursor en el mismo lugar inicial.\n   - Ejemplo: `\\d+(?=px)` sobre `\"24px\"` extrae `\"24\"` (comprueba que le sigue 'px' pero no incluye 'px' en el match).\n\n2. **Negative Lookahead `(?!patr\u00f3n)`**:\n   - Exige que el `patr\u00f3n` **NO** coincida a continuaci\u00f3n.\n   - Ejemplo: `\\d+(?!px)` sobre `\"24em\"` coincide con `\"24\"`; sobre `\"24px\"` falla.\n\nSon fundamentales para validaciones multidimensionales simult\u00e1neas (como pol\u00edticas complejas de contrase\u00f1as) sin importar el orden de los caracteres.",
      codeExample: {
        language: "typescript",
        code: "// Validaci\u00f3n de contrase\u00f1a robusta con m\u00faltiples Positive Lookaheads independientes:\n// - (?=.*[a-z]) : Al menos una letra min\u00fascula\n// - (?=.*[A-Z]) : Al menos una letra may\u00fascula\n// - (?=.*\\d)     : Al menos un n\u00famero\n// - (?=.*[@$!%*?&]) : Al menos un car\u00e1cter especial\n// - .{8,}        : Longitud m\u00ednima de 8 caracteres\nconst strongPasswordRegex =\n  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;\n\nconsole.log(strongPasswordRegex.test(\"Password123!\")); // \u2705 true\nconsole.log(strongPasswordRegex.test(\"solo_minusculas\")); // \u274c false\n\n// Extracci\u00f3n limpia de unidades CSS:\nconst valueBeforeUnit = /\\d+(?=rem)/;\nconsole.log(\"font-size: 2rem\".match(valueBeforeUnit)?.[0]); // \"2\" "
      },
      visualDiagram: {
        id: "diag-regex-011",
        title: "Aserciones Hacia Adelante: Positive (?=) vs Negative (?!) Lookahead",
        caption: "Inspecci\u00f3n de caracteres adyacentes posteriores sin avanzar el cursor de coincidencia del motor.",
        diagramType: "regex-lookaheads-assertion"
      },
      interviewTips: {
        whatInterviewersWant: "Saber si dominas la propiedad de 'longitud cero' y c\u00f3mo encadenar m\u00faltiples lookaheads al inicio `^(?=...)(?=...)` para validar condiciones booleanas AND sin importar el orden.",
        commonPitfalls: ["Creer que el lookahead consume caracteres (lo que hace que los siguientes patrones fallen si buscan caracteres que cre\u00edan ya procesados).", "Olvidar el comod\u00edn `.*` dentro del lookahead al validar contrase\u00f1as (`(?=[A-Z])` solo mira el primer car\u00e1cter).", "Crear lookaheads excesivamente pesados que degraden el rendimiento de evaluaci\u00f3n."],
        followUps: [
          "¿Cómo validarías una contraseña con varios lookaheads?",
          "¿Consumen caracteres los lookaheads?"
        ]
      },
      quiz: {
        question: "En la expresi\u00f3n '\"100 USD\".match(/\\d+(?=\\s+USD)/)', \u00bfqu\u00e9 contiene el resultado coincidente?",
        options: ["\"100\"", "\"100 USD\"", "\" USD\"", "null"],
        correctIndex: 0,
        explanation: "El Positive Lookahead '(?=\\s+USD)' verifica que el n\u00famero est\u00e9 seguido de ' USD', pero al ser una aserci\u00f3n de longitud cero no lo incluye en el resultado, devolviendo \u00fanicamente '100'."
      }
    },
    {
      id: "regex-12",
      title: "\u00bfQu\u00e9 son los Lookbehinds (?<=...) y (?<!...)?",
      level: "avanzado",
      tags: ["Lookbehind", "Positive-Lookbehind", "Negative-Lookbehind", "Zero-Width", "ES2018"],
      response: "Introducidos en ECMAScript 2018, los Lookbehinds son **aserciones de longitud cero hacia atr\u00e1s (Zero-Width Lookbehind Assertions)**. Permiten comprobar si el texto que **precede** a la posici\u00f3n actual cumple con una condici\u00f3n sin incluirlo en el resultado coincidente:\n\n1. **Positive Lookbehind `(?<=patr\u00f3n)`**:\n   - Exige que el `patr\u00f3n` coincida inmediatamente antes de la posici\u00f3n actual del cursor.\n   - Ejemplo: `/(?<=\\$)\\d+/` aplicado a `\"Precio: $250\"` coincide exactamente con `\"250\"` (el signo `$` no se incluye en el resultado devuelto).\n\n2. **Negative Lookbehind `(?<!patr\u00f3n)`**:\n   - Exige que el `patr\u00f3n` **NO** preceda a la posici\u00f3n actual.\n   - Ejemplo: `/(?<!\\$)\\d+/` aplicado a `\"\u20ac200\"` coincide con `\"200\"`; pero en `\"$200\"` falla.\n\nSon la herramienta predilecta para parsers de precios, prefijos de moneda, n\u00fameros de factura o etiquetas con prefijos conocidos.",
      codeExample: {
        language: "typescript",
        code: "const report = \"Ventas: $1200 USD, Costos: \u20ac450 EUR, Ganancia: $750 USD\";\n\n// 1. Positive Lookbehind: Extraer solo los valores num\u00e9ricos de transacciones en d\u00f3lares ($)\nconst dollarValues = report.match(/(?<=\\$)\\d+/g);\nconsole.log(dollarValues); // [\"1200\", \"750\"] (Los s\u00edmbolos de d\u00f3lar quedan excluidos limpiamente!)\n\n// 2. Negative Lookbehind: Reemplazar comillas que no est\u00e9n escapadas:\nconst jsonLike = 'name: \"Diego\", quote: \"Dijo \\\"hola\\\"\"';\nconst unescapedQuotes = /(?<!\\\\)\"/g;\nconsole.log(jsonLike.replace(unescapedQuotes, \"'\"));\n// Reemplaza las comillas estructurales pero preserva las comillas internas escapadas \\\" "
      },
      visualDiagram: {
        id: "diag-regex-12",
        title: "Aserciones Hacia Atr\u00e1s: Positive (?<=) vs Negative (?<!) Lookbehind",
        caption: "Verificaci\u00f3n retroactiva de contexto previo sin consumir el prefijo dentro del match resultante.",
        diagramType: "regex-lookbehinds-assertion"
      },
      interviewTips: {
        whatInterviewersWant: "Saber si conoces las novedades de ES2018 y si sabes extraer datos eliminando prefijos de forma nativa sin tener que recurrir a grupos de captura y `.slice()` manual.",
        commonPitfalls: ["Intentar usar lookbehinds en motores de JavaScript muy antiguos (como navegadores legacy o versiones viejas de Safari iOS anteriores a 16.4).", "Olvidar escapar caracteres que son s\u00edmbolos de ancla como `$` dentro del lookbehind (`(?<=\\$)`).", "Escribir patrones de lookbehind de longitud variable extremadamente complejos que aumentan el tiempo de ejecuci\u00f3n."],
        followUps: [
          "¿Cómo formatearías números con separadores de miles usando lookbehind?",
          "¿Qué soporte tienen los lookbehinds en navegadores?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 cadena retorna '\"\u20ac50 y $90\".match(/(?<=\\$)\\d+/)[0]'?",
        options: ["\"90\"", "\"$90\"", "\"50\"", "\"\u20ac50\""],
        correctIndex: 0,
        explanation: "El Positive Lookbehind '(?<=\\$)' exige que los d\u00edgitos est\u00e9n precedidos por el s\u00edmbolo '$', ignorando '\u20ac50' y extrayendo '90' sin el '$'."
      }
    },
    {
      id: "regex-13",
      title: "\u00bfQu\u00e9 son los Named Capturing Groups (?<name>...)?",
      level: "avanzado",
      tags: ["Named-Groups", "ES2018", "Code-Readability", "Refactoring", "groups-object"],
      response: "Introducidos en ECMAScript 2018, los **Grupos de Captura con Nombre (Named Capturing Groups)** permiten asignar un identificador legible a un grupo de captura utilizando la sintaxis `(?<nombre>patr\u00f3n)`.\n\n**Ventajas arquitect\u00f3nicas**:\n1. **Legibilidad y Mantenibilidad**: Los datos extra\u00eddos se acceden a trav\u00e9s de la propiedad `.groups.nombre` en el objeto resultado de `match()` o `exec()`, en lugar de depender de \u00edndices num\u00e9ricos m\u00e1gicos y fr\u00e1giles (`match[1]`, `match[2]`).\n2. **Inmunidad a Refactorizaciones**: Si a\u00f1ades o cambias el orden de los grupos en la expresi\u00f3n regular, el c\u00f3digo consumidor no se rompe porque accede por clave nominal y no por posici\u00f3n.\n3. **Integraci\u00f3n con `replace()`**: Se pueden referenciar en cadenas de reemplazo mediante `$<nombre>` o en callbacks.",
      codeExample: {
        language: "typescript",
        code: "// Parser de fechas ISO 8601 con Named Capturing Groups:\nconst dateRegex = /^(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})$/;\n\nconst input = \"2026-09-15\";\nconst match = input.match(dateRegex);\n\nif (match?.groups) {\n  // Desestructuraci\u00f3n limpia y auto-documentada:\n  const { year, month, day } = match.groups;\n  console.log(`A\u00f1o: ${year}, Mes: ${month}, D\u00eda: ${day}`);\n}\n\n// Transformaci\u00f3n directa con String.prototype.replace:\nconst formatted = input.replace(dateRegex, \"$<day>/$<month>/$<year>\");\nconsole.log(formatted); // \"15/09/2026\" "
      },
      visualDiagram: {
        id: "diag-regex-13",
        title: "Grupos de Captura con Nombre y Objeto .groups (ES2018)",
        caption: "Mapeo directo de patrones a claves legibles en result.groups para refactorizaciones resistentes a cambios posicionales.",
        diagramType: "regex-named-capturing-groups"
      },
      interviewTips: {
        whatInterviewersWant: "Que demuestres c\u00f3mo escribir c\u00f3digo autodocumentado y resiliente, evitando el cl\u00e1sico antipatr\u00f3n de acceder a `match[1]`, `match[2]` que colapsa ante cualquier cambio en la regex.",
        commonPitfalls: ["No verificar si `match.groups` existe antes de desestructurar (es `undefined` si no hay coincidencia).", "Reutilizar nombres de grupo duplicados dentro de la misma expresi\u00f3n (salvo en ramas alternativas de regex modernas).", "Desconocer la sintaxis de reemplazo `$<nombre>` en `replace()`."],
        followUps: [
          "¿Cómo accederías a los grupos con nombre en replace()?",
          "¿Qué ventajas tienen frente a los índices numéricos?"
        ]
      },
      quiz: {
        question: "\u00bfEn qu\u00e9 propiedad del resultado de 'match()' se almacenan los grupos capturados con nombre?",
        options: ["result.groups", "result.named", "result.captures", "result.indices"],
        correctIndex: 0,
        explanation: "La especificaci\u00f3n ECMAScript 2018 define que las coincidencias con nombre se exponen en el objeto 'result.groups', cuyas claves corresponden a los identificadores asignados."
      }
    },
    {
      id: "regex-14",
      title: "\u00bfQu\u00e9 es el flag v (Unicode Sets) introducido en ECMAScript 2024?",
      level: "avanzado",
      tags: ["Flag-v", "ES2024", "Unicode-Sets", "Set-Operations", "Emoji-Graphemes"],
      response: "El flag **`/v` (Unicode Sets)**, formalizado en **ECMAScript 2024**, es la evoluci\u00f3n y sucesor moderno del flag `/u`. Ampl\u00eda radicalmente las capacidades de manipulaci\u00f3n de caracteres internacionales y secuencias complejas:\n\n1. **Operaciones de Conjuntos en Clases de Caracteres**:\n   - **Intersecci\u00f3n (`&&`)**: Permite combinar conjuntos (ej. `[[\\p{Letter}] && [\\p{Script=Greek}]]` para letras exclusivamente del alfabeto griego).\n   - **Sustracci\u00f3n (`--`)**: Permite restar subconjuntos (ej. `[[a-z] -- [aeiou]]` para consonantes ASCII).\n\n2. **Soporte de Secuencias de Grafemas y Emojis Multi-Punto**:\n   - El flag `/u` tradicional fallaba con emojis compuestos (como tonos de piel o secuencias familiares con Zero Width Joiner, ZWJ), consider\u00e1ndolos m\u00faltiples caracteres aislados.\n   - El flag `/v` introduce la propiedad `[\\p{RGI_Emoji}]` (Recommended for General Interchange), capaz de coincidir con emojis completos formados por secuencias de m\u00faltiples puntos de c\u00f3digo.",
      codeExample: {
        language: "typescript",
        code: "// Requiere soporte ECMAScript 2024 (Node 20+, Chrome 112+, Safari 17+)\n\n// 1. Operaci\u00f3n de Sustracci\u00f3n (--) para consonantes griegas:\n// Letras griegas excepto las vocales griegas\nconst greekConsonants = /[[\\p{Script=Greek}]--[\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9\u0391\u0395\u0397\u0399\u039f\u03a5\u03a9]]/v;\nconsole.log(greekConsonants.test(\"\u03b2\")); // \u2705 true\nconsole.log(greekConsonants.test(\"\u03b1\")); // \u274c false\n\n// 2. Intersecci\u00f3n (&&): Letras ASCII en may\u00fascula:\nconst upperAscii = /[[a-zA-Z]&&[^a-z]]/v;\nconsole.log(upperAscii.test(\"M\")); // \u2705 true\nconsole.log(upperAscii.test(\"m\")); // \u274c false\n\n// 3. Emojis compuestos con modificadores ZWJ:\nconst singleEmoji = /^[\\p{RGI_Emoji}]$/v;\nconsole.log(singleEmoji.test(\"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\")); // \u2705 true (Tratado como UN solo elemento)\nconsole.log(singleEmoji.test(\"\ud83d\udc4d\ud83c\udffd\")); // \u2705 true (Emoji con tono de piel reconocido)"
      },
      visualDiagram: {
        id: "diag-regex-14",
        title: "Flag /v: Operaciones de Conjuntos Unicode en ECMAScript 2024",
        caption: "Intersecci\u00f3n (&&), sustracci\u00f3n (--) y reconocimiento at\u00f3mico de secuencias complejas de emojis con \\p{RGI_Emoji}.",
        diagramType: "regex-flag-v-unicode-sets"
      },
      interviewTips: {
        whatInterviewersWant: "Conocimiento de la vanguardia de JavaScript (ES2024). Demostrar que entiendes las limitaciones del flag `/u` con los emojis y c\u00f3mo el flag `/v` permite \u00e1lgebra de conjuntos directa sin inventar regex monstruosas.",
        commonPitfalls: ["Intentar combinar el flag `/u` y el flag `/v` a la vez (son mutuamente excluyentes; `v` lo reemplaza).", "No usar corchetes dobles `[[A] && [B]]` al aplicar intersecci\u00f3n y sustracci\u00f3n.", "Utilizarlo en entornos legacy sin transpilaci\u00f3n o soporte de runtime moderno."],
        followUps: [
          "¿Qué operaciones de conjuntos permite el flag v?",
          "¿Por qué los flags u y v son incompatibles entre sí?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 relaci\u00f3n tienen el flag 'u' y el flag 'v' en ECMAScript 2024?",
        options: ["El flag 'v' es un superconjunto moderno que reemplaza al flag 'u', a\u00f1adiendo operaciones de conjuntos y emojis complejos.", "Son banderas id\u00e9nticas pero 'v' solo funciona en WebAssembly.", "El flag 'v' solo valida direcciones IPv6.", "Deben usarse obligatoriamente juntos como '/uv'."],
        correctIndex: 0,
        explanation: "El flag 'v' (Unicode Sets) fue dise\u00f1ado como una versi\u00f3n superior de 'u' que introduce operaciones de conjuntos (intersecci\u00f3n, diferencia) y coincidencia de secuencias complejas de grafemas."
      }
    },
    {
      id: "regex-15",
      title: "\u00bfC\u00f3mo funciona el estado interno mutable lastIndex en RegEx globales?",
      level: "avanzado",
      tags: ["lastIndex", "Stateful-RegExp", "Flag-g", "Flag-y", "Bugs", "Concurrency"],
      response: "En JavaScript, los objetos `RegExp` que poseen el flag global (`/g`) o sticky (`/y`) son **mutables y mantienen estado interno** a trav\u00e9s de su propiedad num\u00e9rica **`lastIndex`**.\n\n**Mec\u00e1nica del problema**:\n1. Cada vez que invocas `regex.test(str)` o `regex.exec(str)`, la b\u00fasqueda no comienza desde el principio del string, sino a partir del \u00edndice marcado por `regex.lastIndex`.\n2. Si encuentra una coincidencia, actualiza `regex.lastIndex` a la posici\u00f3n inmediatamente posterior a dicha coincidencia.\n3. Si la siguiente llamada no encuentra m\u00e1s coincidencias, el m\u00e9todo retorna `false` y **resetea `lastIndex` autom\u00e1ticamente a 0**.\n\n**El bug m\u00e1s com\u00fan en Frontend**:\nSi compartes una instancia est\u00e1tica de una RegEx con flag `/g` a nivel de m\u00f3dulo o componente y la eval\u00faas en una funci\u00f3n de validaci\u00f3n, obtendr\u00e1s **resultados alternados de `true` y `false`** al validar exactamente la misma cadena.",
      codeExample: {
        language: "typescript",
        code: "// Antipatr\u00f3n peligroso: RegEx global compartida a nivel de m\u00f3dulo\nconst sharedRegex = /^[a-z]+$/g; // \u26a0\ufe0f Tiene flag /g!\n\nfunction validateName(name: string): boolean {\n  return sharedRegex.test(name);\n}\n\n// Misma entrada exacta ejecutada consecutivamente:\nconsole.log(validateName(\"diego\")); // \u2705 true  (lastIndex avanz\u00f3 a 5)\nconsole.log(validateName(\"diego\")); // \u274c false (Busca a partir del \u00edndice 5! Falla y resetea a 0)\nconsole.log(validateName(\"diego\")); // \u2705 true  (Vuelve a dar true!)\n\n// SOLUCIONES ARQUITECT\u00d3NICAS:\n// 1. Eliminar el flag /g si solo haces validaci\u00f3n con .test():\nconst safeRegex = /^[a-z]+$/; // \u2705 Sin estado\n\n// 2. Si necesitas /g, resetear manualmente antes de cada prueba:\nsharedRegex.lastIndex = 0; // Reset defensivo"
      },
      visualDiagram: {
        id: "diag-regex-15",
        title: "Mutaci\u00f3n de Estado Interno con lastIndex en Flags /g e /y",
        caption: "Avance progresivo de lastIndex y reinicio a 0 que produce el infame bug de validaciones alternadas.",
        diagramType: "regex-lastindex-stateful-mutation"
      },
      interviewTips: {
        whatInterviewersWant: "Esta es una de las preguntas trampa favoritas en entrevistas senior de JavaScript. Quieren ver si conoces la mutaci\u00f3n de `lastIndex` y sabes diagnosticar por qu\u00e9 un validador falla intermitentemente.",
        commonPitfalls: ["Poner el flag `/g` en expresiones regulares de validaci\u00f3n de formularios por inercia o descuido.", "No resetear `lastIndex = 0` al reutilizar instancias de regex en bucles `while ((match = regex.exec(str)))`.", "Creer que las instancias de RegExp son inmutables como los Strings o N\u00fameros."],
        followUps: [
          "¿Por qué test() alterna entre true y false con el flag g?",
          "¿Cómo evitarías este bug?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 devolver\u00e1 una segunda llamada consecutiva a '/a/g.test(\"a\")' reutilizando la misma instancia de RegExp?",
        options: ["false, porque lastIndex estaba en 1 y la b\u00fasqueda comenz\u00f3 despu\u00e9s del final del string.", "true, porque la cadena de entrada es id\u00e9ntica.", "null.", "Lanza una excepci\u00f3n de estado inv\u00e1lido."],
        correctIndex: 0,
        explanation: "La primera llamada encuentra 'a' y actualiza lastIndex a 1. La segunda llamada comienza la b\u00fasqueda desde el \u00edndice 1, no encuentra nada, retorna false y resetea lastIndex a 0."
      }
    },
    {
      id: "regex-16",
      title: "\u00bfQu\u00e9 es el Retroceso Catastr\u00f3fico (Catastrophic Backtracking) y c\u00f3mo causa ataques ReDoS?",
      level: "experto",
      tags: ["Catastrophic-Backtracking", "ReDoS", "Security", "Denial-of-Service", "Time-Complexity"],
      response: "El **Retroceso Catastr\u00f3fico (Catastrophic Backtracking)** ocurre cuando una expresi\u00f3n regular contiene m\u00faltiples cuantificadores ambiguos y superpuestos (como `(a+)+$`, `(a|a)+$`, o `([a-zA-Z]+)*$`) evaluados por un motor de tipo NFA.\n\nCuando se suministra una entrada que coincide casi en su totalidad pero falla al final (ej. `\"aaaaaaaaaaaaaaaaaaaa!\"`):\n1. El motor no puede saber a priori qu\u00e9 combinaci\u00f3n de repeticiones internas y externas era la correcta.\n2. Ante el fallo final en el car\u00e1cter `'!'`, el motor comienza a probar **exhaustiva y recursivamente todas las permutaciones posibles de partici\u00f3n de la cadena**.\n3. La complejidad temporal escala de forma **exponencial: $O(2^n)$**.\n\n**Impacto ReDoS (Regular Expression Denial of Service)**:\nUna cadena de apenas 30 o 40 caracteres maliciosos puede requerir miles de millones de pasos de c\u00e1lculo, **congelando el hilo principal (Main Thread) de JavaScript al 100% de CPU**, bloqueando la UI del navegador o colapsando un servidor Node.js.",
      codeExample: {
        language: "typescript",
        code: "// PATR\u00d3N VULNERABLE A ReDoS: (a+)+$\n// Cuantificador anidado sobre cuantificador\nconst vulnerableRegex = /^(a+)+$/;\n\n// Medici\u00f3n de explosi\u00f3n exponencial de tiempo:\nfunction testBacktracking(count: number) {\n  const evilInput = \"a\".repeat(count) + \"!\";\n  const start = performance.now();\n  \n  vulnerableRegex.test(evilInput); // Fallar\u00e1 pero tras probar 2^count combinaciones!\n  \n  const elapsed = (performance.now() - start).toFixed(2);\n  console.log(`Longitud: ${count} caracteres -> Tiempo: ${elapsed}ms`);\n}\n\n// Longitud 15 -> ~1ms\n// Longitud 25 -> ~500ms\n// Longitud 30 -> ~16,000ms (16 segundos de CPU congelada al 100%!)\n// Longitud 40 -> Bloqueo total del navegador/proceso durante horas"
      },
      visualDiagram: {
        id: "diag-regex-16",
        title: "\u00c1rbol de Explosi\u00f3n Combinatoria en Catastrophic Backtracking (ReDoS)",
        caption: "Complejidad exponencial O(2^n) al evaluar entradas que casi coinciden contra cuantificadores anidados superpuestos.",
        diagramType: "regex-catastrophic-backtracking-redos"
      },
      interviewTips: {
        whatInterviewersWant: "Pregunta de Staff/Security Architect. Debes explicar con claridad el concepto de NFA con retroceso, identificar patrones con cuantificadores anidados y argumentar c\u00f3mo puede tumbar el hilo principal de JavaScript.",
        commonPitfalls: ["Creer que los ataques de Denegaci\u00f3n de Servicio (DoS) son exclusivos del backend: un ReDoS en frontend bloquea la interfaz de usuario por completo.", "Escribir expresiones con grupos anidados como `([a-zA-Z0-9]+)*` para validaciones de texto largo.", "Confiar ciegamente en expresiones regulares copiadas de foros sin analizarlas con analizadores est\u00e1ticos de vulnerabilidad."],
        followUps: [
          "¿Qué patrón causa backtracking exponencial (como (a+)+)?",
          "¿Cómo detectarías regex vulnerables en tu código?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es la complejidad temporal de una RegEx vulnerable a Catastrophic Backtracking ante una entrada casi coincidente?",
        options: ["Exponencial O(2^n)", "Lineal O(n)", "Logar\u00edtmica O(log n)", "Constante O(1)"],
        correctIndex: 0,
        explanation: "Los cuantificadores anidados superpuestos obligan al motor NFA a explorar todas las particiones posibles de la cadena, resultando en una explosi\u00f3n combinatoria de complejidad exponencial O(2^n)."
      }
    },
    {
      id: "regex-17",
      title: "\u00bfC\u00f3mo prevenir y mitigar vulnerabilidades ReDoS en el Frontend?",
      level: "experto",
      tags: ["ReDoS-Mitigation", "Defense-in-Depth", "Web-Workers", "RE2", "Static-Analysis"],
      response: "La mitigaci\u00f3n de ReDoS requiere una estrategia de **Defensa en Profundidad (Defense in Depth)** estructurada en cuatro niveles arquitect\u00f3nicos:\n\n1. **Simplificaci\u00f3n y Correcci\u00f3n de Patrones**:\n   - Eliminar repeticiones ambiguas anidadas (`(a+)+` \u2794 `a+`).\n   - Hacer que las alternativas en uniones sean mutuamente excluyentes para que el motor no tenga m\u00faltiples caminos de backtracking.\n\n2. **Validaci\u00f3n Previa de Longitud (Input Truncation)**:\n   - Establecer un l\u00edmite m\u00e1ximo r\u00edgido antes de ejecutar cualquier RegEx (`if (input.length > 255) return false;`). Sin cadenas largas, la explosi\u00f3n exponencial no puede materializarse.\n\n3. **An\u00e1lisis Est\u00e1tico en CI/CD**:\n   - Integrar plugins de linter como **`eslint-plugin-regexp`** (con la regla `no-super-linear-backtracking`), que detecta patrones vulnerables en tiempo de desarrollo.\n\n4. **Aislamiento en Web Workers con Timeout**:\n   - En aplicaciones que eval\u00faan expresiones regulares introducidas por el usuario, ejecutar la evaluaci\u00f3n dentro de un Web Worker con un temporizador `setTimeout(worker.terminate, 500)` para matar el hilo si excede el umbral de seguridad.",
      codeExample: {
        language: "typescript",
        code: "// Envoltorio defensivo para ejecuci\u00f3n segura de expresiones regulares:\nfunction safeRegexMatch(regex: RegExp, text: string, maxLength: number = 200): boolean {\n  // Nivel 1: Guardia preventiva de longitud para evitar inputs maliciosos\n  if (text.length > maxLength) {\n    console.warn(\"Input excede la longitud m\u00e1xima segura; rechazado preventivamente.\");\n    return false;\n  }\n\n  // Nivel 2: Ejecuci\u00f3n protegida\n  return regex.test(text);\n}\n\n// Patr\u00f3n reescrito seguro (Mutuamente excluyente sin solapamiento):\n// Vulnerable: /^(\\d+|[0-9]+)+$/\n// Seguro:      /^\\d+$/\nconst safePattern = /^\\d+$/;\nconsole.log(safeRegexMatch(safePattern, \"123456\")); // \u2705 true"
      },
      visualDiagram: {
        id: "diag-regex-17",
        title: "Arquitectura de Defensa en Profundidad contra Ataques ReDoS",
        caption: "Estrategia multicapa: l\u00edmites de longitud, linting est\u00e1tico, sanitizaci\u00f3n de patrones y aislamiento en Web Workers.",
        diagramType: "regex-redos-mitigation-defenses"
      },
      interviewTips: {
        whatInterviewersWant: "Que demuestres criterio de seguridad de nivel Staff: explicar que no basta con 'tener cuidado', sino que se deben aplicar l\u00edmites de entrada de longitud, herramientas est\u00e1ticas autom\u00e1ticas en CI y aislamiento de hilos.",
        commonPitfalls: ["Evaluar expresiones introducidas por usuarios en el hilo principal sin l\u00edmite de tiempo ni Worker.", "No tener reglas de ESLint que detecten backtracking s\u00faper-lineal en el c\u00f3digo fuente.", "Permitir que campos de formulario acepten texto ilimitado sin un `maxLength` en el HTML."],
        followUps: [
          "¿Qué ventajas tiene un motor lineal como RE2?",
          "¿Cómo limitarías el tiempo de ejecución de una regex?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es la medida preventiva m\u00e1s r\u00e1pida y efectiva para evitar ataques ReDoS antes de evaluar una RegEx?",
        options: ["Comprobar y limitar estrictamente la longitud m\u00e1xima de la cadena de entrada (input.length < MAX).", "Reemplazar todos los strings por n\u00fameros.", "Ejecutar la regex tres veces consecutivas.", "Usar JSON.stringify sobre el texto."],
        correctIndex: 0,
        explanation: "La explosi\u00f3n exponencial del backtracking depende de la longitud de la cadena (2^n). Limitar la longitud m\u00e1xima a un valor razonable (ej. 100 o 255 caracteres) impide f\u00edsicamente que el c\u00e1lculo alcance tiempos perceptibles."
      }
    },
    {
      id: "regex-18",
      title: "\u00bfC\u00f3mo optimizar el compilador y motor de RegEx en aplicaciones de procesamiento de texto masivo?",
      level: "experto",
      tags: ["Performance", "Optimization", "Hoisting", "Non-Capturing", "Anchoring", "Compilers"],
      response: "En aplicaciones frontend de procesamiento intensivo de texto (como editores enriquecidos, terminales web, parsers de markdown o herramientas de logging masivo), optimizar el uso de expresiones regulares es indispensable para evitar micro-bloqueos en el renderizado a 60 FPS:\n\n1. **Hoisting de Expresiones Constantes**:\n   - Declarar las instancias de `RegExp` en el \u00e1mbito del m\u00f3dulo, fuera de componentes React o bucles. Evita recompilar el patr\u00f3n en cada ciclo de renderizado y previene presi\u00f3n sobre el Garbage Collector.\n\n2. **Uso Exclusivo de Grupos No Capturantes `(?:...)`**:\n   - Si no necesitas extraer el dato con `$1`, utiliza siempre `(?:...)`. Ahorra la asignaci\u00f3n continua de memoria para el array de subcoincidencias.\n\n3. **Anclaje Temprano (`^`) y Clases Excluyentes**:\n   - Si la coincidencia siempre ocurre al inicio, utiliza `^`. Sin ancla, el motor eval\u00faa el patr\u00f3n en el \u00edndice 0, luego en el 1, luego en el 2, multiplicando el coste computacional por la longitud de la cadena.\n\n4. **Orden de Alternativas por Frecuencia**:\n   - En uniones `(opci\u00f3nA|opci\u00f3nB)`, coloca primero la opci\u00f3n que estad\u00edsticamente ocurra con mayor frecuencia en tus datos para permitir un retorno anticipado (Short-Circuiting).",
      codeExample: {
        language: "typescript",
        code: "// ANTIPATR\u00d3N: Recompilaci\u00f3n y grupos de captura innecesarios dentro de bucles\nfunction slowLogProcessor(logs: string[]): string[] {\n  return logs.filter((log) => {\n    // \u274c Se recompila en cada iteraci\u00f3n y reserva memoria de grupos in\u00fatil:\n    return /(http|https):\\/\\/([a-z.]+)*/i.test(log);\n  });\n}\n\n// PATR\u00d3N OPTIMIZADO ENTERPRISE (O(n) y Zero-GC):\n// 1. Hoisted fuera de la funci\u00f3n\n// 2. Grupos no capturantes (?:...)\n// 3. Clases de caracteres excluyentes en lugar de comodines generales\nconst OPTIMIZED_URL_REGEX = /https?:\\/\\/[a-z0-9.-]+/i;\n\nfunction fastLogProcessor(logs: string[]): string[] {\n  // Pre-filtro r\u00e1pido con m\u00e9todo de string nativo antes de la regex:\n  return logs.filter((log) => log.includes(\"http\") && OPTIMIZED_URL_REGEX.test(log));\n}"
      },
      visualDiagram: {
        id: "diag-regex-18",
        title: "Pipeline de Optimizaci\u00f3n y Rendimiento para Motores de RegEx",
        caption: "T\u00e9cnicas de alto rendimiento: hoisting de instancias, short-circuit con includes(), no-captura y anclaje.",
        diagramType: "regex-compiler-optimization-bench"
      },
      interviewTips: {
        whatInterviewersWant: "Demostrar que sabes combinar expresiones regulares con m\u00e9todos de string nativos ultra-r\u00e1pidos (`includes`, `indexOf`) para crear filtros de dos fases (Fast-Path / Slow-Path) y optimizar el uso de CPU/GC.",
        commonPitfalls: ["Crear instancias de RegExp dentro de renders de React o bucles `Array.filter()` masivos.", "Usar expresiones regulares para b\u00fasquedas de cadenas literales simples cuando `string.includes()` es 10x m\u00e1s r\u00e1pido.", "Ignorar el coste de asignaci\u00f3n de memoria que provocan los grupos de captura en procesamiento de streaming."],
        followUps: [
          "¿Por qué conviene compilar la regex una sola vez fuera del bucle?",
          "¿Cuándo un parser manual es más eficiente que una regex?"
        ]
      },
      quiz: {
        question: "\u00bfPor qu\u00e9 es recomendable utilizar 'str.includes(\"needle\")' antes de ejecutar una RegEx compleja en un array de 100,000 elementos?",
        options: ["Porque act\u00faa como un 'Fast-Path' en C++ que descarta instant\u00e1neamente los elementos no coincidentes sin invocar al motor de RegEx.", "Porque JavaScript no permite m\u00e1s de 1,000 ejecuciones de RegEx por segundo.", "Porque reinicia autom\u00e1ticamente el contador lastIndex.", "Porque compila la RegEx en memoria compartida."],
        correctIndex: 0,
        explanation: "El m\u00e9todo nativo String.prototype.includes() es un algoritmo lineal directo ultra-optimizado en C++. Usarlo como filtro previo descarta el 95%+ de cadenas irrelevantes sin la sobrecarga del motor de RegEx."
      }
    }
  ]
};

export default questionsRegularExpresions;
