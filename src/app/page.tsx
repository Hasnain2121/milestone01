import Image from "next/image";

export default function Home() {
  return (
    <div className="h-auto w-auto">
      <section className="bg-gradient-to-b from-green-500 to-green-300 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Tasty Meals, Delivered To Your Doorstep!
          </h1>
          <p className="text-lg mb-6">
            Enjoy delicious dishes from your favorite restaurants, delivered
            fresh to your home.
          </p>
          <button className="bg-white text-green-600 font-semibold py-2 px-4 rounded hover:bg-gray-100 shadow-md">
            Explore Menu
          </button>
        </div>
      </section>
      {/* 2nd section start  */}
      <div className="bg-gray-100 py-10">
        {/* Popular Restaurants Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-700">
            Popular Restaurants
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {[
            {
              title: "Pizza Palace",
              description:
                "Indulge in the best pizzas in town, made with fresh ingredients.",
            },
            {
              title: "Sushi Delight",
              description: "Enjoy authentic sushi with a modern twist.",
            },
            {
              title: "Burger Haven",
              description:
                "Serving juicy burgers with unique flavors for everyone.",
            },
          ].map((restaurant, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-teal-600">
                {restaurant.title}
              </h3>
              <p className="text-gray-600 mt-2">{restaurant.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="bg-gradient-to-r from-teal-100 via-teal-50 to-teal-100 py-12 mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-teal-700">How It Works</h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6">
            {[
              {
                step: "1",
                title: "Browse",
                description:
                  "Choose from a wide variety of restaurants and dishes.",
              },
              {
                step: "2",
                title: "Order",
                description: "Place your order with a few easy clicks.",
              },
              {
                step: "3",
                title: "Enjoy",
                description:
                  "Relax and enjoy your meal delivered to your door.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-teal-600">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-teal-700 mt-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* final section  */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">
            Happy Customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <p className="italic text-gray-700">
                "The delivery was super quick, and the food was still hot and
                fresh!"
              </p>
              <p className="mt-4 text-right font-semibold text-teal-700">
                - Talha Khan
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <p className="italic text-gray-700">
                "Fantastic service and delicious meals every time I order."
              </p>
              <p className="mt-4 text-right font-semibold text-teal-700 ">
                - Moiz Hassan
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <p className="italic text-gray-700">
                "Great variety and super convenient when I don’t have time to
                cook."
              </p>
              <p className="mt-4 text-right font-semibold text-teal-700">
                - Ahmed Shaikh
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
