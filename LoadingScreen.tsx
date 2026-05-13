import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const letters = 'AGNI'.split('')

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="gradient-blob w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle, rgba(0,102,255,0.3), transparent)',
            top: '30%',
            left: '20%',
          }}
        />
        <div
          className="gradient-blob w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, rgba(123,47,247,0.2), transparent)',
            top: '50%',
            right: '20%',
            animationDelay: '-5s',
          }}
        />
      </div>

      {/* Letters */}
      <div className="flex gap-2 relative z-10">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="loading-letter"
            initial={{ opacity: 0, y: 60, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              delay: i * 0.15,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Loading bar */}
      <motion.div
        className="loading-bar relative z-10"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 200 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      />

      {/* Subtitle */}
      <motion.p
        className="text-sm text-textMain/40 tracking-[0.3em] uppercase relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Loading Experience
      </motion.p>
    </motion.div>
  )
}

export default LoadingScreen
