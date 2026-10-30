import { useEffect, useRef, useState } from 'react'
import './photography.css'

const photos = Object.values(import.meta.glob('../photography/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' }))

function shuffle(items) {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

function DraggablePhoto({ src, index, delay, onSelect, stack }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [depth, setDepth] = useState(1)
  const [dragging, setDragging] = useState(false)
  const drag = useRef(null)

  function startDrag(event) {
    if (!event.isPrimary || event.button !== 0) return
    drag.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, origin: position, moved: false }
    setDepth(++stack.current)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function moveDrag(event) {
    const current = drag.current
    if (!current || current.pointerId !== event.pointerId || !event.currentTarget.hasPointerCapture(event.pointerId)) return
    const x = event.clientX - current.x
    const y = event.clientY - current.y
    if (!current.moved && Math.hypot(x, y) < 5) return
    current.moved = true
    setDragging(true)
    setPosition({ x: current.origin.x + x, y: current.origin.y + y })
  }

  return <div className={`photo-position${dragging ? ' is-dragging' : ''}`} style={{ transform: `translate(${position.x}px, ${position.y}px)`, zIndex: depth }}>
    <button className="photo-print" aria-label={`Enlarge photograph ${index + 1}; drag to reposition`}
      style={{ '--tilt': `${[ -5, 4, -2, 6, -4, 3 ][index % 6]}deg`, '--delay': `${delay}ms` }}
      onPointerDown={startDrag} onPointerMove={moveDrag}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => { drag.current = null; setDragging(false) }}
      onLostPointerCapture={() => setDragging(false)}
      onClick={event => { if (event.detail === 0 || !drag.current?.moved) onSelect(src) }}>
      <img src={src} alt={`Photograph from Aditya's collection, ${index + 1}`} decoding="async" draggable={false} />
      <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
    </button>
  </div>
}

export default function Photography({ open, onToggle }) {
  const [order, setOrder] = useState(() => shuffle(photos))
  const [selected, setSelected] = useState(null)
  const dialog = useRef(null)
  const trigger = useRef(null)
  const stack = useRef(1)

  useEffect(() => {
    if (!selected) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.current.showModal()
    return () => { document.body.style.overflow = previousOverflow }
  }, [selected])

  useEffect(() => {
    if (!open) return
    function onKeyDown(event) {
      if (event.key === 'Escape' && !dialog.current?.open) {
        onToggle()
        trigger.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onToggle])

  const photo = (src, index) => (
    <DraggablePhoto key={src} src={src} index={index} delay={350 + order.indexOf(src) * 65} onSelect={setSelected} stack={stack} />
  )

  return <>
    <button ref={trigger} className={`photography-toggle${open ? ' is-open' : ''}`} aria-expanded={open} aria-controls="photography-gallery"
      onClick={() => { if (!open) setOrder(shuffle(photos)); onToggle() }}>
      {open ? <svg className="portfolio-close-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="m4 4 8 8M12 4l-8 8" /></svg> : <svg width="27" height="24" viewBox="0 0 32 28" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M3 8h6l3-4h8l3 4h6v17H3z" strokeLinejoin="round"/><circle cx="16" cy="16" r="6"/><path d="M25 11h1M5 2 3 0M1 6h-3M29 4l2-3"/></svg>}
      {open ? 'Close photos' : 'Photography'}
      {!open && <span className="camera-note" aria-hidden="true">Click me!</span>}
    </button>
    {open && <section id="photography-gallery" className="photography-gallery" aria-label="Photography portfolio">
      <div className="photo-wing photo-wing-left">{photos.slice(0, 3).map((src, i) => photo(src, i))}</div>
      <div className="photo-wing photo-wing-right">{photos.slice(3, 6).map((src, i) => photo(src, i + 3))}</div>
      <div className="photo-center">{photos.slice(6, 8).map((src, i) => photo(src, i + 6))}</div>
      <div className="photo-bottom">{photos.slice(8).map((src, i) => photo(src, i + 8))}</div>
    </section>}
    {selected && <dialog ref={dialog} className="photo-lightbox" aria-label="Enlarged photograph" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) dialog.current.close() }}>
      <button className="photo-lightbox-close" aria-label="Close photograph" onClick={() => dialog.current.close()}>×</button>
      <img src={selected} alt="Enlarged photograph from Aditya's collection" />
    </dialog>}
  </>
}
