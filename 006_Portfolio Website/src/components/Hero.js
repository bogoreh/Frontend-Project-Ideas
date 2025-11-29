import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-primary-600">Your Name</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Full Stack Developer & Creative Problem Solver
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                View My Work
              </a>
              <a
                href="/contact"
                className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <StaticImage
                src="../images/hero-image.jpg"
                alt="Your Name"
                className="w-full h-full object-cover"
                placeholder="blurred"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero