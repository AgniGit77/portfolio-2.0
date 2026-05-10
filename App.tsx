import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex flex-col font-inter"
        >
          {/* Navbar */}
          <Navbar />

          {/* Sections */}
          <main className="flex-grow">
            <Hero />
            <Marquee />
            <About />
            <Education />
            
            {/* We kept them as full-width blocks as per order: About -> Education -> Experience -> Skills -> Projects */}
            <div className="section-padding max-w-7xl mx-auto w-full flex flex-col gap-12" id="experience">
              <Experience />
            </div>

            <Skills />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  )
}

export default App
