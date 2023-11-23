import React from "react";

const HeroText = () => {
  return (
    <header className="bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          Explore the <span className="text-pink-300">World of</span>{" "}
          <span className="text-purple-300">VPN</span>{" "}
          <span className="text-blue-300">Learning</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white leading-tight mb-8">
        Uncover the secrets of Virtual Private Networks and empower yourself <br/>with knowledge in our comprehensive VPN learning section.

        </p>
     
      </div>
    </header>
  );
};

export default HeroText;
