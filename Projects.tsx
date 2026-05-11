import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Sparkles, ShoppingCart, Sprout, ArrowRight, BarChart } from 'lucide-react'

type Project = {
  title: string;
  category: string;
  description: string;
  icon: any;
  gradient: string;
  tags: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
};

const projects: Project[] = [
  {
    title: 'AI Fashion Design Assistant',
    category: 'AI Project',
    description: 'AI-powered fashion recommendation and virtual styling platform with intelligent trend analysis.',
    icon: Sparkles,
    gradient: 'from-purple-600 to-rose-400',
    tags: ['Python', 'AI/ML', 'Flask'],
    image: '/placeholder-1.jpg' // Assuming placeholders or gradients
  },
  {
    title: 'E-Commerce Website',
    category: 'Full Stack',
    description: 'Modern online shopping platform with authentication, cart, and secure payment integration.',
    icon: ShoppingCart,
    gradient: 'from-blue-600 to-teal-400',
    tags: ['HTML', 'CSS', 'javascript', 'React.js'],
    image: '/placeholder-2.jpg',
    githubLink: 'https://github.com/AgniGit77/E-commerce-website-'
  },
  {
    title: 'Sales Data Analysis',
    category: 'Data Analysis Project',
    description: 'Sales data analysis project with insights and visualizations.',
    icon: BarChart,
    gradient: 'from-emerald-600 to-lime-400',
    tags: ['Python', 'NUMPY', 'PowerBI', 'Pandas', 'Excel', 'Tableau'],
    image: '/placeholder-3.jpg',
    githubLink: 'https://github.com/AgniGit77/Sales-Data-Analysis'
  },
]

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding relative w-full" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-2 block">Featured Work</span>
            <h2 className="text-3xl md:text-4xl font-bold font-kanit">Projects</h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-textMain/60 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-full w-max">
            View All Projects
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="glass-card overflow-hidden group flex flex-col h-full"
              >
                {/* Top Image/Gradient area */}
                <div className="h-48 relative overflow-hidden bg-secondary">
                  {/* Using gradient background instead of image for now */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />

                  {/* Floating Mockup representation */}
                  <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-primary rounded-t-xl border border-white/10 shadow-2xl overflow-hidden group-hover:translate-y-[-5%] transition-transform duration-500">
                    <div className="w-full h-6 bg-secondary border-b border-white/5 flex items-center px-3 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-10`} />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-[10px] font-bold uppercase tracking-wider border border-accent-blue/20 mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-textMain mb-2 group-hover:text-accent-blue transition-colors">{project.title}</h3>
                    <p className="text-sm text-textMain/50 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs text-textMain/40 bg-white/[0.03] px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a href={project.liveLink || "#"} target={project.liveLink ? "_blank" : "_self"} rel="noreferrer" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-textMain/60 hover:text-white hover:bg-accent-blue transition-all border border-white/5 hover:border-accent-blue hover:shadow-[0_0_15px_rgba(0,102,255,0.4)]">
                        <ExternalLink size={16} />
                      </a>
                      <a href={project.githubLink || "#"} target={project.githubLink ? "_blank" : "_self"} rel="noreferrer" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-textMain/60 hover:text-white hover:bg-white/10 transition-all border border-white/5">
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
