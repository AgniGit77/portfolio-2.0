import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Brain, Sparkles, FolderKanban, Briefcase, Download, ArrowRight, Github, Linkedin, Mail, Instagram, ChevronDown, MousePointer2 } from 'lucide-react'

const categories = [
  { label: 'AI Solutions', image: '/card-ai.png' },
  { label: 'Python Projects', image: '/card-python.png' },
  { label: 'Data Analysis', image: '/card-data.png' },
  { label: 'Web Development', image: '/card-web.png' },
  { label: 'Automation', image: '/card-automation.png' },
  { label: 'Machine Learning', image: '/card-ml.png' },
]

const statCards = [
  { icon: Code2, label: 'Python', value: 'Programmer', color: 'accent-blue' },
  { icon: Brain, label: 'AI & Automation', value: 'Enthusiast', color: 'accent-purple' },
  { icon: FolderKanban, label: 'Projects', value: '5+', color: 'accent-cyan' },
  { icon: Briefcase, label: 'Experience', value: '1+ Years', color: 'accent-blue' },
]

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-6 overflow-hidden flex flex-col"
    >
      {/* ======= BACKGROUND EFFECTS ======= */}
      
      {/* Large "AGNI" background text */}
      <div className="hero-bg-name" aria-hidden="true">
        <motion.span
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 10}px)`,
          }}
        >
          AGNI
        </motion.span>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-accent-blue/8 rounded-full blur-[120px] pointer-events-none animate-breathe" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-accent-purple/6 rounded-full blur-[100px] pointer-events-none animate-breathe" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-accent-cyan/4 rounded-full blur-[80px] pointer-events-none animate-breathe" style={{ animationDelay: '4s' }} />

      {/* Circular ring decoration behind avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
        className="hero-ring"
        style={{
          transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.7, ease: 'easeOut' }}
        className="hero-ring-outer"
      />

      {/* ======= MAIN CONTENT ======= */}
      <div className="max-w-[1400px] mx-auto px-6 w-full flex-grow flex flex-col">
        
        {/* Top section: Text + Avatar + Stats */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 flex-grow relative">
          
          {/* LEFT — Text Content */}
          <div className="w-full lg:w-[40%] flex flex-col items-start pt-6 lg:pt-10 z-20">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent-blue/20 bg-accent-blue/[0.06] mb-7"
            >
              <Code2 size={14} className="text-accent-blue" />
              <span className="text-xs font-bold tracking-[0.2em] text-accent-blue uppercase">Python Programmer</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-[72px] font-kanit font-bold leading-[1.05] mb-5 tracking-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Agni</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-xl md:text-2xl text-textMain/70 font-light mb-5 leading-relaxed"
            >
              Building Intelligent Applications<br />
              With <span className="font-semibold text-white">Python</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="text-textMain/45 text-[15px] max-w-[420px] leading-relaxed mb-10"
            >
              Python programmer passionate about AI, automation, full-stack development, and modern intelligent applications.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="hero-btn-primary group"
              >
                View Projects
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#" className="hero-btn-secondary group">
                Download Resume
                <Download size={15} />
              </a>
              <a href="#contact" className="hero-btn-secondary group">
                Contact Me
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* CENTER — Avatar */}
          <div className="w-full lg:w-[35%] relative flex justify-center z-10 mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Avatar glow behind */}
              <div className="absolute -inset-10 bg-gradient-to-b from-accent-blue/15 via-accent-purple/10 to-transparent rounded-full blur-[60px] pointer-events-none" />
              
              <motion.img
                src="/avatar.png"
                alt="Agni Kumar Das"
                className="relative z-10 w-[320px] md:w-[420px] lg:w-[480px] h-auto object-contain hero-avatar-img"
                style={{
                  transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`,
                  filter: 'drop-shadow(0 20px 60px rgba(0, 102, 255, 0.15)) drop-shadow(0 0 40px rgba(123, 47, 247, 0.1))',
                }}
                draggable={false}
              />
            </motion.div>
          </div>

          {/* RIGHT — Stat Cards */}
          <div className="w-full lg:w-[20%] flex flex-row lg:flex-col gap-3 justify-center lg:justify-start lg:pt-14 z-20 overflow-x-auto lg:overflow-visible hide-scrollbar">
            {statCards.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
                  className="hero-stat-card group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-${card.color}/15 flex items-center justify-center text-${card.color} group-hover:scale-110 transition-transform`}>
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-textMain/40 truncate">{card.label}</p>
                    <p className="text-sm font-semibold text-textMain/90 truncate">{card.value}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom Bar: Scroll Indicator + Social Links */}
        <div className="flex items-end justify-between w-full mt-auto pt-6 pb-2">
          {/* Scroll Down */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 rounded-full border-2 border-white/15 flex items-start justify-center pt-2"
            >
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 rounded-full bg-accent-blue"
              />
            </motion.div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-textMain/30 font-bold">Scroll Down</span>
          </motion.div>

          {/* Connect With Me */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col items-end gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-textMain/30 font-bold">Connect With Me</span>
            <div className="flex gap-2.5">
              {[
                { icon: Github, href: 'https://github.com/agnikumardas', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/agnikumardas', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:agnikumardas@gmail.com', label: 'Email' },
                { icon: Instagram, href: '#', label: 'Instagram' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={social.label}
                  className="hero-social-btn"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ======= CATEGORY CARDS STRIP ======= */}
      <div className="w-full mt-4 relative overflow-hidden">
        {/* Fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="category-scroll-container hide-scrollbar px-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.08 }}
              className="hero-category-card group"
            >
              <div className="hero-category-img-wrap">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <span className="relative z-10 text-xs font-semibold tracking-wide text-textMain/80 mt-2 px-1">
                {cat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
