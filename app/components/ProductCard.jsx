import React from "react";
import Image from "next/image";
import StarIcon from "./StarIcon";

const ProductCard = () => {
  return (
    <>
      <div class="p-4">
        <figure class="md:flex max-w-7xl bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
        <h1 className="p-3 text-3xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        1
        </span>{" "}
      </h1>
          <Image
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-contain"
            src="https://res.cloudinary.com/dm9udoven/image/upload/v1700780756/best7vpn/cyberghost_vpn_kbrr9a.svg"
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “CyberGhost VPN: Fast, secure, and easy-to-use service for all
                major operating systems and devices. Unlimited bandwidth, no
                logs, streaming-optimized servers, and a 45-day money-back
                guarantee. Encrypts online traffic, hides real IP address,
                ensuring privacy and security on any device. Connect up to 7
                devices simultaneously with just 1 subscription. App available
                for Windows, macOS, Android, iOS, and Linux; can be configured
                with routers, Smart TVs, Amazon Fire TV Stick, or game consoles.
                Large server fleet across America, Europe, Africa, and Asia for
                accessing favorite content. Fast speeds for streaming,
                downloading, and online gaming.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400 flex items-center">
                Stars :&nbsp;
                <StarIcon />{" "}
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                <span className="text-sky-500 dark:text-sky-400">
                  Ranking :&nbsp;
                </span>{" "}
                <span className="font-semibold text-5xl tracking-tight">
                  9.8
                </span>
                &nbsp;(Very Good)
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                <span className="text-sky-500 dark:text-sky-400">
                  Start At :&nbsp;
                </span>{" "}
                <span className="font-semibold text-5xl tracking-tight">
                  US$ 9.8<span className="text-2xl">/mo</span> 
                </span>
              </div>
              <div class="mt-3 text-gray-600 text-sm md:text-sm">
                This VPN seamlessly operates across a diverse range of
                platforms, including Windows, macOS, Linux, Android, iOS,
                Chrome, Firefox, and more.
              </div>
            </figcaption>
            <div className="md:text-right">
              <button class="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6  bg-gradient-to-r to-emerald-600 from-sky-400 font-bold text-white md:text-lg rounded-lg shadow-md">
                Go to Official Site
              </button>
            </div>
          </div>
        </figure>
      </div>
    </>
  );
};

export default ProductCard;
