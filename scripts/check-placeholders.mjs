// Prints a loud warning listing every content item still marked isPlaceholder: true.
// Runs automatically before `npm run build`. Never fails the build; it only warns.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = fileURLToPath(new URL("../content/", import.meta.url));
const files = readdirSync(dir).filter((f) => f.endsWith(".ts"));
const found = [];

// Same-line identifiers first (single-line objects), then walk up to the item's start.
const TOP_LABEL = /^ {2,4}(?:name|title):\s*"([^"]+)"/;
const LABEL = /\b(?:name|label|title)\s*:\s*"([^"]+)"/;

for (const file of files) {
  const lines = readFileSync(join(dir, file), "utf8").split("\n");
  lines.forEach((line, i) => {
    if (/^\s*(\/\/|\*|\/\*)/.test(line) || !/isPlaceholder:\s*true/.test(line)) return;
    let label = "(unnamed item)";
    // Multi-line items: the item's own title/name sits at shallow indent, nested labels are deeper.
    for (let j = i; j >= Math.max(0, i - 25); j--) {
      const m = j === i && !/^\s*isPlaceholder/.test(lines[j]) ? lines[j].match(LABEL) : lines[j].match(TOP_LABEL);
      if (m) {
        label = m[1];
        break;
      }
    }
    found.push({ file: `content/${file}`, line: i + 1, label });
  });
}

const bar = "!".repeat(72);
if (found.length === 0) {
  console.log("\n[placeholders] None found. All content is marked as real.\n");
} else {
  console.warn(`\n${bar}`);
  console.warn(`  WARNING: ${found.length} PLACEHOLDER ITEMS STILL MARKED isPlaceholder: true`);
  console.warn("  Do NOT publish fake content as real. Replace it, or remove it.");
  console.warn(bar);
  for (const f of found) console.warn(`  - ${f.file}:${f.line}  ${f.label}`);
  console.warn(`${bar}\n`);
}
