import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Users, Award, Clock } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">BBQ Catering</h1>
          <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-2xl">
            Bringing authentic, rich flavors to your events. From backyard parties to corporate gatherings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/menu" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center">
              View Our Menu
            </Link>
            <Link to="/contact" className="inline-block bg-transparent hover:bg-white hover:text-amber-900 text-white font-bold py-3 px-6 rounded-lg border-2 border-white transition duration-300 text-center">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Why Choose Oakville BBQ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
                <ChefHat className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Expert Grillmasters</h3>
              <p className="text-gray-600">Our team brings decades of experience in authentic BBQ techniques.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Events of All Sizes</h3>
              <p className="text-gray-600">From intimate gatherings to large corporate events, we've got you covered.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">We use only the finest ingredients and equipment.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Timely Service</h3>
              <p className="text-gray-600">We pride ourselves on punctuality and professional service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Signature BBQ</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A taste of what we offer. Slow-smoked meats and homemade sides prepared with traditional techniques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Smoked Brisket" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Texas-Style Brisket</h3>
                <p className="text-gray-600 mb-4">
                  Slow-smoked for 14 hours over oak wood, our brisket is tender, juicy, and full of flavor.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80" 
                alt="Pulled Pork" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Carolina Pulled Pork</h3>
                <p className="text-gray-600 mb-4">
                  Tender pork shoulder smoked low and slow, hand-pulled and served with our signature sauce.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1608877907149-a206d75ba011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="BBQ Ribs" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">St. Louis Ribs</h3>
                <p className="text-gray-600 mb-4">
                  Fall-off-the-bone tender ribs with a perfect bark, glazed with our house-made BBQ sauce.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/menu" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              View Full Menu
            </Link>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-800 p-6 rounded-lg">
              <p className="italic mb-4">
                "Oakville BBQ catered our wedding and the food was absolutely incredible. Our guests are still talking about the brisket!"
              </p>
              <p className="font-semibold">- Sarah & Mike</p>
            </div>
            
            <div className="bg-amber-800 p-6 rounded-lg">
              <p className="italic mb-4">
                "The best BBQ in the region, hands down. Professional service and amazing food for our company picnic."
              </p>
              <p className="font-semibold">- John D., Corporate Event</p>
            </div>
            
            <div className="bg-amber-800 p-6 rounded-lg">
              <p className="italic mb-4">
                "We've used Oakville for multiple events and they never disappoint. The ribs and sides are out of this world!"
              </p>
              <p className="font-semibold">- Lisa T., Birthday Party</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Ready to Elevate Your Event?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Let us bring the delicious flavors of authentic BBQ to your next gathering. Get in touch for a custom quote.
          </p>
          <Link to="/contact" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;