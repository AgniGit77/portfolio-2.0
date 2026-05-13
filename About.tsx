import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, ArrowRight } from 'lucide-react'

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left - Graphic */}
        <div className="w-full lg:w-1/2 flex justify-center relative min-h-[400px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
          >
            {/* Dark platform */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-t from-accent-blue/20 to-transparent rounded-[100%] blur-xl" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-16 bg-secondary border border-white/10 rounded-[100%] shadow-[0_0_50px_rgba(0,102,255,0.2)]" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-12 bg-primary border border-white/5 rounded-[100%]" />
            
            {/* Glowing Orb/Icon */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-32 h-32"
            >
              <div className="absolute inset-0 bg-accent-blue rounded-2xl rotate-45 blur-2xl opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue to-accent-purple rounded-2xl rotate-45 border border-white/20 flex items-center justify-center shadow-2xl">
                <div className="-rotate-45 text-white">
                  <Code2 size={48} strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>

            {/* Orbiting rings */}
            <motion.div 
              animate={{ rotateX: [60, 60], rotateZ: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border-[2px] border-dashed border-accent-blue/30"
              style={{ transformStyle: 'preserve-3d' }}
            />
            <motion.div 
              animate={{ rotateX: [70, 70], rotateZ: [360, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-accent-purple/20"
              style={{ transformStyle: 'preserve-3d' }}
            />

            {/* Floating spheres */}
            <motion.div 
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-accent-purple to-purple-900 blur-[2px]"
            />
            <motion.div 
              animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/3 left-1/4 w-6 h-6 rounded-full bg-gradient-to-br from-accent-cyan to-blue-900 blur-[1px]"
            />
          </motion.div>
        </div>

        {/* Right - Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-kanit mb-6 leading-tight"
          >
            Crafting Intelligent<br />
            Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-textMain/60 text-sm md:text-base leading-relaxed mb-6"
          >
            Currently pursuing B.Tech in Information Science and Engineering at Jain University with experience in Python programming, AI development, full-stack applications, and data analysis.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-textMain/60 text-sm md:text-base leading-relaxed mb-10"
          >
            I enjoy building intelligent and real-world solutions including AI fashion assistants, e-commerce platforms, agricultural chatbots, and analytics systems.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent-blue text-white font-medium text-sm hover:bg-accent-blue/90 transition-colors shadow-lg shadow-accent-blue/20"
          >
            Know More About Me
            <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default About
