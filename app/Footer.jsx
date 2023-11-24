import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative flex justify-end md:justify-center md:items-end">
      <Image
        className="absolute object-cover top-10 h-full w-full xl:mt-10 z-0"
        src="https://res.cloudinary.com/dm9udoven/image/upload/v1700437320/best7vpn/1609295170644784_uyy1wy.gif"
        alt="background"
        width={400} // Set your desired width here
        height={300} // Set your desired height here
      />
      <div className="flex pt-36 md:pt-32 lg:pt-40 xl:scroll-pt-52   px-4 md:px-6  xl:px-20 flex-col justify-start items-start md:justify-center md:items-center relative z-10">
        <div className="flex flex-col items-start justify-start xl:justify-center xl:space-x-8 xl:flex-row">
          <Link href={"/"}>
            <h1 className=" text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Best7vpn
              </span>{" "}
            </h1>
          </Link>

          <div className="mt-12 xl:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 w-full md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8">
            <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
              <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-black">
                Community
              </h2>
              <button className="text-left text-base hover:text-black-400 leading-none text-black-100">
                About Us
              </button>
              <button className="text-left text-base hover:text-black-400 leading-none text-black-100">
                Guidelines and how to
              </button>
              <button className="text-left text-base hover:text-black-400 leading-none text-black-100">
                Quote from the best
              </button>
              <button className="text-left text-base hover:text-black-400 leading-none text-black-100">
                How to start a blog
              </button>
            </div>

            <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
              <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-black">
                Getting Started
              </h2>
              <button className="text-left text-base hover:text-black-400 leading-none text-black-100">
                About Us
              </button>
              <button className="text-left text-base hover:text-black-400 leading-none text-black-100">
                Guidelines and how to
              </button>
              <button className="text-left text-base hover:text-black-400 leading-none text-black-100">
                Quote from the best
              </button>
              <button className="text-left text-base hover:text-black-400 leading-none text-black-100">
                How to start a blog
              </button>
              <button className="text-left text-base hover:text-black-400 leading-none text-black-100">
                Quote from the best
              </button>
              <button className="text-left text-base hover:text-black-400 leading-none text-black-100">
                Guidelines and how to
              </button>
            </div>

            <div className=" xl:w-72 flex justify-start items-start flex-col space-y-6">
              <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-black">
                Resources
              </h2>
              <button className="text-base text-left hover:text-black-400 leading-none text-black-100">
                Accessibility
              </button>
              <button className="text-base text-left hover:text-black-400 leading-none text-black-100">
                Usability
              </button>
              <button className="text-base text-left hover:text-black-400 leading-none text-black-100">
                Marketplace
              </button>
              <button className="text-base text-left hover:text-black-400 leading-none text-black-100">
                Design & Dev
              </button>
              <button className="text-base text-left hover:text-black-400 leading-none text-black-100">
                Marketplace
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 flex  xl:justify-between xl:flex-row flex-col-reverse items-center xl:items-start w-full ">
          <p className="mt-10 md:mt-12 xl:mt-0 text-sm leading-none text-white">
            Copyright © 2023 best7vpn.online - All Rights Reserved.
          </p>
          <div className="mt-10 md:mt-12 xl:mt-0 md:flex-row flex-col flex md:justify-center w-full md:w-auto justify-start items-start space-y-4 md:space-y-0 md:items-center md:space-x-4 xl:space-x-6">
            <button className="text-base leading-none text-white hover:text-black-300">
              Terms of service
            </button>
            <button className="text-base leading-none text-white hover:text-black-300">
              Privacy Policy
            </button>
            <button className="text-base leading-none text-white hover:text-black-300">
              Security
            </button>
            <button className="text-base leading-none text-white hover:text-black-300">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
