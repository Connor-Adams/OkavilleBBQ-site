import React from 'react';
import { Link } from 'react-router-dom';

type Package = {
  name: string;
  description: string;
  minimumCost: number;
  meats: string[];
  salads: string[];
  desserts: string[];
  drinks: string[];
  additionalFeatures: string[];
};

const packages: Package[] = [
  {
    name: "School Event",
    description: "Perfect for School Barbeque or Funfair!",
    minimumCost: 0,
    meats: [
      "Tasty Burger",
      "Large Hot Dog",
      "Veggie Burger"
    ],
    salads: [
    ],
    desserts: [
      "Chips"
    ],
    drinks: [
      "Bottled Water",
      "Juice",
      "Regular & Diet Soda"
    ],
    additionalFeatures: [
      "We come with 25% extra supply to cover any day of sales",
      "Disposable plates, utensils, and napkins",
      "2-hour serving duration"
    ]
  },
  {
    name: "Corporate Package",
    description: "Ideal for business meetings and office events",
    minimumCost: 0,
    meats: [
      "Prime Rib Burger",
      "Chicken Breast Grill",
      "Halal Beef Burger",
      "Veggie Burger",
      "Sausage" 
    ],
    salads: [
      "Classic Caesar",
      "Macaroni",
      "Pototao", 
      "Coleslaw"
    ],
    desserts: [
      "Assorted Dessert Squares"
    ],
    drinks: [
      "Regular & Diet Soda",
      "Juice",
      "Bottled Water"
    ],
    additionalFeatures: [
      "Professional staff",
      "Premium disposable dinnerware",
      "Setup and cleanup"
    ]
  }
];

const MenuPage = () => {
  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Catering Packages</h1>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            Customizable BBQ packages for any occasion, featuring our signature grilled meats and homemade sides.
          </p>
        </div>
      </section>

    {/* Packages Section */}
<section className="py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="space-y-12">
      {packages.map((pkg, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
              <div>
                <h2 className="text-3xl font-bold text-amber-900">{pkg.name}</h2>
                <p className="text-lg text-gray-600 mt-2">{pkg.description}</p>
              </div>
              {pkg.minimumCost !== undefined && (
                <p className="text-xl font-semibold text-amber-600 mt-4 lg:mt-0 lg:ml-8">
                  {pkg.minimumCost > 0 ? `Event Minimum $${pkg.minimumCost}.00` : "Contact Us for Pricing"}
                </p>
              )}
            </div>

            {/* Package Details */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Dynamically Render Sections */}
                {pkg.meats?.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-4">Grilled Meats</h3>
                    <ul className="space-y-2">
                      {pkg.meats.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="h-2 w-2 bg-amber-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {pkg.salads?.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-4">Salads</h3>
                    <ul className="space-y-2">
                      {pkg.salads.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="h-2 w-2 bg-amber-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {pkg.desserts?.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-4">Desserts</h3>
                    <ul className="space-y-2">
                      {pkg.desserts.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="h-2 w-2 bg-amber-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {pkg.drinks?.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-4">Drinks</h3>
                    <ul className="space-y-2">
                      {pkg.drinks.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="h-2 w-2 bg-amber-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Additional Features */}
              {pkg.additionalFeatures?.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-amber-900 mb-4">Additional Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {pkg.additionalFeatures.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="h-2 w-2 bg-amber-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-12 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Ready to Plan Your Event?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact us to customize your perfect BBQ package and get a detailed quote for your event.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg"
          >
            Get Your Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;