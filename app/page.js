import Hero1 from "./components/Hero1";
import Image from "next/image";
import ProductCard from "./components/ProductCard";
import TransparencyHero from "./components/TransparencyHero";
import AdditionText from "./components/AdditionText";
import {ReviewsInfo} from "./VpnReviwData"
export default function Home() {
  return (
    // flex min-h-screen flex-col items-center justify-between p-24
    <main className="">
      <Hero1 />

      <div className="lg:flex">
        <div className=" m-5 items-center  mx-auto">
       <TransparencyHero/>
        {ReviewsInfo.map(review=>(
          <ProductCard Reviw={review} key={review.order} />
        )) }
        </div>
        <div className="   p-2 m-2"> </div>

      </div>
      <AdditionText/>
    </main>
  );
}
