import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "TypeScript", "Python", 
    "GraphQL", "MongoDB", "PostgreSQL", "AWS", "Docker"
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
              <StaticImage
                src="../images/about-image.jpg"
                alt="Your Name"
                className="w-full h-full object-cover"
                placeholder="blurred"
              />
            </div>
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="text-gray-600 mb-8 space-y-4">
              <p className="text-lg">
                Hello! I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that make a difference. I specialize in modern 
                web technologies and love turning complex problems into simple, beautiful designs.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through blog posts and tutorials.
              </p>
              <p className="text-lg">
                I believe in continuous learning and staying up-to-date with the latest industry 
                trends to deliver the best possible solutions.
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center"
            >
              Download Resume
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About