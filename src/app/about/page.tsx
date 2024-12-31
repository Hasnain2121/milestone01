import React from 'react'

export default function about() {
  return (
    <div className="bg-gray-50 text-gray-800 py-16 px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-teal-600">About Us</h2>
      <p className="text-lg leading-relaxed mb-8">
        At <span className="font-semibold">QuickBite</span>, we believe that great food should be accessible to everyone. Our mission is to deliver delicious meals from your favorite local restaurants right to your doorstep. We partner with a diverse range of eateries to provide you with a wide selection of cuisines, ensuring that there’s something for everyone.
      </p>
      <p className="text-lg leading-relaxed">
        Our team is dedicated to making your food delivery experience as seamless as possible. With a user-friendly app and fast delivery times, we’re here to satisfy your cravings without the hassle. Join us on our journey to bring good food to good people!
      </p>
    </div>

    <div className="max-w-4xl mx-auto mt-16">
      <h3 className="text-2xl font-bold mb-6 text-teal-600 text-center">Our Values</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold text-lg">Quality</h4>
          <p className="leading-relaxed">
            We partner with only the best restaurants to ensure top-notch food quality.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg">Speed</h4>
          <p className="leading-relaxed">
            Our delivery team is committed to getting your food to you quickly and efficiently.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg">Customer Satisfaction</h4>
          <p className="leading-relaxed">
            Your happiness is our priority. We strive to provide excellent service.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg">Community</h4>
          <p className="leading-relaxed">
            Supporting local businesses and fostering community connections is at our core.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
