import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    company: 'Motion Cut',
    role: 'Web Development Intern',
    period: '2024 - Present',
    description: 'Worked on modern web development projects and enhanced practical development experience.',
    iconColor: 'text-accent-blue',
  },
  {
    company: 'Pregrod Pvt. Ltd',
    role: 'Python Programmer Intern',
    period: '2024',
    description: 'Worked on Python development, database integration, and web scraping implementation for real-world applications.',
    iconColor: 'text-accent-purple',
  },
]

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })

  return (
    <div ref={sectionRef} className="w-full">
      <div className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-2 block">Experience</span>
        <h2 className="text-3xl md:text-4xl font-bold font-kanit">My Journey</h2>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-0 pl-8 md:pl-10 pb-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="mb-12 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[45px] md:-left-[53px] top-1 w-6 h-6 rounded-full bg-primary border-2 border-white/20 flex items-center justify-center">
              <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-accent-blue shadow-[0_0_10px_#0066FF]' : 'bg-accent-purple shadow-[0_0_10px_#7B2FF7]'}`} />
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0">
                <Briefcase size={18} className={exp.iconColor} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-textMain">{exp.company}</h3>
                <p className="text-sm font-medium text-accent-blue">{exp.role}</p>
              </div>
            </div>
            
            <p className="text-xs text-textMain/40 mb-3 block">{exp.period}</p>
            <p className="text-sm text-textMain/60 leading-relaxed max-w-sm">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience
