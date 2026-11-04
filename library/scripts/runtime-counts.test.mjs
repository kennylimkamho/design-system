import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { test } from 'node:test'
import { transpileModule, ModuleKind } from 'typescript'

// Small, dependency-free formatting contracts are evaluated from the same TS
// source used by the components; works in CI's Node 20 without a TS loader.
function loadContract(relativePath) {
  const file = fileURLToPath(new URL(relativePath, import.meta.url))
  const source = readFileSync(file, 'utf8')
  const js = transpileModule(source, { compilerOptions: { module: ModuleKind.CommonJS } }).outputText
  const module = { exports: {} }
  new Function('module', 'exports', js)(module, module.exports)
  return module.exports
}

const { formatNavigationBadge } = loadContract('../packages/components/src/layout/navigationBadge.ts')
const { formatScopedCount } = loadContract('../packages/components/src/inbox/inboxCount.ts')

test('navigation badges distinguish exact, partial, capped and absent counts', () => {
  assert.equal(formatNavigationBadge(0), null)
  assert.deepEqual(formatNavigationBadge(6), { visible: '6', spoken: '6' })
  assert.deepEqual(formatNavigationBadge({ count: 36, hasMore: true }), { visible: '36+', spoken: 'at least 36' })
  assert.deepEqual(formatNavigationBadge({ count: 120 }), { visible: '99+', spoken: 'at least 99' })
})

test('Inbox scoped counts do not conflate missing, loading, zero and lower bounds', () => {
  assert.equal(formatScopedCount(undefined, false), '—')
  assert.equal(formatScopedCount(undefined, true), '…')
  assert.equal(formatScopedCount(0), '0')
  assert.equal(formatScopedCount({ count: 12, hasMore: true }), '12+')
})
