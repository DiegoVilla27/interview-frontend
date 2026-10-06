import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo HTML. */
export const htmlDiagrams: DiagramRegistry = {
  "html-semantic-tree": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#38bdf8" fontWeight="700" fontSize="12">Estructura Semántica Estándar HTML5</text>
      
      {/* Header / Nav */}
      <rect x="40" y="50" width="560" height="32" rx="6" fill={isDark ? "#1e293b" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="55" y="70" fill="#0284c7" fontWeight="bold" fontSize="11">&lt;header&gt; &lt;nav&gt; (Navegación principal accesible con teclado) &lt;/nav&gt; &lt;/header&gt;</text>

      {/* Main Area with Article and Aside */}
      <rect x="40" y="90" width="370" height="65" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="55" y="110" fill="#10b981" fontWeight="bold" fontSize="11">&lt;main&gt; (Contenido principal único)</text>
      <text x="55" y="128" fill={textColor} fontSize="9">&lt;article&gt; &lt;h1&gt;Título&lt;/h1&gt; &lt;section&gt;Contenido autónomo&lt;/section&gt; &lt;/article&gt;</text>
      <text x="55" y="144" fill="#34d399" fontSize="8">✓ Identificado por lectores de pantalla y bots de SEO</text>

      <rect x="425" y="90" width="175" height="65" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="438" y="110" fill="#8b5cf6" fontWeight="bold" fontSize="11">&lt;aside&gt; (Barra lateral)</text>
      <text x="438" y="128" fill={textColor} fontSize="9">Enlaces relacionados,</text>
      <text x="438" y="144" fill={subtextColor} fontSize="8">publicidad o glosarios</text>

      {/* Footer */}
      <rect x="40" y="162" width="560" height="32" rx="6" fill={isDark ? "#1f1d2b" : "#f1f5f9"} stroke="#64748b" strokeWidth="1.5" />
      <text x="55" y="182" fill="#94a3b8" fontWeight="bold" fontSize="10">&lt;footer&gt; (Copyright, términos legales, enlaces de contacto y redes sociales) &lt;/footer&gt;</text>
    </svg>
  );
  },

  "html-dom-a11y-tree": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* HTML Source */}
      <rect x="25" y="35" width="170" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="58" fill="#3b82f6" fontWeight="700" fontSize="11">1. Código HTML</text>
      <rect x="35" y="70" width="150" height="70" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="42" y="88" fill="#60a5fa" fontSize="8" fontFamily="monospace">&lt;button</text>
      <text x="42" y="102" fill="#a5b4fc" fontSize="8" fontFamily="monospace">{' aria-expanded="false"'}</text>
      <text x="42" y="116" fill="#a5b4fc" fontSize="8" fontFamily="monospace">{' aria-controls="menu">'}</text>
      <text x="42" y="130" fill={textColor} fontSize="8" fontFamily="monospace"> Menú &lt;/button&gt;</text>
      <text x="35" y="160" fill={subtextColor} fontSize="8">Elementos &amp; atributos ARIA</text>

      {/* DOM Tree */}
      <rect x="225" y="35" width="180" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="235" y="58" fill="#818cf8" fontWeight="700" fontSize="11">2. DOM Tree (Visual)</text>
      <rect x="235" y="70" width="160" height="70" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="242" y="88" fill="#c7d2fe" fontSize="8" fontFamily="monospace">HTMLButtonElement</text>
      <text x="242" y="102" fill={textColor} fontSize="8" fontFamily="monospace">• nodeType: 1</text>
      <text x="242" y="116" fill={textColor} fontSize="8" fontFamily="monospace">{'• textContent: "Menú"'}</text>
      <text x="242" y="130" fill={textColor} fontSize="8" fontFamily="monospace">• styles: CSSOM</text>
      <text x="235" y="160" fill={subtextColor} fontSize="8">Árbol para layout y renderizado</text>

      {/* A11y Tree (AOM) */}
      <rect x="435" y="35" width="180" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="445" y="58" fill="#10b981" fontWeight="700" fontSize="11">3. Accessibility Tree (AOM)</text>
      <rect x="445" y="70" width="160" height="70" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="452" y="88" fill="#34d399" fontSize="8" fontWeight="bold">{'Role: "button"'}</text>
      <text x="452" y="102" fill="#6ee7b7" fontSize="8">{'Name: "Menú"'}</text>
      <text x="452" y="116" fill="#a7f3d0" fontSize="8">Expanded: false</text>
      <text x="452" y="130" fill="#a7f3d0" fontSize="8">Focusable: true</text>
      <text x="445" y="160" fill="#10b981" fontSize="8" fontWeight="bold">Consumido por Screen Readers</text>

      <path d="M198 110 L222 110" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M408 110 L432 110" stroke="#10b981" strokeWidth="1.5" />
    </svg>
  );
  },

  "html-document-structure": ({ isDark, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* DOCTYPE banner */}
      <rect x="30" y="25" width="580" height="28" rx="4" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1" />
      <text x="45" y="44" fill="#818cf8" fontSize="10" fontFamily="monospace">{"<!DOCTYPE html> ➔ Declaración obligatoria de modo estándar HTML5"}</text>

      {/* html root */}
      <rect x="30" y="62" width="580" height="135" rx="8" fill={isDark ? "#0f172a" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="42" y="80" fill="#3b82f6" fontWeight="bold" fontSize="11">{"<html lang=\"es\"> (Elemento Raíz)"}</text>

      {/* head */}
      <rect x="45" y="90" width="260" height="95" rx="6" fill={isDark ? "#1e293b" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="55" y="110" fill="#0284c7" fontWeight="bold" fontSize="10">{"<head> (Metadatos No Visibles)"}</text>
      <rect x="55" y="118" width="240" height="58" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="62" y="132" fill="#38bdf8" fontSize="8" fontFamily="monospace">{"<meta charset=\"UTF-8\">"}</text>
      <text x="62" y="146" fill="#38bdf8" fontSize="8" fontFamily="monospace">{"<meta name=\"viewport\" content=\"...\">"}</text>
      <text x="62" y="160" fill="#38bdf8" fontSize="8" fontFamily="monospace">{"<title>Título</title> • <link rel=\"...\">"}</text>

      {/* body */}
      <rect x="325" y="90" width="270" height="95" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="335" y="110" fill="#10b981" fontWeight="bold" fontSize="10">{"<body> (Contenido Visible del DOM)"}</text>
      <rect x="335" y="118" width="250" height="58" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="342" y="132" fill="#34d399" fontSize="8" fontFamily="monospace">{"<header> • <nav> (Navegación)"}</text>
      <text x="342" y="146" fill="#34d399" fontSize="8" fontFamily="monospace">{"<main> • <article> (Contenido Central)"}</text>
      <text x="342" y="160" fill="#34d399" fontSize="8" fontFamily="monospace">{"<footer> • <script defer> (Lógica)"}</text>
    </svg>
  );
  },

  "html-block-vs-inline": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Block Elements */}
      <rect x="25" y="35" width="285" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="38" y="58" fill="#3b82f6" fontWeight="700" fontSize="11">Elementos de Bloque (Block)</text>
      <text x="38" y="74" fill={subtextColor} fontSize="8">Ocupan 100% del ancho • Inician en nueva línea</text>
      <rect x="38" y="85" width="258" height="26" rx="4" fill={isDark ? "#1e1b4b" : "#dbeafe"} stroke="#3b82f6" />
      <text x="45" y="102" fill="#3b82f6" fontSize="8" fontFamily="monospace">{"<div> Bloque 1 (width: 100%) </div>"}</text>
      <rect x="38" y="116" width="258" height="26" rx="4" fill={isDark ? "#1e1b4b" : "#dbeafe"} stroke="#3b82f6" />
      <text x="45" y="133" fill="#3b82f6" fontSize="8" fontFamily="monospace">{"<p> Bloque 2 (Forza salto de línea) </p>"}</text>
      <text x="38" y="160" fill={textColor} fontSize="8">Aceptan width, height, margin y padding verticales</text>
      <text x="38" y="174" fill="#3b82f6" fontSize="8" fontWeight="bold">Ejemplos: div, p, h1-h6, section, article, header, form</text>

      {/* Inline Elements */}
      <rect x="330" y="35" width="285" height="155" rx="8" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="345" y="58" fill="#f59e0b" fontWeight="700" fontSize="11">Elementos en Línea (Inline)</text>
      <text x="345" y="74" fill={subtextColor} fontSize="8">Solo ocupan su contenido • Fluyen horizontalmente</text>
      <rect x="345" y="85" width="120" height="26" rx="4" fill={isDark ? "#292524" : "#fef3c7"} stroke="#f59e0b" />
      <text x="352" y="102" fill="#fbbf24" fontSize="8" fontFamily="monospace">{"<span> Texto 1 </span>"}</text>
      <rect x="475" y="85" width="125" height="26" rx="4" fill={isDark ? "#292524" : "#fef3c7"} stroke="#f59e0b" />
      <text x="482" y="102" fill="#fbbf24" fontSize="8" fontFamily="monospace">{"<a href=\"#\"> Enlace </a>"}</text>
      <text x="345" y="142" fill={textColor} fontSize="8">No aceptan width ni height. Ignoran margin vertical</text>
      <text x="345" y="160" fill={subtextColor} fontSize="8">No rompen el párrafo de texto</text>
      <text x="345" y="174" fill="#f59e0b" fontSize="8" fontWeight="bold">Ejemplos: span, a, strong, em, img, label, code</text>
    </svg>
  );
  },

  "html-doctype-modes": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#818cf8" fontWeight="700" fontSize="12">Modos de Renderizado según DOCTYPE</text>
      
      {/* Standards Mode */}
      <rect x="25" y="52" width="285" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="38" y="74" fill="#10b981" fontWeight="700" fontSize="11">Standards Mode (Estándar Completo)</text>
      <rect x="38" y="85" width="258" height="32" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="45" y="105" fill="#34d399" fontSize="9" fontFamily="monospace">{"<!DOCTYPE html>"}</text>
      <text x="38" y="135" fill={textColor} fontSize="8">✓ Sigue especificaciones exactas W3C y WHATWG</text>
      <text x="38" y="150" fill={textColor} fontSize="8">✓ Box Model estándar (width = content width)</text>
      <text x="38" y="168" fill="#10b981" fontSize="8" fontWeight="bold">Garantiza comportamiento idéntico en todos los browsers</text>

      {/* Quirks Mode */}
      <rect x="330" y="52" width="285" height="140" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="345" y="74" fill="#ef4444" fontWeight="700" fontSize="11">Quirks Mode (Modo Peculiaridades)</text>
      <rect x="345" y="85" width="255" height="32" rx="4" fill={isDark ? "#1c1917" : "#ffffff"} />
      <text x="352" y="105" fill="#f87171" fontSize="9" fontFamily="monospace">Sin DOCTYPE o DOCTYPE Antiguo</text>
      <text x="345" y="135" fill={textColor} fontSize="8">⚠️ Emula fallos antiguos de Internet Explorer 5</text>
      <text x="345" y="150" fill={textColor} fontSize="8">⚠️ Box Model roto: padding y border consumen width</text>
      <text x="345" y="168" fill="#ef4444" fontSize="8" fontWeight="bold">Incompatibilidades graves de diseño responsivo</text>
    </svg>
  );
  },

  "html-div-vs-span": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* div representation */}
      <rect x="25" y="35" width="285" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="38" y="58" fill="#3b82f6" fontWeight="700" fontSize="12">{"<div> (Contenedor Estructural de Bloque)"}</text>
      <rect x="38" y="72" width="258" height="55" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#3b82f6" strokeDasharray="3 3" />
      <text x="45" y="92" fill="#60a5fa" fontSize="8" fontFamily="monospace">{"<div class=\"card\">"}</text>
      <text x="55" y="106" fill={textColor} fontSize="8" fontFamily="monospace">{"  <h3>Título</h3> <p>Texto</p>"}</text>
      <text x="45" y="120" fill="#60a5fa" fontSize="8" fontFamily="monospace">{"</div>"}</text>
      <text x="38" y="148" fill={textColor} fontSize="8">• Ideal para envolver grupos de componentes o layouts</text>
      <text x="38" y="162" fill={subtextColor} fontSize="8">• Genera división visual clara en el flujo del DOM</text>
      <text x="38" y="176" fill="#3b82f6" fontSize="8" fontWeight="bold">Display por defecto: block</text>

      {/* span representation */}
      <rect x="330" y="35" width="285" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="345" y="58" fill="#8b5cf6" fontWeight="700" fontSize="12">{"<span> (Marcador Tipográfico en Línea)"}</text>
      <rect x="345" y="72" width="255" height="55" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="352" y="92" fill={textColor} fontSize="8" fontFamily="monospace">{"<p>El precio es "}</text>
      <text x="425" y="92" fill="#a78bfa" fontSize="8" fontFamily="monospace" fontWeight="bold">{"<span class=\"badge\">"}</text>
      <text x="352" y="106" fill="#34d399" fontSize="8" fontFamily="monospace" fontWeight="bold">{"  $99.00 USD"}</text>
      <text x="352" y="120" fill="#a78bfa" fontSize="8" fontFamily="monospace">{"</span> en oferta.</p>"}</text>
      <text x="345" y="148" fill={textColor} fontSize="8">• Estiliza palabras individuales sin romper la oración</text>
      <text x="345" y="162" fill={subtextColor} fontSize="8">• No añade saltos de línea ni espaciados laterales</text>
      <text x="345" y="176" fill="#8b5cf6" fontSize="8" fontWeight="bold">Display por defecto: inline</text>
    </svg>
  );
  },

  "html-attribute-anatomy": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="38" fill="#38bdf8" fontWeight="700" fontSize="12">Anatomía Estándar de un Elemento y Atributos HTML</text>
      
      {/* Markup code bar */}
      <rect x="30" y="55" width="580" height="42" rx="6" fill={isDark ? "#0f172a" : "#f1f5f9"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="45" y="81" fontSize="11" fontFamily="monospace">
        <tspan fill="#38bdf8">&lt;a </tspan>
        <tspan fill="#fbbf24">href</tspan>
        <tspan fill={textColor}>=</tspan>
        <tspan fill="#34d399">&quot;https://cabuweb.com&quot;</tspan>
        <tspan fill="#f43f5e"> target</tspan>
        <tspan fill={textColor}>=</tspan>
        <tspan fill="#34d399">&quot;_blank&quot;</tspan>
        <tspan fill="#a855f7"> download</tspan>
        <tspan fill="#38bdf8">&gt;</tspan>
        <tspan fill={textColor}>Visitar Sitio</tspan>
        <tspan fill="#38bdf8">&lt;/a&gt;</tspan>
      </text>

      {/* Cards breakdown */}
      <rect x="30" y="115" width="130" height="75" rx="6" fill={isDark ? "#082f49" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1" />
      <text x="38" y="135" fill="#38bdf8" fontWeight="bold" fontSize="10">Tag de Apertura</text>
      <text x="38" y="152" fill={textColor} fontSize="9" fontFamily="monospace">&lt;a ... &gt;</text>
      <text x="38" y="170" fill={subtextColor} fontSize="8">Inicia el elemento</text>

      <rect x="175" y="115" width="140" height="75" rx="6" fill={isDark ? "#451a03" : "#fef3c7"} stroke="#d97706" strokeWidth="1" />
      <text x="183" y="135" fill="#fbbf24" fontWeight="bold" fontSize="10">Nombre de Atributo</text>
      <text x="183" y="152" fill={textColor} fontSize="9" fontFamily="monospace">href, target, id</text>
      <text x="183" y="170" fill={subtextColor} fontSize="8">Propiedad clave (Key)</text>

      <rect x="330" y="115" width="140" height="75" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="338" y="135" fill="#34d399" fontWeight="bold" fontSize="10">Valor del Atributo</text>
      <text x="338" y="152" fill={textColor} fontSize="9" fontFamily="monospace">&quot;https://...&quot;</text>
      <text x="338" y="170" fill={subtextColor} fontSize="8">Entre comillas dobles</text>

      <rect x="485" y="115" width="125" height="75" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="1" />
      <text x="493" y="135" fill="#818cf8" fontWeight="bold" fontSize="10">Atributo Booleano</text>
      <text x="493" y="152" fill={textColor} fontSize="9" fontFamily="monospace">download / disabled</text>
      <text x="493" y="170" fill={subtextColor} fontSize="8">Presente = True</text>
    </svg>
  );
  },

  "html-anchor-navigation": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#3b82f6" fontWeight="700" fontSize="12">{"Patrones de Navegación con la Etiqueta <a>"}</text>
      
      {/* Card 1: External Link */}
      <rect x="25" y="52" width="135" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="74" fill="#3b82f6" fontWeight="bold" fontSize="10">1. Enlace Externo</text>
      <rect x="33" y="85" width="119" height="38" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="38" y="100" fill="#60a5fa" fontSize="7" fontFamily="monospace">target=&quot;_blank&quot;</text>
      <text x="38" y="113" fill="#a5b4fc" fontSize="7" fontFamily="monospace">rel=&quot;noopener&quot;</text>
      <text x="35" y="142" fill={textColor} fontSize="8">Abre nueva pestaña</text>
      <text x="35" y="156" fill="#ef4444" fontSize="8" fontWeight="bold">rel previene tabnabbing</text>

      {/* Card 2: Internal Path */}
      <rect x="175" y="52" width="135" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="185" y="74" fill="#10b981" fontWeight="bold" fontSize="10">2. Ruta Interna</text>
      <rect x="183" y="85" width="119" height="38" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="188" y="100" fill="#34d399" fontSize="7" fontFamily="monospace">href=&quot;/cursos&quot;</text>
      <text x="188" y="113" fill="#6ee7b7" fontSize="7" fontFamily="monospace">href=&quot;../about&quot;</text>
      <text x="185" y="142" fill={textColor} fontSize="8">Navegación en el sitio</text>
      <text x="185" y="156" fill="#10b981" fontSize="8" fontWeight="bold">Interceptable por SPA</text>

      {/* Card 3: Anchor Jump */}
      <rect x="325" y="52" width="135" height="140" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="335" y="74" fill="#8b5cf6" fontWeight="bold" fontSize="10">3. Salto a Sección</text>
      <rect x="333" y="85" width="119" height="38" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="338" y="100" fill="#a78bfa" fontSize="7" fontFamily="monospace">href=&quot;#temario&quot;</text>
      <text x="338" y="113" fill="#c4b5fd" fontSize="7" fontFamily="monospace">id=&quot;temario&quot;</text>
      <text x="335" y="142" fill={textColor} fontSize="8">Desplazamiento a nodo</text>
      <text x="335" y="156" fill="#8b5cf6" fontSize="8" fontWeight="bold">Smooth scroll con CSS</text>

      {/* Card 4: Protocol Action */}
      <rect x="475" y="52" width="140" height="140" rx="6" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="485" y="74" fill="#f59e0b" fontWeight="bold" fontSize="10">4. Protocolo Acción</text>
      <rect x="483" y="85" width="124" height="38" rx="3" fill={isDark ? "#292524" : "#ffffff"} />
      <text x="488" y="100" fill="#fbbf24" fontSize="7" fontFamily="monospace">href=&quot;mailto:me@...&quot;</text>
      <text x="488" y="113" fill="#fde68a" fontSize="7" fontFamily="monospace">href=&quot;tel:+34...&quot;</text>
      <text x="485" y="142" fill={textColor} fontSize="8">Dispara apps nativas</text>
      <text x="485" y="156" fill="#f59e0b" fontSize="8" fontWeight="bold">Correo o marcador telefónico</text>
    </svg>
  );
  },

  "html-id-vs-class": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* id side */}
      <rect x="25" y="35" width="285" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="40" y="58" fill="#3b82f6" fontWeight="700" fontSize="12">id (Identificador Único 1:1)</text>
      <rect x="40" y="72" width="255" height="32" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="48" y="92" fill="#60a5fa" fontSize="9" fontFamily="monospace">{'<div id="main-header">'}</text>
      <text x="40" y="122" fill={textColor} fontSize="8">• Solo 1 elemento por documento puede tener este id</text>
      <text x="40" y="137" fill={textColor} fontSize="8">• Especificidad CSS muy alta: (0, 1, 0, 0)</text>
      <text x="40" y="152" fill={textColor} fontSize="8">• Sirve como ancla de URL (#main-header) y label &quot;for&quot;</text>
      <text x="40" y="172" fill="#3b82f6" fontSize="8" fontWeight="bold">Acceso JS: document.getElementById(&quot;...&quot;)</text>

      {/* class side */}
      <rect x="330" y="35" width="285" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="345" y="58" fill="#10b981" fontWeight="700" fontSize="12">class (Clase Reutilizable 1:N)</text>
      <rect x="345" y="72" width="255" height="32" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="353" y="92" fill="#34d399" fontSize="9" fontFamily="monospace">{'<button class="btn btn-primary active">'}</text>
      <text x="345" y="122" fill={textColor} fontSize="8">• Múltiples elementos pueden compartir la misma clase</text>
      <text x="345" y="137" fill={textColor} fontSize="8">• Especificidad CSS equilibrada: (0, 0, 1, 0)</text>
      <text x="345" y="152" fill={textColor} fontSize="8">• Permite componer múltiples clases separadas por espacio</text>
      <text x="345" y="172" fill="#10b981" fontSize="8" fontWeight="bold">Acceso JS: document.querySelectorAll(&quot;.btn&quot;)</text>
    </svg>
  );
  },

  "html-semantic-text-formatting": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#f59e0b" fontWeight="700" fontSize="12">Semántica vs Estilismo Puro en Formato de Texto</text>
      
      {/* strong vs b */}
      <rect x="25" y="50" width="285" height="140" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="38" y="72" fill="#3b82f6" fontWeight="700" fontSize="11">{"<strong> vs <b> (Negritas)"}</text>
      <rect x="38" y="82" width="258" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="45" y="98" fill="#60a5fa" fontSize="8" fontFamily="monospace">{"<strong>Urgente</strong>"}</text>
      <text x="45" y="112" fill={subtextColor} fontSize="8">Semántica: Gran importancia (Screen Reader eleva voz)</text>
      <rect x="38" y="130" width="258" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="45" y="146" fill="#93c5fd" fontSize="8" fontFamily="monospace">{"<b>Producto</b>"}</text>
      <text x="45" y="160" fill={subtextColor} fontSize="8">Estilístico: Solo pone texto en negrita, sin valor semántico</text>

      {/* em vs i */}
      <rect x="330" y="50" width="285" height="140" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="345" y="72" fill="#8b5cf6" fontWeight="700" fontSize="11">{"<em> vs <i> (Cursivas)"}</text>
      <rect x="345" y="82" width="255" height="42" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="352" y="98" fill="#a78bfa" fontSize="8" fontFamily="monospace">{"<em>sí</em> lo sabía"}</text>
      <text x="352" y="112" fill={subtextColor} fontSize="8">Semántica: Énfasis verbal que cambia el sentido de la frase</text>
      <rect x="345" y="130" width="255" height="42" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="352" y="146" fill="#c4b5fd" fontSize="8" fontFamily="monospace">{"<i>Homo sapiens</i>"}</text>
      <text x="352" y="160" fill={subtextColor} fontSize="8">Estilístico: Voz alternativa, términos técnicos o latín</text>
    </svg>
  );
  },

  "html-meta-head-graph": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#818cf8" fontWeight="700" fontSize="12">{"Ecosistema de Meta-Etiquetas en el <head>"}</text>
      
      {/* Viewport Card */}
      <rect x="25" y="50" width="135" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="72" fill="#3b82f6" fontWeight="bold" fontSize="10">1. Responsive Viewport</text>
      <rect x="33" y="82" width="119" height="40" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="38" y="98" fill="#60a5fa" fontSize="7" fontFamily="monospace">name=&quot;viewport&quot;</text>
      <text x="38" y="112" fill="#93c5fd" fontSize="7" fontFamily="monospace">width=device-width</text>
      <text x="35" y="142" fill={textColor} fontSize="8">Escala inicial 1.0</text>
      <text x="35" y="156" fill="#3b82f6" fontSize="8" fontWeight="bold">Obligatorio para móvil</text>

      {/* SEO Card */}
      <rect x="175" y="50" width="135" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="185" y="72" fill="#10b981" fontWeight="bold" fontSize="10">2. SEO &amp; Indexación</text>
      <rect x="183" y="82" width="119" height="40" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="188" y="98" fill="#34d399" fontSize="7" fontFamily="monospace">name=&quot;description&quot;</text>
      <text x="188" y="112" fill="#a7f3d0" fontSize="7" fontFamily="monospace">name=&quot;robots&quot;</text>
      <text x="185" y="142" fill={textColor} fontSize="8">Snippet de Google</text>
      <text x="185" y="156" fill="#10b981" fontSize="8" fontWeight="bold">index, follow</text>

      {/* Open Graph Card */}
      <rect x="325" y="50" width="135" height="140" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="335" y="72" fill="#8b5cf6" fontWeight="bold" fontSize="10">3. Redes Sociales (OG)</text>
      <rect x="333" y="82" width="119" height="40" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="338" y="98" fill="#a78bfa" fontSize="7" fontFamily="monospace">property=&quot;og:title&quot;</text>
      <text x="338" y="112" fill="#c4b5fd" fontSize="7" fontFamily="monospace">property=&quot;og:image&quot;</text>
      <text x="335" y="142" fill={textColor} fontSize="8">Tarjetas en Twitter/X,</text>
      <text x="335" y="156" fill="#8b5cf6" fontSize="8" fontWeight="bold">LinkedIn y WhatsApp</text>

      {/* Encoding & Security */}
      <rect x="475" y="50" width="140" height="140" rx="6" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="485" y="72" fill="#f59e0b" fontWeight="bold" fontSize="10">4. Charset &amp; Canonical</text>
      <rect x="483" y="82" width="124" height="40" rx="3" fill={isDark ? "#292524" : "#ffffff"} />
      <text x="488" y="98" fill="#fbbf24" fontSize="7" fontFamily="monospace">charset=&quot;UTF-8&quot;</text>
      <text x="488" y="112" fill="#fde68a" fontSize="7" fontFamily="monospace">rel=&quot;canonical&quot;</text>
      <text x="485" y="142" fill={textColor} fontSize="8">Caracteres especiales</text>
      <text x="485" y="156" fill="#f59e0b" fontSize="8" fontWeight="bold">Cero contenido duplicado</text>
    </svg>
  );
  },

  "html-lists-types": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#10b981" fontWeight="700" fontSize="12">{"Tipos de Listas en HTML: <ul>, <ol> y <dl>"}</text>
      
      {/* ul */}
      <rect x="25" y="50" width="180" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="38" y="72" fill="#3b82f6" fontWeight="bold" fontSize="11">{"<ul> (No Ordenada)"}</text>
      <text x="38" y="88" fill={subtextColor} fontSize="8">Sin jerarquía o secuencia:</text>
      <rect x="38" y="98" width="154" height="46" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="45" y="114" fill="#60a5fa" fontSize="8" fontFamily="monospace">• React 19</text>
      <text x="45" y="128" fill="#60a5fa" fontSize="8" fontFamily="monospace">• TypeScript 5</text>
      <text x="38" y="162" fill={textColor} fontSize="8">Ideal para menús de navegación</text>
      <text x="38" y="176" fill="#3b82f6" fontSize="8" fontWeight="bold">Viñetas por defecto (bullets)</text>

      {/* ol */}
      <rect x="230" y="50" width="180" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="242" y="72" fill="#10b981" fontWeight="bold" fontSize="11">{"<ol> (Ordenada Secuencial)"}</text>
      <text x="242" y="88" fill={subtextColor} fontSize="8">Pasos con orden obligatorio:</text>
      <rect x="242" y="98" width="156" height="46" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="249" y="114" fill="#34d399" fontSize="8" fontFamily="monospace">1. git checkout -b feature</text>
      <text x="249" y="128" fill="#34d399" fontSize="8" fontFamily="monospace">2. pnpm run build</text>
      <text x="242" y="162" fill={textColor} fontSize="8">Recetas, rankings, algoritmos</text>
      <text x="242" y="176" fill="#10b981" fontSize="8" fontWeight="bold">Numeración automática (1, 2, 3)</text>

      {/* dl */}
      <rect x="435" y="50" width="180" height="140" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="447" y="72" fill="#8b5cf6" fontWeight="bold" fontSize="11">{"<dl> (Lista de Definiciones)"}</text>
      <text x="447" y="88" fill={subtextColor} fontSize="8">Pares Término / Descripción:</text>
      <rect x="447" y="98" width="156" height="46" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="454" y="114" fill="#a78bfa" fontSize="8" fontFamily="monospace">{"<dt> DNS </dt>"}</text>
      <text x="454" y="128" fill="#c4b5fd" fontSize="8" fontFamily="monospace">{"<dd> Traduce dominios </dd>"}</text>
      <text x="447" y="162" fill={textColor} fontSize="8">Glosarios, metadata clave-valor</text>
      <text x="447" y="176" fill="#8b5cf6" fontSize="8" fontWeight="bold">Altamente accesible para lectores</text>
    </svg>
  );
  },

  "html-form-lifecycle": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#818cf8" fontWeight="700" fontSize="12">Arquitectura y Ciclo de Vida de un Formulario HTML5</text>
      
      {/* Form structure */}
      <rect x="25" y="50" width="180" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="72" fill="#3b82f6" fontWeight="bold" fontSize="10">1. Agrupación Accesible</text>
      <rect x="35" y="82" width="160" height="45" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="42" y="98" fill="#60a5fa" fontSize="7" fontFamily="monospace">{"<fieldset> <legend>Datos</legend>"}</text>
      <text x="42" y="112" fill="#a5b4fc" fontSize="7" fontFamily="monospace">{"<label for=\"email\">Email</label>"}</text>
      <text x="35" y="145" fill={textColor} fontSize="8">Asociación 1:1 entre etiqueta</text>
      <text x="35" y="160" fill="#3b82f6" fontSize="8" fontWeight="bold">e input para a11y</text>

      {/* Validation */}
      <rect x="230" y="50" width="180" height="140" rx="6" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="240" y="72" fill="#f59e0b" fontWeight="bold" fontSize="10">2. Validación Nativa</text>
      <rect x="240" y="82" width="160" height="45" rx="3" fill={isDark ? "#292524" : "#ffffff"} />
      <text x="247" y="98" fill="#fbbf24" fontSize="7" fontFamily="monospace">required • type=&quot;email&quot;</text>
      <text x="247" y="112" fill="#fde68a" fontSize="7" fontFamily="monospace">pattern=&quot;...&quot; • minlength=&quot;8&quot;</text>
      <text x="240" y="145" fill={textColor} fontSize="8">Constraint Validation API</text>
      <text x="240" y="160" fill="#f59e0b" fontSize="8" fontWeight="bold">0 líneas de JS requeridas</text>

      {/* Submission */}
      <rect x="435" y="50" width="180" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="445" y="72" fill="#10b981" fontWeight="bold" fontSize="10">3. Envío y Codificación</text>
      <rect x="445" y="82" width="160" height="45" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="452" y="98" fill="#34d399" fontSize="7" fontFamily="monospace">action=&quot;/api/login&quot;</text>
      <text x="452" y="112" fill="#a7f3d0" fontSize="7" fontFamily="monospace">method=&quot;POST&quot; • enctype</text>
      <text x="445" y="145" fill={textColor} fontSize="8">application/x-www-form</text>
      <text x="445" y="160" fill="#10b981" fontSize="8" fontWeight="bold">o multipart/form-data</text>

      <path d="M208 110 L226 110" stroke="#f59e0b" strokeWidth="1.5" />
      <path d="M413 110 L431 110" stroke="#10b981" strokeWidth="1.5" />
    </svg>
  );
  },

  "html-display-modes": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#38bdf8" fontWeight="700" fontSize="12">Comparativa de Modelos de Display: inline vs inline-block vs block</text>
      
      {/* inline */}
      <rect x="25" y="52" width="180" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="74" fill="#3b82f6" fontWeight="bold" fontSize="11">display: inline</text>
      <rect x="35" y="85" width="160" height="30" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="42" y="104" fill="#60a5fa" fontSize="8" fontFamily="monospace">Fluye en el texto</text>
      <text x="35" y="130" fill={textColor} fontSize="8">✗ Ignora width y height</text>
      <text x="35" y="144" fill={textColor} fontSize="8">✗ Ignora margin vertical</text>
      <text x="35" y="162" fill={subtextColor} fontSize="8">span, a, strong, em</text>

      {/* inline-block */}
      <rect x="230" y="52" width="180" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="240" y="74" fill="#10b981" fontWeight="bold" fontSize="11">display: inline-block</text>
      <rect x="240" y="85" width="160" height="30" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="247" y="104" fill="#34d399" fontSize="8" fontFamily="monospace">En línea + Dimensiones</text>
      <text x="240" y="130" fill={textColor} fontSize="8">✓ Acepta width y height</text>
      <text x="240" y="144" fill={textColor} fontSize="8">✓ Respeta margin y padding</text>
      <text x="240" y="162" fill="#10b981" fontSize="8" fontWeight="bold">button, img, input</text>

      {/* block */}
      <rect x="435" y="52" width="180" height="140" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="445" y="74" fill="#8b5cf6" fontWeight="bold" fontSize="11">display: block</text>
      <rect x="445" y="85" width="160" height="30" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="452" y="104" fill="#a78bfa" fontSize="8" fontFamily="monospace">Salto de línea forzado</text>
      <text x="445" y="130" fill={textColor} fontSize="8">✓ Ocupa 100% de la fila</text>
      <text x="445" y="144" fill={textColor} fontSize="8">✓ Control total de caja</text>
      <text x="445" y="162" fill="#8b5cf6" fontSize="8" fontWeight="bold">div, p, h1, section</text>
    </svg>
  );
  },

  "html-script-loading": ({ isDark, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="34" fill="#f59e0b" fontWeight="700" fontSize="12">{"Estrategias de Carga de Scripts: Normal vs async vs defer"}</text>
      
      {/* Normal */}
      <text x="30" y="60" fill="#ef4444" fontWeight="bold" fontSize="10">{"Normal <script> (Bloqueante):"}</text>
      <rect x="190" y="48" width="100" height="18" rx="3" fill="#3b82f6" />
      <text x="240" y="61" fill="#ffffff" fontSize="8" textAnchor="middle">HTML Parse</text>
      <rect x="295" y="48" width="90" height="18" rx="3" fill="#ef4444" />
      <text x="340" y="61" fill="#ffffff" fontSize="8" textAnchor="middle">Fetch &amp; Exec JS</text>
      <rect x="390" y="48" width="100" height="18" rx="3" fill="#3b82f6" />
      <text x="440" y="61" fill="#ffffff" fontSize="8" textAnchor="middle">Resume Parse</text>
      <text x="500" y="61" fill="#ef4444" fontSize="8">⚠️ Bloquea FCP</text>

      {/* Async */}
      <text x="30" y="105" fill="#f59e0b" fontWeight="bold" fontSize="10">{"<script async>:"}</text>
      <rect x="190" y="93" width="180" height="18" rx="3" fill="#3b82f6" />
      <text x="280" y="106" fill="#ffffff" fontSize="8" textAnchor="middle">HTML Parsing Continuo</text>
      <rect x="190" y="113" width="120" height="14" rx="2" fill="#a855f7" />
      <text x="250" y="124" fill="#ffffff" fontSize="7" textAnchor="middle">Fetch Paralelo</text>
      <rect x="375" y="93" width="70" height="18" rx="3" fill="#f59e0b" />
      <text x="410" y="106" fill="#ffffff" fontSize="8" textAnchor="middle">Exec JS</text>
      <text x="500" y="106" fill="#f59e0b" fontSize="8">Orden impredecible</text>

      {/* Defer */}
      <text x="30" y="160" fill="#10b981" fontWeight="bold" fontSize="10">{"<script defer> (Estándar):"}</text>
      <rect x="190" y="148" width="230" height="18" rx="3" fill="#3b82f6" />
      <text x="305" y="161" fill="#ffffff" fontSize="8" textAnchor="middle">HTML Parsing Completo Sin Pausa</text>
      <rect x="190" y="168" width="150" height="14" rx="2" fill="#a855f7" />
      <text x="265" y="179" fill="#ffffff" fontSize="7" textAnchor="middle">Fetch Paralelo (Background)</text>
      <rect x="425" y="148" width="100" height="18" rx="3" fill="#10b981" />
      <text x="475" y="161" fill="#ffffff" fontSize="8" textAnchor="middle">Exec en Orden</text>
      <text x="535" y="161" fill="#10b981" fontSize="8" fontWeight="bold">✓ 0 Bloqueo</text>
    </svg>
  );
  },

  "html-dataset-binding": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#818cf8" fontWeight="700" fontSize="12">Puente de Custom Data Attributes (data-*): HTML ➔ CSS ➔ JavaScript</text>
      
      {/* HTML Source */}
      <rect x="25" y="52" width="180" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="74" fill="#3b82f6" fontWeight="bold" fontSize="10">1. Marcado HTML</text>
      <rect x="35" y="85" width="160" height="45" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="40" y="101" fill="#60a5fa" fontSize="7" fontFamily="monospace">{'<div data-user-id="42"'}</text>
      <text x="40" y="115" fill="#a5b4fc" fontSize="7" fontFamily="monospace">{'     data-is-active="true">'}</text>
      <text x="35" y="148" fill={textColor} fontSize="8">Prefijo data- kebab-case</text>
      <text x="35" y="162" fill="#3b82f6" fontSize="8" fontWeight="bold">Metadatos embebidos</text>

      {/* CSS Selector */}
      <rect x="230" y="52" width="180" height="140" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="240" y="74" fill="#818cf8" fontWeight="bold" fontSize="10">2. Selector CSS</text>
      <rect x="240" y="85" width="160" height="45" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="245" y="101" fill="#c7d2fe" fontSize="7" fontFamily="monospace">{'[data-is-active="true"] {'}</text>
      <text x="245" y="115" fill="#a5b4fc" fontSize="7" fontFamily="monospace">{'  border-color: #10b981; }'}</text>
      <text x="240" y="148" fill={textColor} fontSize="8">Estilizado condicional</text>
      <text x="240" y="162" fill="#818cf8" fontSize="8" fontWeight="bold">Sin mutar clases CSS</text>

      {/* JS API */}
      <rect x="435" y="52" width="180" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="445" y="74" fill="#10b981" fontWeight="bold" fontSize="10">3. JavaScript Dataset</text>
      <rect x="445" y="85" width="160" height="45" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="450" y="101" fill="#34d399" fontSize="7" fontFamily="monospace">el.dataset.userId // &quot;42&quot;</text>
      <text x="450" y="115" fill="#a7f3d0" fontSize="7" fontFamily="monospace">el.dataset.isActive = &quot;false&quot;</text>
      <text x="445" y="148" fill={textColor} fontSize="8">Conversión a camelCase</text>
      <text x="445" y="162" fill="#10b981" fontSize="8" fontWeight="bold">Lectura/escritura reactiva</text>

      <path d="M208 112 L226 112" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M413 112 L431 112" stroke="#10b981" strokeWidth="1.5" />
    </svg>
  );
  },

  "html-a11y-pillars": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#10b981" fontWeight="700" fontSize="12">Los 4 Pilares Fundamentales de Accesibilidad WCAG (POUR)</text>
      
      {/* P: Perceptible */}
      <rect x="25" y="52" width="135" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="74" fill="#3b82f6" fontWeight="bold" fontSize="11">1. Perceptible</text>
      <rect x="33" y="85" width="119" height="42" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="38" y="102" fill="#60a5fa" fontSize="7" fontFamily="monospace">alt=&quot;Descripción&quot;</text>
      <text x="38" y="116" fill="#93c5fd" fontSize="7" fontFamily="monospace">Contraste 4.5:1</text>
      <text x="35" y="148" fill={textColor} fontSize="8">Información detectable</text>
      <text x="35" y="162" fill="#3b82f6" fontSize="8" fontWeight="bold">por varios sentidos</text>

      {/* O: Operable */}
      <rect x="175" y="52" width="135" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="185" y="74" fill="#10b981" fontWeight="bold" fontSize="11">2. Operable</text>
      <rect x="183" y="85" width="119" height="42" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="188" y="102" fill="#34d399" fontSize="7" fontFamily="monospace">Tab / Teclado 100%</text>
      <text x="188" y="116" fill="#a7f3d0" fontSize="7" fontFamily="monospace">:focus-visible</text>
      <text x="185" y="148" fill={textColor} fontSize="8">Sin trampas de foco</text>
      <text x="185" y="162" fill="#10b981" fontSize="8" fontWeight="bold">Skip-to-content links</text>

      {/* U: Understandable */}
      <rect x="325" y="52" width="135" height="140" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="335" y="74" fill="#8b5cf6" fontWeight="bold" fontSize="11">3. Comprensible</text>
      <rect x="333" y="85" width="119" height="42" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="338" y="102" fill="#a78bfa" fontSize="7" fontFamily="monospace">lang=&quot;es&quot; • Labels</text>
      <text x="338" y="116" fill="#c4b5fd" fontSize="7" fontFamily="monospace">aria-describedby</text>
      <text x="335" y="148" fill={textColor} fontSize="8">Mensajes de error</text>
      <text x="335" y="162" fill="#8b5cf6" fontSize="8" fontWeight="bold">claros y orientados</text>

      {/* R: Robust */}
      <rect x="475" y="52" width="140" height="140" rx="6" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="485" y="74" fill="#f59e0b" fontWeight="bold" fontSize="11">4. Robusto</text>
      <rect x="483" y="85" width="124" height="42" rx="3" fill={isDark ? "#292524" : "#ffffff"} />
      <text x="488" y="102" fill="#fbbf24" fontSize="7" fontFamily="monospace">HTML5 Semántico</text>
      <text x="488" y="116" fill="#fde68a" fontSize="7" fontFamily="monospace">Roles WAI-ARIA</text>
      <text x="485" y="148" fill={textColor} fontSize="8">Compatible con screen</text>
      <text x="485" y="162" fill="#f59e0b" fontSize="8" fontWeight="bold">readers (NVDA, JAWS)</text>
    </svg>
  );
  },

  "html-responsive-images": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#38bdf8" fontWeight="700" fontSize="12">{"Negociación Inteligente de Imágenes Responsivas (<picture> y srcset)"}</text>
      
      {/* Mobile query */}
      <rect x="25" y="52" width="180" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="74" fill="#3b82f6" fontWeight="bold" fontSize="10">Móvil (Viewport &lt; 640px)</text>
      <rect x="35" y="85" width="160" height="45" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="40" y="102" fill="#60a5fa" fontSize="8" fontFamily="monospace">img-400w.avif (18 KB)</text>
      <text x="40" y="116" fill="#34d399" fontSize="8">Descarga ultra ligera</text>
      <text x="35" y="148" fill={textColor} fontSize="8">Ahorra 85% de datos móviles</text>
      <text x="35" y="162" fill="#3b82f6" fontSize="8" fontWeight="bold">FCP &amp; LCP sub-segundo</text>

      {/* Tablet query */}
      <rect x="230" y="52" width="180" height="140" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="240" y="74" fill="#818cf8" fontWeight="bold" fontSize="10">Tablet (640px a 1024px)</text>
      <rect x="240" y="85" width="160" height="45" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="245" y="102" fill="#a5b4fc" fontSize="8" fontFamily="monospace">img-800w.webp (45 KB)</text>
      <text x="245" y="116" fill="#6ee7b7" fontSize="8">Resolución equilibrada</text>
      <text x="240" y="148" fill={textColor} fontSize="8">sizes=&quot;(max-width: 1024px) 50vw&quot;</text>
      <text x="240" y="162" fill="#818cf8" fontSize="8" fontWeight="bold">Formato WebP moderno</text>

      {/* Desktop / Retina */}
      <rect x="435" y="52" width="180" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="445" y="74" fill="#10b981" fontWeight="bold" fontSize="10">Desktop Retina (&gt;1024px, 2x)</text>
      <rect x="445" y="85" width="160" height="45" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="450" y="102" fill="#34d399" fontSize="8" fontFamily="monospace">img-1200w.avif (120 KB)</text>
      <text x="450" y="116" fill="#a7f3d0" fontSize="8">Máxima nitidez 4K</text>
      <text x="445" y="148" fill={textColor} fontSize="8">El navegador elige solo</text>
      <text x="445" y="162" fill="#10b981" fontSize="8" fontWeight="bold">la variante óptima</text>
    </svg>
  );
  },

  "html-iframe-vs-webcomponents": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* iframe */}
      <rect x="25" y="35" width="285" height="155" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="38" y="58" fill="#ef4444" fontWeight="700" fontSize="11">{"<iframe> (Aislamiento de Contexto Pesado)"}</text>
      <rect x="38" y="70" width="258" height="42" rx="4" fill={isDark ? "#1c1917" : "#ffffff"} />
      <text x="45" y="88" fill="#f87171" fontSize="8" fontFamily="monospace">Nuevo window &amp; document context</text>
      <text x="45" y="102" fill="#fca5a5" fontSize="8">Instancia separada del navegador</text>
      <text x="38" y="130" fill={textColor} fontSize="8">• Alto consumo de memoria RAM y CPU</text>
      <text x="38" y="145" fill={textColor} fontSize="8">• Comunicación lenta mediante window.postMessage</text>
      <text x="38" y="160" fill="#ef4444" fontSize="8" fontWeight="bold">Uso: incrustar widgets externos, pasarelas de pago</text>

      {/* Web Components */}
      <rect x="330" y="35" width="285" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="345" y="58" fill="#10b981" fontWeight="700" fontSize="11">Web Components (Encapsulación Nativa Ligera)</text>
      <rect x="345" y="70" width="255" height="42" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="352" y="88" fill="#34d399" fontSize="8" fontFamily="monospace">Mismo documento • Shadow DOM Tree</text>
      <text x="352" y="102" fill="#a7f3d0" fontSize="8">Aislamiento de estilos CSS nativo</text>
      <text x="345" y="130" fill={textColor} fontSize="8">• 0 sobrecarga de contexto de navegación</text>
      <text x="345" y="145" fill={textColor} fontSize="8">• Eventos y propiedades DOM nativos directos</text>
      <text x="345" y="160" fill="#10b981" fontSize="8" fontWeight="bold">Uso: Design Systems, microfrontends, UI modular</text>
    </svg>
  );
  },

  "html-global-attributes": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#818cf8" fontWeight="700" fontSize="12">Atributos Globales Interactivos Esenciales en HTML5</text>
      
      {/* hidden */}
      <rect x="25" y="52" width="135" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="74" fill="#3b82f6" fontWeight="bold" fontSize="11">hidden</text>
      <rect x="33" y="85" width="119" height="38" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="38" y="101" fill="#60a5fa" fontSize="8" fontFamily="monospace">hidden=&quot;until-found&quot;</text>
      <text x="38" y="114" fill="#a5b4fc" fontSize="7">Buscable por Ctrl+F</text>
      <text x="35" y="142" fill={textColor} fontSize="8">Oculta elemento</text>
      <text x="35" y="156" fill="#3b82f6" fontSize="8" fontWeight="bold">de forma semántica</text>

      {/* contenteditable */}
      <rect x="175" y="52" width="135" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="185" y="74" fill="#10b981" fontWeight="bold" fontSize="11">contenteditable</text>
      <rect x="183" y="85" width="119" height="38" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="188" y="101" fill="#34d399" fontSize="8" fontFamily="monospace">contenteditable=&quot;true&quot;</text>
      <text x="188" y="114" fill="#a7f3d0" fontSize="7">Editor en vivo</text>
      <text x="185" y="142" fill={textColor} fontSize="8">Permite edición WYSIWYG</text>
      <text x="185" y="156" fill="#10b981" fontSize="8" fontWeight="bold">directa en el browser</text>

      {/* tabindex */}
      <rect x="325" y="52" width="135" height="140" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="335" y="74" fill="#8b5cf6" fontWeight="bold" fontSize="11">tabindex</text>
      <rect x="333" y="85" width="119" height="38" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="338" y="101" fill="#a78bfa" fontSize="8" fontFamily="monospace">0 (Foco natural)</text>
      <text x="338" y="114" fill="#c4b5fd" fontSize="8" fontFamily="monospace">-1 (Foco JS por .focus)</text>
      <text x="335" y="142" fill={textColor} fontSize="8">Orden de navegación</text>
      <text x="335" y="156" fill="#8b5cf6" fontSize="8" fontWeight="bold">por teclado</text>

      {/* draggable & inert */}
      <rect x="475" y="52" width="140" height="140" rx="6" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="485" y="74" fill="#f59e0b" fontWeight="bold" fontSize="11">inert</text>
      <rect x="483" y="85" width="124" height="38" rx="3" fill={isDark ? "#292524" : "#ffffff"} />
      <text x="488" y="101" fill="#fbbf24" fontSize="8" fontFamily="monospace">inert=&quot;true&quot;</text>
      <text x="488" y="114" fill="#fde68a" fontSize="7">Congela interacción</text>
      <text x="485" y="142" fill={textColor} fontSize="8">Ignora clics, foco</text>
      <text x="485" y="156" fill="#f59e0b" fontSize="8" fontWeight="bold">y lectores de pantalla</text>
    </svg>
  );
  },

  "html-template-slot": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* template */}
      <rect x="25" y="35" width="285" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="38" y="58" fill="#3b82f6" fontWeight="700" fontSize="11">{"<template> (Contenido Inerte en Memoria)"}</text>
      <rect x="38" y="70" width="258" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="45" y="88" fill="#60a5fa" fontSize="8" fontFamily="monospace">{"<template id=\"card\"> <img> </template>"}</text>
      <text x="45" y="102" fill="#93c5fd" fontSize="8">Almacenado en DocumentFragment</text>
      <text x="38" y="130" fill={textColor} fontSize="8">• No ejecuta scripts ni descarga imágenes</text>
      <text x="38" y="145" fill={textColor} fontSize="8">• Se clona a alta velocidad con cloneNode(true)</text>
      <text x="38" y="162" fill="#3b82f6" fontSize="8" fontWeight="bold">0 coste de renderizado inicial</text>

      {/* slot */}
      <rect x="330" y="35" width="285" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="345" y="58" fill="#8b5cf6" fontWeight="700" fontSize="11">{"<slot> (Proyección en Shadow DOM)"}</text>
      <rect x="345" y="70" width="255" height="42" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="352" y="88" fill="#a78bfa" fontSize="8" fontFamily="monospace">{"<slot name=\"header\"> Título </slot>"}</text>
      <text x="352" y="102" fill="#c4b5fd" fontSize="8">Punto de anclaje de contenido</text>
      <text x="345" y="130" fill={textColor} fontSize="8">• Conecta Light DOM del usuario con Shadow Tree</text>
      <text x="345" y="145" fill={textColor} fontSize="8">• Admite slots nombrados y fallback por defecto</text>
      <text x="345" y="162" fill="#8b5cf6" fontSize="8" fontWeight="bold">Base de componentes componibles</text>
    </svg>
  );
  },

  "html-lazy-loading-threshold": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="34" fill="#10b981" fontWeight="700" fontSize="12">Mecanismo Nativo de Carga Perezosa (loading=&quot;lazy&quot;)</text>
      
      {/* Viewport Above the fold */}
      <rect x="30" y="50" width="270" height="135" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="42" y="72" fill="#10b981" fontWeight="bold" fontSize="11">Viewport Visible (Above the Fold)</text>
      <rect x="42" y="85" width="245" height="40" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="50" y="102" fill="#34d399" fontSize="8" fontFamily="monospace">{"<img src=\"hero.jpg\" loading=\"eager\">"}</text>
      <text x="50" y="116" fill="#a7f3d0" fontSize="8">Descarga Inmediata (Prioridad Alta)</text>
      <text x="42" y="145" fill={textColor} fontSize="8">Visible al cargar la pantalla</text>
      <text x="42" y="160" fill="#10b981" fontSize="8" fontWeight="bold">Impacta directamente el LCP</text>

      {/* Scroll threshold */}
      <path d="M315 50 L315 185" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />
      <text x="315" y="198" fill="#f59e0b" fontSize="8" textAnchor="middle">Umbral de Scroll</text>

      {/* Below the fold */}
      <rect x="340" y="50" width="270" height="135" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="352" y="72" fill="#3b82f6" fontWeight="bold" fontSize="11">Fuera del Viewport (Below the Fold)</text>
      <rect x="352" y="85" width="245" height="40" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="360" y="102" fill="#60a5fa" fontSize="8" fontFamily="monospace">{"<img src=\"footer.jpg\" loading=\"lazy\">"}</text>
      <text x="360" y="116" fill="#93c5fd" fontSize="8">Petición en Espera (0 bytes iniciales)</text>
      <text x="352" y="145" fill={textColor} fontSize="8">El navegador dispara la descarga solo cuando</text>
      <text x="352" y="160" fill="#3b82f6" fontSize="8" fontWeight="bold">el usuario se aproxima con el scroll</text>
    </svg>
  );
  },

  "html-vs-xhtml-parsing": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* HTML5 */}
      <rect x="25" y="35" width="285" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="40" y="58" fill="#10b981" fontWeight="700" fontSize="12">HTML5 (Parser Tolerante a Errores)</text>
      <rect x="40" y="70" width="255" height="35" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="48" y="90" fill="#34d399" fontSize="8" fontFamily="monospace">{"<p>Texto sin cerrar <div>Bloque</div>"}</text>
      <text x="40" y="122" fill={textColor} fontSize="8">• Algoritmo de parsing formalizado por WHATWG</text>
      <text x="40" y="137" fill={textColor} fontSize="8">• Cierra etiquetas automáticamente sin romper la vista</text>
      <text x="40" y="152" fill={textColor} fontSize="8">• Sintaxis flexible (mayúsculas o minúsculas permitidas)</text>
      <text x="40" y="172" fill="#10b981" fontSize="8" fontWeight="bold">✓ Resiliente a fallos de sintaxis en producción</text>

      {/* XHTML */}
      <rect x="330" y="35" width="285" height="155" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="345" y="58" fill="#ef4444" fontWeight="700" fontSize="12">XHTML (Parser XML Estricto)</text>
      <rect x="345" y="70" width="255" height="35" rx="4" fill={isDark ? "#1c1917" : "#ffffff"} />
      <text x="353" y="90" fill="#f87171" fontSize="8" fontFamily="monospace">{"<br> (Sin barra de cierre />)"}</text>
      <text x="345" y="122" fill={textColor} fontSize="8">⚠️ Exige sintaxis XML 100% bien formada</text>
      <text x="345" y="137" fill={textColor} fontSize="8">⚠️ Obliga a cerrar todas las etiquetas y usar minúsculas</text>
      <text x="345" y="152" fill={textColor} fontSize="8">⚠️ Un solo error detiene el renderizado por completo</text>
      <text x="345" y="172" fill="#ef4444" fontSize="8" fontWeight="bold">Error fatal: &quot;XML Parsing Error&quot; (Pantalla rota)</text>
    </svg>
  );
  },

  "html-semantic-seo-crawler": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#38bdf8" fontWeight="700" fontSize="12">Impacto del HTML Semántico en Motores de Búsqueda (SEO Crawlers)</text>
      
      {/* HTML Source */}
      <rect x="25" y="52" width="180" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="74" fill="#3b82f6" fontWeight="bold" fontSize="10">1. Árbol de Landmarks</text>
      <rect x="35" y="85" width="160" height="45" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="40" y="101" fill="#60a5fa" fontSize="7" fontFamily="monospace">{"<header> <nav> (Enlaces)"}</text>
      <text x="40" y="115" fill="#38bdf8" fontSize="7" fontFamily="monospace">{"<main> <article> <h1>"}</text>
      <text x="35" y="148" fill={textColor} fontSize="8">Estructura inequívoca</text>
      <text x="35" y="162" fill="#3b82f6" fontSize="8" fontWeight="bold">del contenido clave</text>

      {/* Crawler processing */}
      <rect x="230" y="52" width="180" height="140" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="240" y="74" fill="#818cf8" fontWeight="bold" fontSize="10">2. Googlebot Parser</text>
      <rect x="240" y="85" width="160" height="45" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="245" y="101" fill="#c7d2fe" fontSize="7" fontFamily="monospace">Extrae entidades clave</text>
      <text x="245" y="115" fill="#a5b4fc" fontSize="7" fontFamily="monospace">y jerarquía H1 ➔ H6</text>
      <text x="240" y="148" fill={textColor} fontSize="8">Indexa texto de article</text>
      <text x="240" y="162" fill="#818cf8" fontSize="8" fontWeight="bold">Ignora ruidos y ads</text>

      {/* Rich snippet */}
      <rect x="435" y="52" width="180" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="445" y="74" fill="#10b981" fontWeight="bold" fontSize="10">3. Rich Snippet en SERP</text>
      <rect x="445" y="85" width="160" height="45" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="450" y="101" fill="#34d399" fontSize="7" fontFamily="monospace">★★★★★ 4.9 (120 reviews)</text>
      <text x="450" y="115" fill="#a7f3d0" fontSize="7" fontFamily="monospace">Migas de pan: Cursos ➔ HTML</text>
      <text x="445" y="148" fill={textColor} fontSize="8">Mayor CTR orgánico</text>
      <text x="445" y="162" fill="#10b981" fontSize="8" fontWeight="bold">Posicionamiento top</text>

      <path d="M208 112 L226 112" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M413 112 L431 112" stroke="#10b981" strokeWidth="1.5" />
    </svg>
  );
  },

  "html-webcomponents-trio": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#8b5cf6" fontWeight="700" fontSize="12">La Tríada Estándar de APIs en Web Components Nativos</text>
      
      {/* Custom Elements */}
      <rect x="25" y="52" width="180" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="74" fill="#3b82f6" fontWeight="bold" fontSize="11">1. Custom Elements</text>
      <rect x="35" y="85" width="160" height="42" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="40" y="102" fill="#60a5fa" fontSize="7" fontFamily="monospace">customElements.define(</text>
      <text x="40" y="116" fill="#93c5fd" fontSize="7" fontFamily="monospace">  &apos;user-card&apos;, UserCard)</text>
      <text x="35" y="148" fill={textColor} fontSize="8">Crea etiquetas HTML propias</text>
      <text x="35" y="162" fill="#3b82f6" fontSize="8" fontWeight="bold">Ciclo de vida conectado</text>

      {/* Shadow DOM */}
      <rect x="230" y="52" width="180" height="140" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="240" y="74" fill="#8b5cf6" fontWeight="bold" fontSize="11">2. Shadow DOM</text>
      <rect x="240" y="85" width="160" height="42" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="245" y="102" fill="#a78bfa" fontSize="7" fontFamily="monospace">attachShadow({'{ mode: &apos;open&apos; }'})</text>
      <text x="245" y="116" fill="#c4b5fd" fontSize="7" fontFamily="monospace">Encapsula estilos CSS</text>
      <text x="240" y="148" fill={textColor} fontSize="8">0 colisiones de clases globales</text>
      <text x="240" y="162" fill="#8b5cf6" fontSize="8" fontWeight="bold">DOM totalmente aislado</text>

      {/* Templates & Slots */}
      <rect x="435" y="52" width="180" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="445" y="74" fill="#10b981" fontWeight="bold" fontSize="11">3. Templates &amp; Slots</text>
      <rect x="445" y="85" width="160" height="42" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="450" y="102" fill="#34d399" fontSize="7" fontFamily="monospace">{"<template> • <slot>"}</text>
      <text x="450" y="116" fill="#a7f3d0" fontSize="7" fontFamily="monospace">Proyección de contenido</text>
      <text x="445" y="148" fill={textColor} fontSize="8">Plantillas inertes clonables</text>
      <text x="445" y="162" fill="#10b981" fontSize="8" fontWeight="bold">Componibilidad pura</text>
    </svg>
  );
  },

  "html-content-models": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="34" fill="#f59e0b" fontWeight="700" fontSize="12">Content Models de HTML5 (Diagrama de Compatibilidad de Categorías)</text>
      
      {/* Flow Content Outer Circle */}
      <rect x="25" y="48" width="590" height="145" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="66" fill="#3b82f6" fontWeight="bold" fontSize="10">Flow Content (Casi todo elemento del body: div, p, a, section, table, form)</text>

      {/* Sectioning & Heading */}
      <rect x="40" y="78" width="170" height="100" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="1" />
      <text x="50" y="98" fill="#818cf8" fontWeight="bold" fontSize="9">Sectioning &amp; Heading</text>
      <text x="50" y="116" fill={textColor} fontSize="8">article, aside, nav, section</text>
      <text x="50" y="130" fill={textColor} fontSize="8">h1, h2, h3, h4, h5, h6</text>
      <text x="50" y="155" fill="#818cf8" fontSize="8">Estructura del documento</text>

      {/* Phrasing Content */}
      <rect x="225" y="78" width="190" height="100" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="235" y="98" fill="#10b981" fontWeight="bold" fontSize="9">Phrasing Content (Texto &amp; En línea)</text>
      <text x="235" y="116" fill={textColor} fontSize="8">span, strong, em, a, img, code</text>
      <text x="235" y="130" fill="#f87171" fontSize="8" fontWeight="bold">{"⚠️ <p> solo acepta Phrasing"}</text>
      <text x="235" y="155" fill="#10b981" fontSize="8">{"(Un <div> dentro de <p> es inválido)"}</text>

      {/* Interactive & Embedded */}
      <rect x="430" y="78" width="170" height="100" rx="6" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="440" y="98" fill="#f59e0b" fontWeight="bold" fontSize="9">Interactive &amp; Embedded</text>
      <text x="440" y="116" fill={textColor} fontSize="8">button, input, select, textarea</text>
      <text x="440" y="130" fill={textColor} fontSize="8">img, video, audio, canvas</text>
      <text x="440" y="155" fill="#f59e0b" fontSize="8">Interacción del usuario</text>
    </svg>
  );
  },

  "html-speculation-rules": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#10b981" fontWeight="700" fontSize="12">Speculation Rules API — Navegación Instantánea con 0ms TTFB Percibido</text>
      
      {/* Step 1: User Hover */}
      <rect x="25" y="52" width="180" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="74" fill="#3b82f6" fontWeight="bold" fontSize="10">1. Detección de Intención</text>
      <rect x="35" y="85" width="160" height="42" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="40" y="102" fill="#60a5fa" fontSize="8" fontFamily="monospace">Usuario pasa cursor (hover)</text>
      <text x="40" y="116" fill="#a5b4fc" fontSize="8">sobre enlace /cursos</text>
      <text x="35" y="148" fill={textColor} fontSize="8">Eagerness: &quot;moderate&quot;</text>
      <text x="35" y="162" fill="#3b82f6" fontSize="8" fontWeight="bold">Dispara la regla declarativa</text>

      {/* Step 2: Background Prerendering */}
      <rect x="230" y="52" width="180" height="140" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="240" y="74" fill="#818cf8" fontWeight="bold" fontSize="10">2. Prerender Invisible</text>
      <rect x="240" y="85" width="160" height="42" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="245" y="102" fill="#c7d2fe" fontSize="8" fontFamily="monospace">Renderiza en memoria RAM</text>
      <text x="245" y="116" fill="#a5b4fc" fontSize="8">Ejecuta HTML, CSS y JS</text>
      <text x="240" y="148" fill={textColor} fontSize="8">Página ya procesada</text>
      <text x="240" y="162" fill="#818cf8" fontSize="8" fontWeight="bold">0 impacto en hilo principal</text>

      {/* Step 3: Instant Activation */}
      <rect x="435" y="52" width="180" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="445" y="74" fill="#10b981" fontWeight="bold" fontSize="10">3. Activación Instantánea</text>
      <rect x="445" y="85" width="160" height="42" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="450" y="102" fill="#34d399" fontSize="8" fontFamily="monospace">Usuario hace click</text>
      <text x="450" y="116" fill="#a7f3d0" fontSize="8">Swap instantáneo de memoria</text>
      <text x="445" y="148" fill={textColor} fontSize="8">TTFB percibido: 0 ms</text>
      <text x="445" y="162" fill="#10b981" fontSize="8" fontWeight="bold">Experiencia de app nativa</text>

      <path d="M208 112 L226 112" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M413 112 L431 112" stroke="#10b981" strokeWidth="1.5" />
    </svg>
  );
  }
};
