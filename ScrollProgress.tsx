import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const scaleX = useSpring(0, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(progress)
      scaleX.set(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scaleX])

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
