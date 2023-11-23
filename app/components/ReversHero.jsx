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
			<h1 class="text-5xl font-bold leadi sm:text-6xl">Transparent and Trustworthy{" "}
				<span class="dark:text-violet-400">VPN</span>{" "}Reviews
			</h1>
			<p class="mt-6 mb-8 text-lg sm:mb-12">&quot;At best7vpn.online, we believe in transparency. We want you to make informed decisions about VPN services, which is why we provide honest reviews. To support our efforts, we use affiliate links. If you find our recommendations helpful and decide to make a purchase, we may earn a commission at no extra cost to you.{" "}
				<br class="hidden md:inline lg:hidden"/> Your support ensures we can continue delivering unbiased content. Explore our reviews and trust best7vpn.online for reliable insights into the world of VPNs.&quot;
			</p>
			{/* <div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
			</div> */}
		</div>
	</div>
</section>
  )
}

export default ReversHero