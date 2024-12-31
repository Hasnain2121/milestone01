
import React from 'react';

const MenuPage = () => {
  const menuItems = [
    {
      id: 1,
      title: "Pepperoni Pizza",
      description: "Classic pizza topped with spicy pepperoni and mozzarella.",
      price: "$12.99",
    },
    {
      id: 2,
      title: "Salmon Sushi",
      description: "Fresh salmon sushi rolls served with wasabi and soy sauce.",
      price: "$15.49",
    },
    {
      id: 3,
      title: "Cheeseburger",
      description: "Juicy beef patty topped with melted cheese, lettuce, and tomato.",
      price: "$9.99",
    },
    {
      id: 4,
      title: "Veggie Pizza",
      description: "Pizza topped with fresh veggies, mozzarella, and tomato sauce.",
      price: "$11.99",
    },
    {
      id: 5,
      title: "Chocolate Cake",
      description: "Rich and moist chocolate cake topped with creamy frosting.",
      price: "$6.99",
    },
    {
      id: 6,
      title: "Chicken Burger",
      description: "Grilled chicken patty with lettuce, tomato, and mayo.",
      price: "$10.99",
    },
    {
      id: 7,
      title: "California Roll",
      description: "Crab, avocado, and cucumber sushi roll.",
      price: "$14.99",
    },
    {
      id: 8,
      title: "Ice Cream Sundae",
      description: "Vanilla ice cream with chocolate syrup, nuts, and cherries.",
      price: "$7.99",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <h2 className="text-center text-4xl font-extrabold text-gray-900 sm:text-5xl mb-12">Our Menu</h2>
      <div className="text-center mb-8">
        <button className="bg-teal-500 text-white py-2 px-4 rounded-full mx-2 hover:bg-teal-600">All</button>
        <button className="border bg-black border-gray-300 py-2 px-4 rounded-full mx-2 hover:bg-white hover:text-black hover:font-bold">Pizza</button>
        <button className="border  bg-black border-gray-300 py-2 px-4 rounded-full mx-2 hover:bg-white  hover:text-black hover:font-bold ">Burgers</button>
        <button className="border  bg-black border-gray-300 py-2 px-4 rounded-full mx-2 hover:bg-white  hover:text-black hover:font-bold ">Sushi</button>
        <button className="border  bg-black border-gray-300 py-2 px-4 rounded-full mx-2 hover:bg-white  hover:text-black hover:font-bold ">Desserts</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-teal-500 font-bold text-lg">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
