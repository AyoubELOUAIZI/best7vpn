import React from 'react'

const Hero1 = () => {
  return (
//     <!--
//   Heads up! 👋

//   This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
// -->

<section
  class=" relative bg-[url(https://i.gifer.com/origin/1a/1a8e3e69c25ec05a86423c612c64c84c_w200.gif)] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute inset-0 bg-white/75 sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  >
    
  </div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
      Unlock a World of Secure Online Freedom with 

        <strong class=" font-extrabold text-rose-700">
        &nbsp;the Best 7 VPNs!
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl/relaxed">
      Explore the Best Virtual Private Networks (VPNs) for Ultimate Privacy and Unrestricted Access
      </p>

      {/* <div class="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div> */}
    </div>
  </div>
</section>
  )
}

export default Hero1