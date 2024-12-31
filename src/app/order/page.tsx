import React from 'react'

export default function order() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
    <h1 className="text-4xl font-bold text-gray-800 mb-6">Place Your Order</h1>

    {/* Menu Items */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 md:w-8/12 lg:w-6/12 mb-10 text-center ">
      {[
        { name: 'Pepperoni Pizza', price: '$12.99' },
        { name: 'Salmon Sushi', price: '$15.49' },
        { name: 'Cheeseburger', price: '$9.99' },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            {item.name}
          </h2>
          <p className="text-xl text-green-500 font-medium mb-4">{item.price}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition">
            Order Now
          </button>
        </div>
      ))}
    </div>

    {/* Order Form */}
    <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-6/12 lg:w-4/12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
        Order Now
      </h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          placeholder="Your Phone"
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          className="border text-gray-500 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option className='text-black'>Select Your Order</option>
          <option className='text-black'>Pepperoni Pizza</option>
          <option className='text-black'>Salmon Sushi</option>
          <option className='text-black'>Cheeseburger</option>
        </select>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition"
        >
          Submit Order
        </button>
      </form>
    </div>
  </div>

  )
}
