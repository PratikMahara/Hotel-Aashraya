import React from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice infused with black truffle, parmesan, and fresh herbs.',
    price: 28,
    image: 'https://images.pexels.com/photos/162744/food-risotto-dish-cuisine-162744.jpeg',
  },
  {
    id: 2,
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with lemon herb sauce, served with roasted vegetables.',
    price: 32,
    image: 'https://images.pexels.com/photos/376464/pan-fried-salmon-food-dish-376464.jpeg',
  },
  {
    id: 3,
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, paired with vanilla ice cream.',
    price: 12,
    image: 'https://images.pexels.com/photos/357573/dessert-chocolate-cake-food-357573.jpeg',
  },
];

const MenuPage1: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(https://images.pexels.com/photos/262978/restaurant-dining-table-fine-dining-262978.jpeg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white font-serif">Our Exquisite Menu</h1>
        </div>
      </div>

      {/* Menu Items Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 font-serif">{item.name}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-xl font-bold text-gray-900 mt-4">${item.price.toFixed(2)}</p>
                <button className="mt-4 bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors duration-300">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-900 text-white py-8 text-center">
        <p className="text-lg">Experience fine dining at its best. Reserve your table today!</p>
        <a
          href="/reserve"
          className="mt-4 inline-block bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300"
        >
          Book a Table
        </a>
      </div>
    </div>
  );
};

export default MenuPage1;