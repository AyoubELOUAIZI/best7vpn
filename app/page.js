import Hero1 from "./components/Hero1";
import Image from "next/image";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    // flex min-h-screen flex-col items-center justify-between p-24
    <main className="">
      <Hero1 />
      <div className="lg:flex">
        <div className=" m-5 items-center  mx-auto">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="   p-2 m-2"> </div>

      </div>
    </main>
  );
}
