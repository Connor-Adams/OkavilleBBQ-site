import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Award, Flame, Truck } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            Passionate about authentic BBQ and dedicated to bringing the best flavors to your table.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">The Oakville BBQ Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2015 by pitmaster James Oakley, Oakville BBQ began as a passion project born from decades of family BBQ traditions and professional culinary training.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                What started as a small catering operation for friends and family quickly grew into one of the region's most sought-after BBQ catering services, known for authentic flavors and exceptional service.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our commitment to traditional smoking techniques, quality ingredients, and customer satisfaction has earned us a reputation as the go-to caterer for events of all sizes.
              </p>
              <p className="text-lg text-gray-700">
                Today, our team of experienced pitmasters and culinary professionals continues to uphold the traditions that made us successful while constantly innovating to bring you the best BBQ experience possible.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80" 
                alt="Oakville BBQ Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-amber-800 p-6 rounded-lg text-center">
              <div className="inline-block p-3 bg-amber-700 rounded-full mb-4">
                <Flame className="h-8 w-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-amber-200">
                We stay true to traditional BBQ techniques, using wood-fired smokers and time-honored recipes.
              </p>
            </div>
            
            <div className="bg-amber-800 p-6 rounded-lg text-center">
              <div className="inline-block p-3 bg-amber-700 rounded-full mb-4">
                <Award className="h-8 w-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-amber-200">
                We source only the finest ingredients and never compromise on the quality of our food or service.
              </p>
            </div>
            
            <div className="bg-amber-800 p-6 rounded-lg text-center">
              <div className="inline-block p-3 bg-amber-700 rounded-full mb-4">
                <ChefHat className="h-8 w-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Craftsmanship</h3>
              <p className="text-amber-200">
                Our pitmasters are skilled artisans who take pride in their craft and attention to detail.
              </p>
            </div>
            
            <div className="bg-amber-800 p-6 rounded-lg text-center">
              <div className="inline-block p-3 bg-amber-700 rounded-full mb-4">
                <Truck className="h-8 w-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-amber-200">
                We deliver on our promises, ensuring your event is executed flawlessly from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" 
                alt="James Oakley" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-1">James Oakley</h3>
                <p className="text-amber-600 font-medium mb-3">Founder & Head Pitmaster</p>
                <p className="text-gray-600">
                  With over 20 years of BBQ experience, James brings his family's traditional recipes and techniques to every event.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1477&q=80" 
                alt="Maria Rodriguez" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-1">Maria Rodriguez</h3>
                <p className="text-amber-600 font-medium mb-3">Executive Chef</p>
                <p className="text-gray-600">
                  A culinary school graduate with a passion for Southern cuisine, Maria creates our signature sides and sauces.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="David Chen" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-1">David Chen</h3>
                <p className="text-amber-600 font-medium mb-3">Events Director</p>
                <p className="text-gray-600">
                  With a background in hospitality management, David ensures every event is executed flawlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Our BBQ Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white">
                      <span className="text-xl font-bold">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">Selection</h3>
                    <p className="text-gray-600">
                      We carefully select premium cuts of meat from trusted local suppliers who share our commitment to quality.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white">
                      <span className="text-xl font-bold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">Preparation</h3>
                    <p className="text-gray-600">
                      Each cut is hand-trimmed and seasoned with our proprietary rubs, then left to marinate for optimal flavor.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white">
                      <span className="text-xl font-bold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">Smoking</h3>
                    <p className="text-gray-600">
                      Using a blend of oak, hickory, and fruit woods, we smoke our meats at low temperatures for up to 16 hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white">
                      <span className="text-xl font-bold">4</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">Service</h3>
                    <p className="text-gray-600">
                      We deliver and serve our BBQ at the peak of freshness, ensuring an unforgettable dining experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="BBQ Smoking Process" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Authentic BBQ?</h2>
          <p className="text-xl text-amber-200 mb-8 max-w-3xl mx-auto">
            Let us bring our passion for BBQ to your next event. Contact us today for a custom quote.
          </p>
          <Link to="/contact" className="inline-block bg-white hover:bg-amber-100 text-amber-900 font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;