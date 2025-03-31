import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Menu data
const menuData = {
  mains: [
    {
      name: "Texas-Style Brisket",
      description: "Slow-smoked for 14 hours over oak wood, our brisket is tender, juicy, and full of flavor.",
      price: "$24.99/lb",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      name: "Carolina Pulled Pork",
      description: "Tender pork shoulder smoked low and slow, hand-pulled and served with our signature sauce.",
      price: "$19.99/lb",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
    },
    {
      name: "St. Louis Ribs",
      description: "Fall-off-the-bone tender ribs with a perfect bark, glazed with our house-made BBQ sauce.",
      price: "$26.99/rack",
      image: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      name: "Smoked Chicken",
      description: "Whole chickens brined and smoked to perfection, with crispy skin and juicy meat.",
      price: "$16.99/whole",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
    },
    {
      name: "Beef Ribs",
      description: "Massive, meaty beef ribs smoked until tender with a peppery crust.",
      price: "$32.99/lb",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
    },
    {
      name: "Smoked Sausage",
      description: "House-made sausages with the perfect blend of spices, smoked to juicy perfection.",
      price: "$14.99/lb",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    }
  ],
  sides: [
    {
      name: "Mac & Cheese",
      description: "Creamy four-cheese blend with a crispy breadcrumb topping.",
      price: "$5.99",
      image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      name: "Collard Greens",
      description: "Slow-cooked with smoked ham hocks for deep, rich flavor.",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      name: "Baked Beans",
      description: "Sweet and savory beans with bits of brisket, slow-cooked to perfection.",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1599020792689-9fde458e7e17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
    },
    {
      name: "Coleslaw",
      description: "Crisp cabbage in a tangy, slightly sweet dressing.",
      price: "$3.99",
      image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1690&q=80"
    },
    {
      name: "Cornbread",
      description: "Sweet, moist cornbread with a hint of honey, baked fresh daily.",
      price: "$2.99",
      image: "https://images.unsplash.com/photo-1621510456681-2330135e5871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      name: "Potato Salad",
      description: "Creamy red potato salad with a tangy mustard dressing.",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1640885988938-5a5f0f0e5b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    }
  ],
  desserts: [
    {
      name: "Peach Cobbler",
      description: "Warm peach cobbler with a buttery, flaky crust.",
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      name: "Banana Pudding",
      description: "Classic Southern banana pudding with vanilla wafers and fresh bananas.",
      price: "$5.99",
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
    },
    {
      name: "Pecan Pie",
      description: "Rich, gooey pecan pie with a hint of bourbon.",
      price: "$7.99/slice",
      image: "https://images.unsplash.com/photo-1609355109553-3bb6bb4268c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
    }
  ],
  drinks: [
    {
      name: "Sweet Tea",
      description: "Southern-style sweet tea, brewed fresh daily.",
      price: "$2.99",
      image: "https://images.unsplash.com/photo-1556679343-c1c1c9308e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      name: "Lemonade",
      description: "Fresh-squeezed lemonade with just the right amount of sweetness.",
      price: "$2.99",
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      name: "Craft Beer Selection",
      description: "Rotating selection of local craft beers.",
      price: "Varies",
      image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    }
  ]
};

// Package deals
const packageDeals = [
  {
    name: "The Backyard BBQ",
    description: "Perfect for casual gatherings of 20-30 people",
    price: "$24.99 per person",
    includes: [
      "Choice of 2 meats (Brisket, Pulled Pork, Ribs, or Chicken)",
      "3 sides of your choice",
      "Cornbread",
      "Sweet tea and lemonade",
      "All necessary utensils, plates, and napkins"
    ]
  },
  {
    name: "The Corporate Event",
    description: "Ideal for office parties and professional gatherings of 30+ people",
    price: "$29.99 per person",
    includes: [
      "Choice of 3 meats (All options available)",
      "4 sides of your choice",
      "Cornbread and dinner rolls",
      "Dessert selection",
      "Beverage station with tea, lemonade, and water",
      "Professional serving staff",
      "Setup and cleanup included"
    ]
  },
  {
    name: "The Wedding Feast",
    description: "Make your special day memorable with our premium package for 50+ guests",
    price: "$39.99 per person",
    includes: [
      "Full selection of all meats",
      "All sides available",
      "Custom menu consultation",
      "Appetizer station",
      "Dessert table",
      "Full beverage service (non-alcoholic)",
      "Professional serving staff",
      "Custom serving stations",
      "Complete setup and cleanup"
    ]
  }
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('mains');

  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            Authentic, slow-smoked BBQ prepared with traditional techniques and the finest ingredients.
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="py-8 bg-amber-900 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveCategory('mains')}
              className={`px-6 py-2 rounded-full font-medium transition ${activeCategory === 'mains' ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-900 hover:bg-amber-200'}`}
            >
              Smoked Meats
            </button>
            <button 
              onClick={() => setActiveCategory('sides')}
              className={`px-6 py-2 rounded-full font-medium transition ${activeCategory === 'sides' ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-900 hover:bg-amber-200'}`}
            >
              Sides
            </button>
            <button 
              onClick={() => setActiveCategory('desserts')}
              className={`px-6 py-2 rounded-full font-medium transition ${activeCategory === 'desserts' ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-900 hover:bg-amber-200'}`}
            >
              Desserts
            </button>
            <button 
              onClick={() => setActiveCategory('drinks')}
              className={`px-6 py-2 rounded-full font-medium transition ${activeCategory === 'drinks' ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-900 hover:bg-amber-200'}`}
            >
              Drinks
            </button>
            <button 
              onClick={() => setActiveCategory('packages')}
              className={`px-6 py-2 rounded-full font-medium transition ${activeCategory === 'packages' ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-900 hover:bg-amber-200'}`}
            >
              Catering Packages
            </button>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeCategory !== 'packages' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                      <span className="text-amber-600 font-bold">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {packageDeals.map((pkg, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md p-6 border-l-4 border-amber-600">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-amber-900 mb-2">{pkg.name}</h3>
                      <p className="text-gray-600 mb-4">{pkg.description}</p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {pkg.includes.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:ml-8 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-amber-600 mb-4">{pkg.price}</span>
                      <Link to="/contact" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 text-center">
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Custom Orders */}
      <section className="py-12 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Custom Catering Options</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Don't see exactly what you're looking for? We offer custom menus tailored to your specific event needs and dietary requirements.
          </p>
          <Link to="/contact" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
            Contact Us for Custom Orders
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;