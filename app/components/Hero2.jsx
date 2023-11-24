import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero2 = () => {
  return (
    <section className="bg-indigo-600 text-white py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Understanding the Essence of Virtual Private Networks
          </h2>
          <p className="text-xl mb-4">
            Embark on a journey of digital enlightenment as we unravel the
            mysteries behind Virtual Private Networks (VPNs). In a world where
            online privacy is a growing concern, discover how a VPN can be your
            steadfast companion in navigating the vast landscape of the internet
            securely.
          </p>
          <Link href={'/reviews'} className="bg-white text-indigo-600 font-bold py-3 px-6 rounded hover:bg-indigo-600 hover:text-white">
            Check Our Reviews
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://res.cloudinary.com/dm9udoven/image/upload/v1700844011/best7vpn/digit_jtmpn2.jpg"
            alt="Hero Image"
            className="w-full rounded-xl"
            width={400} // Set your desired width here
            height={300} // Set your desired height here
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
