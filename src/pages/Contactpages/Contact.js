import React from "react";
function Contact() {
    return (
      <div className="py-20 bg-white">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <form className="max-w-3xl mx-auto px-4">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input className="w-full border border-gray-300 p-2 rounded-lg" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input className="w-full border border-gray-300 p-2 rounded-lg" type="email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full border border-gray-300 p-2 rounded-lg"></textarea>
          </div>
          <button type="submit" className="bg-pink-500 text-white py-3 px-6 rounded-lg">Send Message</button>
        </form>
      </div>
    );
  }
  
  export default Contact;  