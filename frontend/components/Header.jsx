import React, { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            <a href="/">Your Name</a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <button onClick={() => scrollToSection('about')} className="block hover:text-primary transition">About</button>
            <button onClick={() => scrollToSection('projects')} className="block hover:text-primary transition">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="block hover:text-primary transition">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="block hover:text-primary transition">Contact</button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
