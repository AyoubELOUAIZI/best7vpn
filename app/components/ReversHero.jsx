import React from 'react'
import Image from 'next/image'
const ReversHero = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container items-center flex flex-col justify-center mx-auto sm:py-12 lg:px-32 lg:flex-row lg:justify-around">
		<div className="flex items-center justify-center p-3 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<Image src="https://res.cloudinary.com/dm9udoven/image/upload/v1700497863/best7vpn/affiliate_okx5vt.jpg" width={500} height={300} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-3xl"/>
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg ">
			<h1 className="text-5xl font-bold leadi sm:text-6xl">Transparent and Trustworthy{" "}
				<span className="dark:text-violet-400">VPN</span>{" "}Reviews
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">“At best7vpn.online, we believe in transparency. We want you to make informed decisions about VPN services, which is why we provide honest reviews. To support our efforts, we use affiliate links. If you find our recommendations helpful and decide to make a purchase, we may earn a commission at no extra cost to you.{" "}
				<br className="hidden md:inline lg:hidden"/> Your support ensures we can continue delivering unbiased content. Explore our reviews and trust best7vpn.online for reliable insights into the world of VPNs.”
			</p>
			{/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
			</div> */}
		</div>
	</div>
</section>
  )
}

export default ReversHero