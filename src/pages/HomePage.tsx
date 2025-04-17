import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Users, Award, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';


const HomePage = () => {
  return (
    <div>

      <Helmet>
        <title>Oakville BBQ - Premium BBQ Catering</title>
        <meta
          name="description"
          content="Oakville BBQ provides premium BBQ catering services for events of all sizes. "
        />
        <link rel="canonical" href="https://oakvillebbq.com/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">BBQ Catering</h1>
          <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-2xl">
            From backyard parties to corporate gatherings. Proudly serving Halton and surrounding regions
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">           
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