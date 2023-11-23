import React from "react";
import ReviewCard from "../components/ReviewCard";
import CustomerTestimoniesGrid from "../components/CustomerTestimoniesGrid";

const Reviews = () => {
  return (
    <div className="pt-3 ">
      <ul className="grid grid-cols-1  gap-y-8 gap-x-6 items-start p-8 xl:mx-40">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </ul>
      <CustomerTestimoniesGrid />
    </div>
  );
};

export default Reviews;
