import Hero1 from "./components/Hero1";
import Image from "next/image";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    // flex min-h-screen flex-col items-center justify-between p-24
    <main className="">
      <Hero1 />
      <div className="lg:flex">
        <div className=" m-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="bg-blue-300  w-1/5 border-black p-2 m-2"> </div>
        
      </div>
    </main>
  );
}
