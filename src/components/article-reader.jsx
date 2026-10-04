import { useEffect, useRef } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './article-reader.css'

export default function ArticleReader({ article, onClose }) {
  const panel = useRef(null)

  useEffect(() => {
    const previousFocus = document.activeElement
    panel.current.focus()
    panel.current.scrollTop = 0
    return () => previousFocus?.focus()
  }, [article.slug])

  return (
    <aside id="article-reader" className="article-reader" aria-labelledby="article-title" tabIndex={-1} ref={panel} onKeyDown={(event) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onClose()
      }
    }}>
      <div className="article-toolbar">
        <span>Writing</span>
        <button type="button" onClick={onClose} aria-label="Close article">Close <span aria-hidden="true">×</span></button>
      </div>
      <article>
        <header className="article-header">
          <time dateTime={article.date || undefined}>{article.displayDate}</time>
          <h1 id="article-title">{article.title}</h1>
          {article.description && <p>{article.description}</p>}
        </header>
        <div className="article-content">
          {article.body ? <Markdown remarkPlugins={[remarkGfm]}>{article.body}</Markdown> : <p className="article-empty">Article coming soon.</p>}
        </div>
      </article>
    </aside>
  )
}
