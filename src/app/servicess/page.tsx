import React from 'react'

export default function servicess() {
  return (
    <section className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Fast Delivery</h3>
          <p className="text-gray-600">Enjoy quick and reliable delivery right to your doorstep. Our team is dedicated to ensuring your food arrives hot and fresh!</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Wide Selection</h3>
          <p className="text-gray-600">Choose from a diverse range of cuisines and dishes from local restaurants. There is something to satisfy every craving!</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">User-Friendly App</h3>
          <p className="text-gray-600">Our easy-to-use app makes ordering food a breeze. Browse menus, customize your order, and track delivery in real-time.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Secure Payments</h3>
          <p className="text-gray-600">We offer a variety of secure payment options to ensure your information is safe while you enjoy your meal.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Support</h3>
          <p className="text-gray-600">Our friendly customer support team is here to assist you with any questions or concerns you may have.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Special Offers</h3>
          <p className="text-gray-600">Enjoy exclusive discounts and promotions on your favorite dishes. Sign up for our newsletter to stay updated!</p>
        </div>
      </div>
    </div>
  </section>
  )
}
