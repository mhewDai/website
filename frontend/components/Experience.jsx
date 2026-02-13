import React from 'react'

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Company Name',
      period: '2022 - Present',
      description: 'Developed and maintained web applications using React and Python. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Built responsive web applications serving 10,000+ users',
        'Improved application performance by 40%',
        'Mentored junior developers'
      ]
    },
    {
      id: 2,
      title: 'Junior Developer',
      company: 'Another Company',
      period: '2020 - 2022',
      description: 'Worked on various frontend and backend projects. Gained experience in modern web technologies and agile development practices.',
      achievements: [
        'Contributed to multiple successful product launches',
        'Implemented RESTful APIs',
        'Participated in code reviews'
      ]
    }
  ]

  return (
    <section id="experience" className="section-container">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="card border-l-4 border-primary">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <p className="text-lg text-primary">{exp.company}</p>
              </div>
              <p className="text-gray-600 mt-2 md:mt-0">{exp.period}</p>
            </div>
            <p className="text-gray-700 mb-4">{exp.description}</p>
            <ul className="list-disc list-inside space-y-2">
              {exp.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-600">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
