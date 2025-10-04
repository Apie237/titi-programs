import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      {/* Main Header */}
     <div className="max-w-6xl mx-auto px-5">
        <div className="flex justify-center items-center py-4 flex-wrap">
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
              The International Theological Institute
            </h1>
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