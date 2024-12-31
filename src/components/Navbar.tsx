import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className= " w-full h-auto">
       <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-2xl text-center font-bold text-gray-800"><a href="http://localhost:3000/">Taste Delicious  </a>
</div> 
      <ul className="flex space-x-6 text-gray-700">
        <li>
          <Link href="http://localhost:3000/about" className="hover:text-gray-900 ">
            About
          </Link>
        </li>
        <li>
          <Link href="http://localhost:3000/servicess" className="hover:text-gray-900 ">
            Services
          </Link>
        </li>
        <li>
          <Link href="http://localhost:3000/contact" className="hover:text-gray-900">
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex space-x-4">
        <Link
          href="http://localhost:3000/menu"
          className="border border-teal-500 text-teal-500 px-4 py-2 rounded-md hover:bg-teal-50"
        >
          Menu
        </Link>
        <Link
          href="http://localhost:3000/order"
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
        >
          Order
        </Link>
      </div>
    </nav>

    </header>
  )
}

export default Navbar
