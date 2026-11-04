import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'library/apps/storybook/storybook-static');
await fs.access(path.join(source, 'index.html'));
await fs.cp(source, path.join(root, 'apps/docs/public/lab'), { recursive: true });
console.log('Package-backed component lab ready for the site.');
