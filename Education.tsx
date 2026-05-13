import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

const educationData = [
  {
    degree: 'B.Tech — Information Science & Engineering',
    institution: 'Jain University',
    score: 'CGPA: 7.21',
    icon: GraduationCap,
    gradient: 'from-accent-blue to-accent-purple',
    textColor: 'text-accent-blue',
  },
  {
    degree: 'XII (CBSE)',
    institution: 'Holy Temple HR. SEC. School',
    score: 'Percentage: 90.2%',
    icon: Award,
    gradient: 'from-accent-purple to-accent-cyan',
    textColor: 'text-accent-purple',
  },
]

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="education" className="section-padding relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-2 block">Education</span>
          <h2 className="text-3xl md:text-4xl font-bold font-kanit">Academic Background</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, i) => {
            const Icon = edu.icon
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="glass-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:border-white/10 transition-colors"
              >
                <div className={`w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br ${edu.gradient} p-[1px]`}>
                  <div className="w-full h-full bg-secondary rounded-2xl flex items-center justify-center">
                    <Icon size={24} className={edu.textColor} />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-textMain mb-1">{edu.degree}</h3>
                  <p className="text-sm text-textMain/50 mb-3">{edu.institution}</p>
                  <span className="inline-block px-3 py-1 bg-white/[0.05] rounded-full text-xs font-medium text-white">
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
