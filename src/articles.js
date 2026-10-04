import { parse } from 'yaml'

export function parseArticle(path, source) {
  const match = source.replace(/^\uFEFF/, '').match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  const metadata = match ? parse(match[1]) || {} : {}
  const slug = path.split('/').pop().replace(/\.md$/, '')
  const date = String(metadata.date || '')
  return {
    slug,
    title: metadata.title || slug.replace(/[_-]/g, ' '),
    description: metadata.description || '',
    date,
    displayDate: /^\d{4}-\d{2}-\d{2}$/.test(date) && !Number.isNaN(Date.parse(date))
      ? new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(date))
      : date,
    body: match ? source.replace(/^\uFEFF/, '').slice(match[0].length).trim() : source.trim(),
  }
}

const files = import.meta.glob('./articles/**/*.md', { query: '?raw', import: 'default', eager: true })

export const articles = Object.entries(files)
  .map(([path, source]) => parseArticle(path, source))
  .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title))
