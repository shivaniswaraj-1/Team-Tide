import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-gray-200">
      <div className="container px-5 py-8 mx-auto flex items-center justify-center flex-col md:flex-row">
        <a href="#" className="flex w-40 mb-4 md:mb-0">
          <img src="/images/logo.svg" alt="footer logo" className="cursor-pointer" />
        </a>
        <nav className="md:ml-10 flex flex-wrap items-center text-base justify-center">
          <a href="https://about.google/" className="mr-5 text-gray-500 hover:text-gray-600">About Team TIde</a>
          <a href="https://about.google/products/" className="mr-5 text-gray-500 hover:text-gray-600">Team TIde Products</a>
          <a href="https://policies.google.com/privacy" className="mr-5 text-gray-500 hover:text-gray-600">Privacy</a>
          <a href="https://policies.google.com/terms" className="text-gray-500 hover:text-gray-600">Terms</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
