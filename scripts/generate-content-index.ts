import { writeFileSync } from "node:fs";
import { buildContentIndex, INDEX_PATH, renderContentIndex } from "./content-index";

const index = await buildContentIndex();
writeFileSync(INDEX_PATH, renderContentIndex(index));

const total = index.reduce((acc, section) => acc + section.questions.length, 0);
console.log(`✔ ${INDEX_PATH}: ${index.length} módulos, ${total} preguntas`);
