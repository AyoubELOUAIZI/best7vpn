import React from "react";
import ReviewCard from "../components/ReviewCard";
import CustomerTestimoniesGrid from "../components/CustomerTestimoniesGrid";

export const metadata = {
  title: 'Best7vpn - Best 7 VPN Reviews',
  description: 'Explore detailed reviews for the top 7 VPN services. Find comprehensive information about each VPN, including features, performance, and pros and cons. Make an informed decision to enhance your online security and privacy.',
}
const ReviewsData = [
  {
    order: "1",
    image:
      "https://res.cloudinary.com/dm9udoven/image/upload/v1700814212/best7vpn/ExpressVPN-logo_smsvot.jpg",
    name: "ExpressVPN",
    points: "9.5",
    startAt: "12.95",
    starsNum: 10,
    goodness: "Excellent",
    description:
      "ExpressVPN: This is one of the fastest VPNs we’ve tested, registering an 18% speed loss in our latest tests in February and March of 2023. It has a large network of more than 3,000 servers in 160 locations across 94 countries. It offers top-notch security with no leaks detected, excellent for streaming, and a 30-day money-back guarantee.",
    link: "",
  },
  {
    order: "2",
    image:
      "https://res.cloudinary.com/dm9udoven/image/upload/v1700813930/best7vpn/nordvpn-rebrand_mnowhf.svg",
    name: "NordVPN",
    points: "9.4",
    startAt: "3.71",
    goodness: "Excellent",
    starsNum: 10,
    description:
      "NordVPN is another excellent VPN service that offers fast speeds, top-notch security, and a large network of servers in 59 countries. It has a feature called CyberSec that blocks ads, malware, and trackers. It also supports P2P file sharing and streaming services like Netflix and Hulu. It has a strict no-logs policy and a 30-day money-back guarantee",
    link: "",
  },
  {
    order: "3",
    image:
      "https://res.cloudinary.com/dm9udoven/image/upload/v1700813930/best7vpn/TorGuard_VPN_n06ump.png",
    name: "TorGuard VPN",
    points: "9.1",
    startAt: "9.99",
    goodness: "Very Good",
    starsNum: 9,
    description:
      " TorGuard VPN is a highly customizable VPN that offers over 3,000 servers in 68 countries. It has a feature called Stealth VPN that bypasses VPN blocking and DPI firewalls. It also supports P2P file sharing and streaming services like Netflix and Hulu. It has a strict no-logs policy and a 7-day money-back guarantee",
    link: "",
  },
  {
    order: "4",
    image:
      "https://res.cloudinary.com/dm9udoven/image/upload/v1700813930/best7vpn/Private_Internet_Access_VPN_dezwnu.jpg",
    name: "Private Internet Access VPN",
    points: "9.0",
    startAt: "2.69",
    goodness: "Very Good",
    starsNum: 9,
    description:
      "Private Internet Access VPN offers over 35,000 servers in 77 countries. It has a feature called MACE that blocks ads, trackers, and malware. It also supports P2P file sharing and streaming services like Netflix and Hulu. It has a strict no-logs policy and a 30-day money-back guarantee",
    link: "",
  },
  {
    order: "5",
    image:
      "https://res.cloudinary.com/dm9udoven/image/upload/v1700813931/best7vpn/ProtonVPN_xjncv5.jpg",
    name: "ProtonVPN",
    points: "8.5",
    startAt: "8.00",
    goodness: "Good",
    starsNum: 8,
    description:
      "ProtonVPN is a good VPN service that offers over 1,200 servers in 55 countries. It has a feature called Secure Core that routes your traffic through multiple servers before leaving the VPN network. It also supports P2P file sharing and streaming services like Netflix and Hulu. It has a strict no-logs policy and a 30-day money-back guarantee",
    link: "",
  },
  {
    order: "6",
    image:
      "https://res.cloudinary.com/dm9udoven/image/upload/v1700780756/best7vpn/cyberghost_vpn_kbrr9a.svg",
    name: "CyberGhost VPN",
    points: "8.4",
    startAt: "2.75",
    goodness: "Good",
    starsNum: 8,
    description:
      "CyberGhost VPN is a good VPN service that offers over 7,000 servers in 91 countries. It has a feature called NoSpy servers that are located in Romania and offer extra privacy and security. It also supports P2P file sharing and streaming services like Netflix and Hulu. It has a strict no-logs policy and a 45-day money-back guarantee",
    link: "",
  },
  {
    order: "7",
    image:
      "https://res.cloudinary.com/dm9udoven/image/upload/v1700813930/best7vpn/Surfshark_VPN_dmtzjp.webp",
    name: "Surfshark VPN",
    points: "8.2",
    startAt: "2.49",
    goodness: "Good",
    starsNum: 7,
    description:
      "Surfshark VPN is a good VPN service that offers over 3,200 servers in 65 countries. It has a feature called CleanWeb that blocks ads, trackers, and malware. It also supports P2P file sharing and streaming services like Netflix and Hulu. It has a strict no-logs policy and a 30-day money-back guarantee",
    link: "",
  },
];
const Reviews = () => {
  return (
    <div className="pt-3 ">
      <ul className="grid grid-cols-1  gap-y-8 gap-x-6 items-start p-8 xl:mx-40">
        {ReviewsData.map((review) => (
          <ReviewCard key={review.order} review={review} />
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
