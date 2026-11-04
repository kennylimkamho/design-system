import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";

export function validateChannelSvg(svg, key) {
  // Permit internal gradient/mask references, never external assets or active content.
  const refs = [...svg.matchAll(/url\(#([A-Za-z][\w-]*)\)/g)];
  for (const [, id] of refs)
    if (!svg.includes(`id="${id}"`)) throw new Error(`Missing SVG paint resource: ${id}`);
  const withoutLocalPaint = svg.replace(/url\(#[A-Za-z][\w-]*\)/g, "");
  if (!svg.includes("<svg") || /<(?:script|foreignObject|image)\b|<!ENTITY|@import|\bon\w+\s*=|javascript:|(?:href|url)\s*[=(]/i.test(withoutLocalPaint))
    throw new Error(`Active/external SVG content: ${key}`);
}

// Only provenance-listed artwork is embedded. Isolated <img> data URIs prevent
// vendor SVG IDs/styles from interfering with the surrounding document.
export async function loadChannelAssets(root) {
  const folder = path.join(root, "assets/brand/channels");
  const manifest = JSON.parse(await fs.readFile(path.join(folder, "manifest.json"), "utf8"));
  const assets = {};
  for (const entry of manifest.assets) {
    if (path.basename(entry.file) !== entry.file || assets[entry.key])
      throw new Error(`Invalid asset entry: ${entry.key}`);
    const bytes = await fs.readFile(path.join(folder, entry.file));
    if (createHash("sha256").update(bytes).digest("hex") !== entry.sha256)
      throw new Error(`Unreviewed asset change: ${entry.key}`);
    if (entry.mime === "image/svg+xml") {
      validateChannelSvg(bytes.toString("utf8"), entry.key);
    } else if (entry.mime !== "image/png" || bytes.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") {
      throw new Error(`Unsupported brand artwork: ${entry.key}`);
    }
    assets[entry.key] = `data:${entry.mime};base64,${bytes.toString("base64")}`;
  }
  return { manifest, assets };
}
