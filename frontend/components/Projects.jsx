import React from 'react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of your first project. This could be a web app, mobile app, or any other project you are proud of.',
      technologies: ['React', 'Tailwind CSS', 'Node.js'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Description of your second project. Highlight what makes it special and what problems it solves.',
      technologies: ['Python', 'Flask', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Another amazing project showcasing your skills and creativity. Talk about the challenges and solutions.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#',
      github: '#'
    }
  ]

  return (
    <section id="projects" className="section-container bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center">
              <p className="text-gray-500">[Project Screenshot]</p>
            </div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-primary text-white text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href={project.link} className="text-primary hover:underline">Live Demo</a>
              <a href={project.github} className="text-gray-600 hover:underline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
