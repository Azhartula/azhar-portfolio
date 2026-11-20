import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

type Props = {
  eyebrow?: string
  title: string
  teaser: string
  children: ReactNode
  className?: string
  wide?: boolean
}

function isTouchLike() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: none), (pointer: coarse)').matches
  )
}

/** Collapsed teaser; hover expands details. Tap toggles on touch devices. */
export default function ExpandCard({
  eyebrow,
  title,
  teaser,
  children,
  className = '',
  wide = false,
}: Props) {
  const reduce = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const [pinned, setPinned] = useState(false)
  const open = hovered || pinned

  return (
    <motion.article
      className={`expand-card${wide ? ' is-wide' : ''} ${className}`.trim()}
      layout
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        if (!isTouchLike()) setPinned(false)
      }}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setHovered(false)
          setPinned(false)
        }
      }}
      onClick={() => {
        if (isTouchLike()) setPinned((v) => !v)
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setPinned((v) => !v)
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={open}
      transition={{ layout: { duration: reduce ? 0 : 0.35, ease } }}
    >
      <div className="expand-card-surface">
        {eyebrow && <p className="expand-eyebrow">{eyebrow}</p>}
        <h3 className="expand-title">{title}</h3>
        <p className="expand-teaser">{teaser}</p>
        <span className="expand-hint">
          {open ? 'Details' : 'Hover to expand'}
        </span>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="expand-body"
              key="body"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduce ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.35, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="expand-body-inner">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}
