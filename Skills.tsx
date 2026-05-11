import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code2, Brain, Layers, BarChart3, Globe, Database, GitBranch, PieChart
} from 'lucide-react'

const skills = [
  {
    title: 'Python Development',
    description: 'Building robust applications and automation using Python.',
    icon: Code2,
    gradient: 'from-blue-500 to-cyan-400',
    iconColor: 'text-blue-400',
    bgLight: 'bg-blue-500/10'
  },
  {
    title: 'Artificial Intelligence',
    description: 'Creating intelligent solutions with machine learning and AI technologies.',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-400',
    iconColor: 'text-purple-400',
    bgLight: 'bg-purple-500/10'
  },
  {
    title: 'Full Stack Development',
    description: 'Developing end-to-end web applications with modern technologies.',
    icon: Layers,
    gradient: 'from-emerald-500 to-teal-400',
    iconColor: 'text-emerald-400',
    bgLight: 'bg-emerald-500/10'
  },
  {
    title: 'Data Analysis',
    description: 'Analyzing data to extract meaningful insights and drive decisions.',
    icon: BarChart3,
    gradient: 'from-orange-500 to-amber-400',
    iconColor: 'text-orange-400',
    bgLight: 'bg-orange-500/10'
  },
  {
    title: 'React & Frontend',
    description: 'Building responsive and interactive user interfaces with React.',
    icon: Globe,
    gradient: 'from-sky-500 to-blue-400',
    iconColor: 'text-sky-400',
    bgLight: 'bg-sky-500/10'
  },
  {
    title: 'Database & Backend',
    description: 'Designing secure databases and scalable backend systems.',
    icon: Database,
    gradient: 'from-rose-500 to-red-400',
    iconColor: 'text-rose-400',
    bgLight: 'bg-rose-500/10'
  },
  {
    title: 'Git / GitHub',
    description: 'Version control and collaboration using Git and GitHub.',
    icon: GitBranch,
    gradient: 'from-violet-500 to-indigo-400',
    iconColor: 'text-violet-400',
    bgLight: 'bg-violet-500/10'
  },
  {
    title: 'Power BI',
    description: 'Creating interactive dashboards and data visualizations.',
    icon: PieChart,
    gradient: 'from-yellow-500 to-lime-400',
    iconColor: 'text-yellow-400',
    bgLight: 'bg-yellow-500/10'
  },
]

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-2 block">What I Do</span>
          <h2 className="text-3xl md:text-4xl font-bold font-kanit">Skills</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 flex flex-col items-center text-center group hover:border-white/10 transition-colors"
              >
                <div className={`w-16 h-16 rounded-full ${skill.bgLight} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className={skill.iconColor} />
                </div>
                
                <h3 className="text-base font-bold text-textMain mb-3">{skill.title}</h3>
                <p className="text-xs text-textMain/50 leading-relaxed">{skill.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
