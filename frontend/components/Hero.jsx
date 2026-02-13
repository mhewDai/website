import React from 'react'

function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="section-container text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm [Your Name]
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary bg-white text-primary hover:bg-gray-100"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary border-2 border-white hover:bg-white hover:text-secondary"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
