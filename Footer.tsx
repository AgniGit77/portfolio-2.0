const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-white/[0.05] bg-secondary">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-textMain/40 font-medium">
          © {new Date().getFullYear()} Agni Kumar Das. All Rights Reserved.
        </p>

        {/* Attribution */}
        <p className="text-sm text-textMain/40">
          Designed & Developed by <span className="text-accent-blue font-medium">Agni Kumar Das</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
