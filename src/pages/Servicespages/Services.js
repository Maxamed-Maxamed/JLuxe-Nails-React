import React from "react";
function Services() {
    return (
      <div className="py-20 bg-white text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Nail Art</h3>
            <p>From simple to extravagant, we offer nail art that makes a statement.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Makeup</h3>
            <p>Our makeup artists are ready to make you look stunning for any occasion.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Hairstyling</h3>
            <p>Get the perfect hairstyle, whether for a casual day out or a special event.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Eyelash Extensions</h3>
            <p>Transform your look with our professional eyelash extension services.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;
  