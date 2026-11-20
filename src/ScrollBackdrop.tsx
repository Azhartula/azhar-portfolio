import { useEffect, useState } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { fieldNotes } from './data'

/** Which background shows for which section band */
const SECTION_IMAGE: { id: string; index: number }[] = [
  { id: 'top', index: 0 },
  { id: 'work', index: 0 },
  { id: 'projects', index: 1 },
  { id: 'skills', index: 2 },
  { id: 'education', index: 2 },
  { id: 'contact', index: 2 },
]

/**
 * Fixed full-bleed ML images that crossfade as you scroll down the page.
 */
export default function ScrollBackdrop() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.001,
  })
  const [active, setActive] = useState(0)

  const scale = useTransform(smooth, [0, 1], reduce ? [1, 1] : [1.05, 1.14])
  const y = useTransform(smooth, [0, 1], reduce ? ['0%', '0%'] : ['0%', '8%'])

  useEffect(() => {
    const nodes = SECTION_IMAGE.map(({ id, index }) => {
      const el = document.getElementById(id)
      return el ? { el, index } : null
    }).filter(Boolean) as { el: HTMLElement; index: number }[]

    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (!visible.length) return
        const match = nodes.find((n) => n.el === visible[0].target)
        if (match) setActive(match.index)
      },
      {
        root: null,
        threshold: [0.2, 0.45, 0.7],
        rootMargin: '-15% 0px -35% 0px',
      },
    )

    nodes.forEach(({ el }) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="scroll-backdrop" aria-hidden="true">
      {fieldNotes.map((note, i) => (
        <motion.div
          key={note.src}
          className="scroll-backdrop-layer"
          style={{ scale, y }}
          animate={{ opacity: active === i ? 1 : 0 }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <img src={note.src} alt="" />
        </motion.div>
      ))}
      <div className="scroll-backdrop-veil" />
      <div className="scroll-backdrop-hint">
        {fieldNotes.map((note, i) => (
          <span
            key={note.src}
            className={`scroll-dot${active === i ? ' is-on' : ''}`}
            title={note.caption}
          />
        ))}
      </div>
    </div>
  )
}
