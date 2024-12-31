import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-lg font-semibold text-gray-800">Taste Delicious </h1>
          <p className="text-gray-600">Delicious meals delivered fast to your door.</p>
        </div>

        {/* Center Section */}
        <div className="text-center mb-4 md:mb-0">
          <p className="text-gray-600">Made By Muhammad Hasnain.</p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <nav className="space-x-4">
            <a href=" http://localhost:3000/menu " className="text-gray-800 hover:text-gray-600">Menu</a>
            <a href="http://localhost:3000/about" className="text-gray-800 hover:text-gray-600">About Us</a>
            <a href="http://localhost:3000/service" className="text-gray-800 hover:text-gray-600">Services</a>
            <a href="http://localhost:3000/contact" className="text-gray-800 hover:text-gray-600">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
