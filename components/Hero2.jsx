import React from "react";
import Link from "next/link";

const Hero2 = () => {
  return (
    <section class="bg-indigo-600 text-white py-20 px-4">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h2 class="text-4xl font-bold leading-tight mb-4">
            Understanding the Essence of Virtual Private Networks
          </h2>
          <p class="text-xl mb-4">
            Embark on a journey of digital enlightenment as we unravel the
            mysteries behind Virtual Private Networks (VPNs). In a world where
            online privacy is a growing concern, discover how a VPN can be your
            steadfast companion in navigating the vast landscape of the internet
            securely.
          </p>
          <Link href={'/reviews'} class="bg-white text-indigo-600 font-bold py-3 px-6 rounded hover:bg-indigo-600 hover:text-white">
            Check Our Reviews
          </Link>
        </div>
        <div class="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713"
            alt="Hero Image"
            class="w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
