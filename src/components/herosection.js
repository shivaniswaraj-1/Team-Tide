import React from 'react';

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex md:px-16 px-5 md:py-24 py-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl mb-10 font-medium text-gray-900 w-3/4">
            Premium video meetings for everyone.
          </h1>
          <p className="mb-8 leading-relaxed w-[90%] text-lg text-gray-600">
            We re-engineered the service we built for secure, high-quality business meetings, Team TIde, to make it available for all, on any device.
          </p>
          <div className="flex flex-col md:flex-row md:justify-center items-center">
            <button className="text-white bg-blue-600 py-2 px-6 mb-4 hover:bg-blue-800 rounded text-lg flex justify-center">
              <i className="fa-solid fa-video pr-2"></i>
              Start a meeting
            </button>
            <input
              type="text"
              id="join_meeting_input"
              className="md:ml-2 pl-5 bg-white border border-gray-300 py-2 px-2 rounded text-lg"
              placeholder="Enter a meeting code"
            />
            <p className="md:ml-4 mt-2.5 text-gray-500 font-semibold cursor-pointer text-[17px]">
              Join
            </p>
          </div>
          <a href="https://support.google.com/accounts/answer/27441?hl=en" className="mt-10 font-medium">
            Don't have an account? <span className="text-blue-500">Get Started Now</span>
          </a>
        </div>
        <div className="md:max-w-lg w-5/6">
          <img src="/images/image1.webp" alt="first" className="object-cover object-center rounded" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
