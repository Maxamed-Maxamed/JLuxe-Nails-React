import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>© 2024 JLuxe Nails. All rights reserved.</p>
      <div className="space-x-4">
        <a href="https://www.instagram.com/yourprofile" className="hover:underline">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://www.facebook.com/yourprofile" className="hover:underline">
          <i className="fab fa-facebook"></i> Facebook
        </a>
        <a href="https://www.twitter.com/yourprofile" className="hover:underline">
          <i className="fab fa-twitter"></i> Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
