import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-600">JLuxe Nails</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-gray-700 hover:text-pink-500">Home</Link></li>
          <li><Link to="/services" className="text-gray-700 hover:text-pink-500">Services</Link></li>
          <li><Link to="/appointments" className="text-gray-700 hover:text-pink-500">Appointments</Link></li>
          <li><Link to="/contact" className="text-gray-700 hover:text-pink-500">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;