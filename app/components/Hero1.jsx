import React from 'react'

const Hero1 = () => {
  return (
//     <!--
//   Heads up! 👋

//   This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
// -->

<section
  className=" relative bg-[url(https://res.cloudinary.com/dm9udoven/image/upload/v1701558293/best7vpn/ezgif-5-1ec2dceb6b_js0whi.gif)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  >
    
  </div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Unlock a World of Secure Online Freedom with 

        <strong className=" font-extrabold text-rose-700">
        &nbsp;the Best 7 VPNs!
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      Explore the Best Virtual Private Networks (VPNs) for Ultimate Privacy and Unrestricted Access
      </p>

      {/* <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
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