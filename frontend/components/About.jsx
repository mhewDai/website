import React from 'react'

function About() {
  return (
    <section id="about" className="section-container">
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg mb-4">
            Hello! I'm a passionate developer who loves creating beautiful and functional web applications.
            I specialize in building modern, responsive websites using the latest technologies.
          </p>
          <p className="text-lg mb-4">
            With a strong foundation in both frontend and backend development, I enjoy tackling complex
            problems and turning ideas into reality.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or learning something new.
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <p className="text-gray-500">[Profile Image Placeholder]</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Skills & Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="card text-center">
            <p className="font-semibold">Frontend</p>
            <p className="text-sm text-gray-600 mt-2">React, Tailwind CSS, JavaScript</p>
          </div>
          <div className="card text-center">
            <p className="font-semibold">Backend</p>
            <p className="text-sm text-gray-600 mt-2">Python, Node.js, APIs</p>
          </div>
          <div className="card text-center">
            <p className="font-semibold">Tools</p>
            <p className="text-sm text-gray-600 mt-2">Git, GitHub, VS Code</p>
          </div>
          <div className="card text-center">
            <p className="font-semibold">Other</p>
            <p className="text-sm text-gray-600 mt-2">REST APIs, Responsive Design</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
