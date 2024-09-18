import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to JLuxe Nails</h1>
        <p className="text-xl mb-8">Your one-stop shop for luxury nails, hairstyles, makeup, and more.</p>
        <Link to="/services" className="bg-white text-pink-500 py-3 px-6 rounded-lg font-bold">Explore Our Services</Link>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white text-gray-800">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Individual Service Cards */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Nail Art</h3>
            <p>Get your nails done in style with our top-notch nail art services.</p>
            <Link to="/services" className="mt-4 inline-block text-pink-500 hover:underline">Learn More</Link>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Makeup</h3>
            <p>Discover professional makeup services for all occasions.</p>
            <Link to="/services" className="mt-4 inline-block text-pink-500 hover:underline">Learn More</Link>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Hairstyling</h3>
            <p>Get your hair styled by experts for a glamorous look.</p>
            <Link to="/services" className="mt-4 inline-block text-pink-500 hover:underline">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
