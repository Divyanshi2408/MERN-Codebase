import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // You can implement the logic to handle the newsletter subscription here
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white py-12">
      <div className="container mx-auto text-center md:text-left space-y-12">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row justify-between">
          <div className="text-4xl font-bold">MyApp</div>
          <p className="text-lg max-w-lg text-center md:text-left">
            Your go-to platform for amazing services and features. Explore, discover, and engage with us!
          </p>
          <div className="space-x-6 mt-6 md:mt-0">
            <a href="#" className="text-white hover:text-blue-300 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-6 h-6 inline-block" />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_2012.svg" alt="Twitter" className="w-6 h-6 inline-block" />
            </a>
            <a href="#" className="text-white hover:text-pink-300 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Instagram_Logo_2022.svg" alt="Instagram" className="w-6 h-6 inline-block" />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-6 h-6 inline-block" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-blue-300 transition duration-300">About</a></li>
              <li><a href="#services" className="hover:text-blue-300 transition duration-300">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-300 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
            <p className="mt-2 text-sm">Get the latest updates and news delivered to your inbox.</p>
            <form onSubmit={handleNewsletterSubmit} className="mt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 rounded-md w-2/3 md:w-3/4 text-gray-800"
                required
              />
              <button type="submit" className="ml-4 bg-indigo-700 text-white p-2 rounded-md hover:bg-indigo-800 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-2 mt-4">
              <li className="text-sm">Email: contact@myapp.com</li>
              <li className="text-sm">Phone: +1 123 456 789</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold">Our Location</h3>
            <p className="mt-4 text-sm">123 MyApp Street, City, Country</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t-2 border-white pt-6">
          <p className="text-sm">© 2025 MyApp. All rights reserved.</p>
          <div className="mt-2 space-x-6">
            <a href="#" className="text-white hover:text-blue-300 transition duration-300">Privacy Policy</a>
            <a href="#" className="text-white hover:text-blue-300 transition duration-300">Terms of Service</a>
            <a href="#" className="text-white hover:text-blue-300 transition duration-300">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer ;
