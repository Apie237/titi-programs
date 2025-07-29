import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      {/* Main Header */}
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex justify-between items-center py-4 flex-wrap">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img 
              src={assets.logo} 
              alt="TITI Logo" 
              className="h-10 w-auto object-contain"
              style={{
                maxWidth: '120px',
                maxHeight: '40px'
              }}
            />
            <h1 className="text-slate-800 text-xl font-bold hidden sm:block">
              International Theological Institute
            </h1>
          </div>
          
          {/* Contact Info */}
          <div className="flex items-center gap-3 text-slate-600">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="white"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <span className="font-medium text-sm">+237671630408</span>
          </div>
        </div>
      </div>
      
      {/* Navigation Menu */}
      <nav className="bg-white/90 backdrop-blur-sm py-2">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex justify-center gap-8 flex-wrap">
            <a 
              href="#about" 
              className="text-slate-700 font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:-translate-y-1 hover:shadow-lg"
            >
              About
            </a>
            <a 
              href="#faculties" 
              className="text-slate-700 font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:-translate-y-1 hover:shadow-lg"
            >
              Faculties
            </a>
            <a 
              href="#programs" 
              className="text-slate-700 font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:-translate-y-1 hover:shadow-lg"
            >
              Programs
            </a>
            <a 
              href="#pricing" 
              className="text-slate-700 font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:-translate-y-1 hover:shadow-lg"
            >
              Pricing
            </a>
            <a 
              href="#admission" 
              className="text-slate-700 font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:-translate-y-1 hover:shadow-lg"
            >
              Admission
            </a>
            <a 
              href="#contact" 
              className="text-slate-700 font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:-translate-y-1 hover:shadow-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar