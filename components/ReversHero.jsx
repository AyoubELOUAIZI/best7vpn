import React from 'react'
import Image from 'next/image'
const ReversHero = () => {
  return (
    <section class="dark:bg-gray-800 dark:text-gray-100">
	<div class="container flex flex-col justify-center mx-auto sm:py-12 lg:px-32 lg:flex-row lg:justify-around">
		<div class="flex items-center justify-center p-3 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<Image src="https://res.cloudinary.com/dm9udoven/image/upload/v1700497863/best7vpn/affiliate_okx5vt.jpg" width={500} height={300} alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-3xl"/>
		</div>
		<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 class="text-5xl font-bold leadi sm:text-6xl">Ac mattis{" "}
				<span class="dark:text-violet-400">senectus</span>{" "}erat pharetra
			</h1>
			<p class="mt-6 mb-8 text-lg sm:mb-12">&quot;Dictum aliquam porta in condimentum ac integer{" "}
				<br class="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem&quot;
			</p>
			<div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
			</div>
		</div>
	</div>
</section>
  )
}

export default ReversHero