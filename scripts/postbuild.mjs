// Next.js 16 static export writes route-segment prefetch payloads as nested files, e.g.
// `__next.services/$d$slug/__PAGE__.txt`, but the client requests the flat name
// `__next.services.$d$slug.__PAGE__.txt`. On a plain static host such as GitHub Pages that
// mismatch produces 404s in the console. This copies each payload to the flat name too.
import { copyFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const out = fileURLToPath(new URL("../out/", import.meta.url));
let copied = 0;

/** Flatten every file under a `__next.*` directory into `<dir>.<sub>.<file>` beside it. */
function flatten(parent, dirName, rel = "") {
  const dir = join(parent, dirName, rel);
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const relPath = rel ? `${rel}/${name}` : name;
    if (statSync(full).isDirectory()) flatten(parent, dirName, relPath);
    else {
      copyFileSync(full, join(parent, `${dirName}.${relPath.replaceAll("/", ".")}`));
      copied++;
    }
  }
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (!statSync(join(dir, name)).isDirectory()) continue;
    if (name.startsWith("__next.")) flatten(dir, name);
    else walk(join(dir, name));
  }
}

walk(out);
console.log(`[postbuild] added ${copied} flat prefetch payload files`);
