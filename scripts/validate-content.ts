import { existsSync, readFileSync } from "node:fs";
import { sectionSchema } from "../src/content/content.schema";
import { getDiagramGroup, loadDiagramGroup } from "../src/features/diagrams/registry";
import { TDiagramType } from "../src/features/diagrams/diagram.types";
import { buildContentIndex, INDEX_PATH, loadAllSections, renderContentIndex } from "./content-index";

const errors: string[] = [];
const sections = await loadAllSections();
const seenTitles = new Map<string, string>();

for (const { id, section } of sections) {
  const parsed = sectionSchema.safeParse(section);
  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      const [, index] = issue.path;
      const title = typeof index === "number" ? section.questions[index]?.title : "";
      errors.push(`[${id}] ${title ? `"${title}" ` : ""}${issue.path.join(".")}: ${issue.message}`);
    }
  }

  for (const question of section.questions) {
    // El título es la clave del progreso guardado: debe ser único en todo el temario
    const previous = seenTitles.get(question.title);
    if (previous) errors.push(`[${id}] título duplicado (también en ${previous}): "${question.title}"`);
    seenTitles.set(question.title, id);

    const type = question.visualDiagram?.diagramType as TDiagramType;
    const group = type && getDiagramGroup(type);
    const registry = group && (await loadDiagramGroup(group));
    if (!registry || !registry[type]) {
      errors.push(`[${id}] "${question.title}": diagramType sin SVG registrado: ${type}`);
    }

    if (!existsSync(`public/icons/${section.icon}-white.svg`)) {
      errors.push(`[${id}] icono inexistente: public/icons/${section.icon}-white.svg`);
    }
  }
}

const expectedIndex = renderContentIndex(await buildContentIndex());
if (!existsSync(INDEX_PATH) || readFileSync(INDEX_PATH, "utf8") !== expectedIndex) {
  errors.push(`${INDEX_PATH} está desactualizado: ejecuta \`pnpm content:index\``);
}

const total = sections.reduce((acc, { section }) => acc + section.questions.length, 0);
if (errors.length > 0) {
  console.error(`✖ ${errors.length} problema(s) de contenido:\n${[...new Set(errors)].map((e) => `  - ${e}`).join("\n")}`);
  process.exit(1);
}
console.log(`✔ Contenido válido: ${sections.length} módulos, ${total} preguntas`);
