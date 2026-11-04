import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, filename } from '../library/scripts/build-handbook.mjs';
import { sourceUrl, siteUrl } from '../library/handbook/src/site-config.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = await fs.readFile(path.join(root, 'library/handbook', filename), 'utf8');
const index = JSON.parse(await fs.readFile(path.join(root, 'library/handbook/agent-index.json'), 'utf8'));

test('the complete source chapter set survives migration, including component contracts', () => {
  assert.equal(pages.length, 75);
  assert.equal(new Set(index.chapters.map(p => p.id)).size, 75);
  assert.deepEqual(index.chapters.map(p => p.id), pages.map(p => p.id));
  for (const id of ['buttons', 'overlays', 'tables', 'implementation', 'content-timing', 'industry-whatsapp-flows-iab', 'transitions-reference']) {
    assert.ok(index.chapters.some(p => p.id === id));
    assert.ok(html.includes(`id="page-${id}"`));
  }
});

test('the new identity and source links resolve to this repository', async () => {
  assert.match(html, /<title>Product Design System/);
  assert.match(html, /<b>Product System<\/b>/);
  assert.equal(index.version, '1.4.0-draft.9');
  assert.equal(index.updatedAt, '2026-11-04T14:22:33+08:00');
  for (const p of pages) for (const source of p.sources) {
    await fs.access(path.join(root, 'library', source));
    assert.ok(html.includes(sourceUrl(source)));
  }
  for (const p of index.chapters) for (const example of p.runtimePatterns) {
    assert.ok(example.story.startsWith(`${siteUrl}/lab/?path=/story/`));
  }
  assert.doesNotMatch(html, /chatdaddy\.github\.io\/design-system\/storybook/);
});

test('public copy matches the versioned source and carries the complete index', async () => {
  assert.equal(await fs.readFile(path.join(root, 'apps/docs/public/handbook/index.html'), 'utf8'), html);
  const publicIndex = JSON.parse(await fs.readFile(path.join(root, 'apps/docs/public/handbook/agent-index.json'), 'utf8'));
  assert.deepEqual(publicIndex, index);
  for (const [, script] of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new Function(script);
});

test('current site source contains no excluded product branding or local file paths', async () => {
  const excludedName = new RegExp(['bob', 'work'].join(''), 'i');
  for (const file of ['README.md', 'content/case-studies/README.md', 'apps/docs/app/page.tsx', 'apps/docs/app/work/page.tsx', 'apps/docs/app/layout.tsx']) {
    assert.doesNotMatch(await fs.readFile(path.join(root, file), 'utf8'), excludedName);
  }
  assert.doesNotMatch(html, excludedName);
  assert.doesNotMatch(html, /(?:file:\/\/|\/Users\/)/);
});
