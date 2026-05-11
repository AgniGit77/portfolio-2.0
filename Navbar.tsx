import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Detect active section
      const sections = navItems.map(item => item.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(sections[i])
            return
          }
        }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-[9990] transition-all duration-500 ${
          scrolled ? 'py-3 bg-primary/80 backdrop-blur-xl border-b border-white/[0.04] shadow-2xl' : 'py-5 bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-2xl font-kanit font-bold flex items-center gap-1 group"
          >
            <span>Agni</span>
            <span className="w-2 h-2 rounded-full bg-accent-blue mt-1.5 group-hover:bg-accent-cyan transition-colors" />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center bg-white/[0.03] border border-white/[0.05] rounded-full px-2 py-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`group relative px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-textMain/50 hover:text-textMain/80'
                  }`}
                >
                  {item.label}
                  {/* Active dot indicator */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-blue transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100'
                  }`} />
                </button>
              )
            })}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent-blue/10 text-accent-blue hover:bg-accent-blue hover:text-white border border-accent-blue/20 transition-all duration-300 text-sm font-medium font-kanit"
            >
              Resume
              <Download size={14} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-textMain/80 hover:text-white transition-colors bg-white/[0.05] rounded-lg border border-white/[0.05]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[9989] bg-primary/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-2xl font-semibold text-textMain/70 hover:text-textMain transition-colors font-kanit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              href="#"
              className="mt-6 px-8 py-3 rounded-full bg-accent-blue text-white text-lg font-medium flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Resume
              <Download size={18} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
