import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildHandbook, filename } from '../library/scripts/build-handbook.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { pages, version } = await buildHandbook();
const target = path.join(root, 'apps/docs/public/handbook');
await fs.mkdir(target, { recursive: true });
await fs.copyFile(path.join(root, 'library/handbook', filename), path.join(target, 'index.html'));
await fs.copyFile(path.join(root, 'library/handbook', filename), path.join(target, filename));
await fs.copyFile(path.join(root, 'library/handbook/agent-index.json'), path.join(target, 'agent-index.json'));
await fs.cp(path.join(root, 'library/handbook/pages'), path.join(target, 'pages'), { recursive: true });
console.log(`${version}: ${pages.length} handbook chapters ready for the site.`);
