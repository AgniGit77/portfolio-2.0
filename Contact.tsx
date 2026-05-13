import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">Let's Connect</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-kanit mb-8 leading-tight"
        >
          Let's Build Something<br />
          <span className="text-white">Amazing Together</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12"
        >
          <a href="mailto:agnikumardas@gmail.com" className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
            <Mail size={20} className="text-textMain/80" />
            <span className="font-medium text-sm text-textMain/80">Email Me</span>
          </a>
          <a href="https://linkedin.com/in/agnikumardas" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
            <Linkedin size={20} className="text-textMain/80" />
            <span className="font-medium text-sm text-textMain/80">LinkedIn</span>
          </a>
          <a href="https://github.com/agnikumardas" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
            <Github size={20} className="text-textMain/80" />
            <span className="font-medium text-sm text-textMain/80">GitHub</span>
          </a>
        </motion.div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-blue/10 rounded-[100%] blur-[100px] pointer-events-none" />
    </section>
  )
}

export default Contact
