import { spawnSync } from 'node:child_process'
import { readdirSync } from 'node:fs'

const TREE_PREFIX = /^[\s│├└─]+/

const nameOf = (id: string): string => {
  const at = id.lastIndexOf('@')
  if (at < 1) throw new Error(`\`bun pm ls --all\` printed \`${id}\`, which is not a name@version`)

  return id.slice(0, at)
}

const listLockedNames = (): Set<string> => {
  const { error, status, stdout } = spawnSync('bun', ['pm', 'ls', '--all'], { encoding: 'utf8' })
  if (error) throw error
  if (status !== 0) throw new Error(`\`bun pm ls --all\` exited with ${status}`)

  const ids = stdout.split('\n').slice(1).map((line) => line.replace(TREE_PREFIX, '').trim()).filter(Boolean)
  if (ids.length === 0) throw new Error('`bun pm ls --all` listed no package, so its output can no longer be read')

  return new Set(ids.map(nameOf))
}

const listHoistedNames = (): string[] => {
  const names: string[] = []

  for (const entry of readdirSync('node_modules', { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('.')) continue
    if (!entry.name.startsWith('@')) {
      names.push(entry.name)
      continue
    }
    for (const scoped of readdirSync(`node_modules/${entry.name}`, { withFileTypes: true }))
      if (scoped.isDirectory()) names.push(`${entry.name}/${scoped.name}`)
  }

  return names
}

const locked = listLockedNames()
const unlocked = listHoistedNames().filter((name) => !locked.has(name)).sort()

if (unlocked.length > 0) {
  console.error(
    [
      'node_modules holds what the lockfile does not:',
      ...unlocked.map((name) => `  ${name}`),
      '',
      'A fresh install cannot produce these, so tsc resolves modules CI will not have.',
      'Run `rm -rf node_modules && mise r install` to match the lockfile.',
    ]
      .join('\n'),
  )
  process.exit(1)
}
