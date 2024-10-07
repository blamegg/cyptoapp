import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-400 py-10 bg-white font-varela">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-wrap justify-between px-5">
          <div className="w-full sm:w-1/4 mb-6">
            <h3 className="text-lg font-medium mb-4 text-black">PRODUCTS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Zen Features</a></li>
              <li><a href="#" className="hover:underline">Mahogany Express</a></li>
              <li><a href="#" className="hover:underline">Socialite Versace</a></li>
              <li><a href="#" className="hover:underline">Fast Link</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-6 ">
            <h3 className="text-lg font-medium mb-4 text-black">SUPPORT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Support Portal</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Tutorials</a></li>
              <li><a href="#" className="hover:underline">Documentation</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-6 ">
            <h3 className="text-lg font-medium mb-4 text-black">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Forum</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-6">
            <h3 className="text-lg font-medium mb-4 text-black">SOCIAL</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-flickr"></i></a>
            </div>
          </div>
        </div>
        <span className="h-20 w-10 bg-gray-600"></span>
        <div className="text-center mt-10">
          <div className="mb-4">
            <a href="https://cryptapp.wpengine.com/" rel="home">
              <img src="https://cryptapp.wpenginepowered.com/wp-content/themes/cryptapp/images/logo.png" alt="CryptApp WordPress Theme" className="mx-auto"/>
            </a>
          </div>
          <p>Copyright © 2018 <a href="#" className="hover:underline">designthemes</a> | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
