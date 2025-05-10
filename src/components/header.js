import React from 'react';

const Header = () => {
  const focusJoinInput = () => {
    const input = document.getElementById('join_meeting_input');
    if (input) input.focus();
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
        <a href="#" className="flex w-40">
          <img src="/images/logo.svg" alt="logo" className="cursor-pointer" />
        </a>
        <nav className="md:ml-auto md:mr-auto md:flex hidden md:items-center md:text-base md:justify-center">
          <a href="https://workspace.google.com/" className="mr-10 hover:text-gray-900">Solutions</a>
          <a href="https://workspace.google.com/pricing.html" className="mr-10 hover:text-gray-900">Plans & Pricing</a>
          <a href="https://workspace.google.com/contact-form/" className="mr-10 hover:text-gray-900">Contact Sales</a>
          <a href="https://workspace.google.com/training/" className="mr-10 hover:text-gray-900">Resources</a>
        </nav>
        <button onClick={focusJoinInput} className="md:inline-flex md:bg-white text-blue-600 border border-gray-300 py-2 px-4 mx-2 hidden">Join a meeting</button>
        <button className="md:inline-flex bg-blue-600 text-white py-2 px-4 hidden">Start a meeting</button>
      </div>
    </header>
  );
};

export default Header;
