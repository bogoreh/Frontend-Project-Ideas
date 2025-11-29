import React, { useState } from "react"
import { Link } from "gatsby"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            Your Name
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-gray-600 hover:text-primary-600 transition-colors">
              Projects
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-primary-600 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link to="/" className="block text-gray-600 hover:text-primary-600">
              Home
            </Link>
            <Link to="/about" className="block text-gray-600 hover:text-primary-600">
              About
            </Link>
            <Link to="/projects" className="block text-gray-600 hover:text-primary-600">
              Projects
            </Link>
            <Link to="/blog" className="block text-gray-600 hover:text-primary-600">
              Blog
            </Link>
            <Link to="/contact" className="block text-gray-600 hover:text-primary-600">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header