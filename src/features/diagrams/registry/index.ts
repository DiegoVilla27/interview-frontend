import { DiagramRegistry, TDiagramType } from "../diagram.types";

/**
 * Cada grupo vive en `registry/<grupo>.diagrams.tsx` y se descarga como chunk
 * independiente la primera vez que se muestra un diagrama suyo.
 * Al añadir un diagrama, su diagramType debe cumplir la regla de su grupo.
 */
const DIAGRAM_GROUPS = {
  internet: {
    match: /^(http|url|router|websocket|tcp|ssl|security|quic|packet|mtls|ip-|internet|forward|firewall|domain|doh|dns|dhcp|ddos|cors|client|cdn|bgp|anycast)/,
    load: () => import("./internet.diagrams").then((m) => m.internetDiagrams)
  },
  html: { match: /^html-/, load: () => import("./html.diagrams").then((m) => m.htmlDiagrams) },
  css: { match: /^css-/, load: () => import("./css.diagrams").then((m) => m.cssDiagrams) },
  javascript: {
    match: /^(js-|event-loop)/,
    load: () => import("./javascript.diagrams").then((m) => m.javascriptDiagrams)
  },
  browser: { match: /^browser-/, load: () => import("./browser.diagrams").then((m) => m.browserDiagrams) },
  "web-components": {
    match: /^(wc-|web-components-|stencil-)/,
    load: () => import("./web-components.diagrams").then((m) => m.webComponentsDiagrams)
  },
  "version-control": {
    match: /^git-/,
    load: () => import("./version-control.diagrams").then((m) => m.versionControlDiagrams)
  },
  "package-managers": {
    match: /^pkg-/,
    load: () => import("./package-managers.diagrams").then((m) => m.packageManagersDiagrams)
  },
  "build-tools": {
    match: /^build-/,
    load: () => import("./build-tools.diagrams").then((m) => m.buildToolsDiagrams)
  },
  testing: { match: /^test(-|ing-)/, load: () => import("./testing.diagrams").then((m) => m.testingDiagrams) },
  typescript: {
    match: /^(ts-|typescript-)/,
    load: () => import("./typescript.diagrams").then((m) => m.typescriptDiagrams)
  },
  webapps: { match: /^webapp-/, load: () => import("./webapps.diagrams").then((m) => m.webappsDiagrams) },
  react: { match: /^react-/, load: () => import("./react.diagrams").then((m) => m.reactDiagrams) },
  "react-native": {
    match: /^rn-/,
    load: () => import("./react-native.diagrams").then((m) => m.reactNativeDiagrams)
  },
  angular: { match: /^ng-/, load: () => import("./angular.diagrams").then((m) => m.angularDiagrams) },
  ionic: { match: /^ionic-/, load: () => import("./ionic.diagrams").then((m) => m.ionicDiagrams) },
  flutter: { match: /^flutter-/, load: () => import("./flutter.diagrams").then((m) => m.flutterDiagrams) },
  solid: { match: /^solid-/, load: () => import("./solid.diagrams").then((m) => m.solidDiagrams) },
  cicd: { match: /^cicd-/, load: () => import("./cicd.diagrams").then((m) => m.cicdDiagrams) },
  "regular-expressions": {
    match: /^regex-/,
    load: () => import("./regular-expressions.diagrams").then((m) => m.regularExpressionsDiagrams)
  },
  "ui-ux": { match: /^uiux-/, load: () => import("./ui-ux.diagrams").then((m) => m.uiUxDiagrams) }
} satisfies Record<string, { match: RegExp; load: () => Promise<DiagramRegistry> }>;

export type TDiagramGroup = keyof typeof DIAGRAM_GROUPS;

export const DIAGRAM_GROUP_KEYS = Object.keys(DIAGRAM_GROUPS) as TDiagramGroup[];

export const getDiagramGroup = (type: TDiagramType): TDiagramGroup | undefined =>
  DIAGRAM_GROUP_KEYS.find((group) => DIAGRAM_GROUPS[group].match.test(type));

export const loadDiagramGroup = (group: TDiagramGroup): Promise<DiagramRegistry> =>
  DIAGRAM_GROUPS[group].load();
