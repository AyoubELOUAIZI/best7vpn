import React from "react";

const HeroText = () => {
  return (
    <header class="bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          Explore the <span class="text-pink-300">World of</span>{" "}
          <span class="text-purple-300">VPN</span>{" "}
          <span class="text-blue-300">Learning</span>
        </h1>

        <p class="text-lg sm:text-xl lg:text-2xl font-medium text-white leading-tight mb-8">
        Uncover the secrets of Virtual Private Networks and empower yourself <br/>with knowledge in our comprehensive VPN learning section.

        </p>
     
      </div>
    </header>
  );
};

export default HeroText;
