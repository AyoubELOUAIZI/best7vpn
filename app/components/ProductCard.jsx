import React from "react";
import Image from "next/image";
import StarIcon from "./StarIcon";

const ProductCard = ({ Reviw }) => {
  return (
    <>
      <div class="p-4">
        <figure class="md:flex max-w-7xl bg-slate-300 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
          <h1 className="p-3 text-3xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              {Reviw.order}
            </span>{" "}
          </h1>
          <Image
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-contain"
            src={Reviw.image}
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg  font-medium">“{Reviw.description}”</p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400 flex items-center">
                Stars :&nbsp;
                {Array.from({ length: Reviw.starsNum }, (_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                <span className="text-sky-500 dark:text-sky-400">
                  Ranking :&nbsp;
                </span>{" "}
                <span className="font-semibold text-5xl tracking-tight">
                  {Reviw.points}
                </span>
                &nbsp;({Reviw.goodness})
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                <span className="text-sky-500 dark:text-sky-400">
                  Start At :&nbsp;
                </span>{" "}
                <span className="font-semibold text-5xl tracking-tight">
                  US$ {Reviw.startAt}
                  <span className="text-2xl">/mo</span>
                </span>
              </div>
              <div class="mt-3 text-gray-600 text-sm md:text-sm">
                This VPN seamlessly operates across a diverse range of
                platforms, including Windows, macOS, Linux, Android, iOS,
                Chrome, Firefox, and more.
              </div>
            </figcaption>
            <div className="md:text-right">
              <a
                href={Reviw.link}
                target="_blank"
                class="btn mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6  bg-gradient-to-r to-emerald-600 from-sky-400 font-bold text-white md:text-lg rounded-lg shadow-md"
              >
                Go to Official Site
              </a>
            </div>
          </div>
        </figure>
      </div>
    </>
  );
};

export default ProductCard;
