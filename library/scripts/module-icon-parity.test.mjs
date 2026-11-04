import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { test } from 'node:test'
import ts from 'typescript'

const read = relative => readFileSync(fileURLToPath(new URL(relative, import.meta.url)), 'utf8')
const approved = JSON.parse(read('../assets/icons/modules/source.json'))
const runtime = read('../packages/icons/src/ModuleIcon.tsx')
const ast = ts.createSourceFile('ModuleIcon.tsx', runtime, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
const iconPaths = new Map()

function visit(node) {
  if (ts.isVariableDeclaration(node) && node.name.getText(ast) === 'artwork' && node.initializer && ts.isObjectLiteralExpression(node.initializer)) {
    for (const icon of node.initializer.properties) {
      if (!ts.isPropertyAssignment(icon)) continue
      const name = icon.name.getText(ast).replaceAll("'", '')
      const paths = []
      function collect(child) {
        if (ts.isJsxAttribute(child) && child.name.text === 'd' && child.initializer && ts.isStringLiteral(child.initializer)) paths.push(child.initializer.text)
        ts.forEachChild(child, collect)
      }
      collect(icon.initializer)
      iconPaths.set(name, paths)
    }
  }
  ts.forEachChild(node, visit)
}
visit(ast)

test('every runtime module icon has the approved authored path geometry', () => {
  assert.deepEqual([...iconPaths.keys()].sort(), Object.keys(approved).sort())
  for (const [name, svg] of Object.entries(approved)) {
    const expected = [...svg.matchAll(/\bd="([^"]+)"/g)].map(match => match[1])
    assert.deepEqual(iconPaths.get(name), expected, `${name} runtime geometry differs from the approved source`)
  }
})
