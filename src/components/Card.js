import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Card(props) {
  let reviews = props.reviews;

  return (
    <div className="flex flex-col md:relative">
      <div className="absolute hidden lg:block md:block top-[-7rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
          src={reviews.image}
          alt="reviewserimg"
        />
        <div className="w-[140px] h-[140px] z-[-10] absolute rounded-full bg-violet-500 top-[-6px] left-[10px]" />
      </div>

      <div className="text-center mt-7">
        <p className="text-2xl capitalize tracking-wider font-bold">{reviews.name}</p>
        <p className="text-violet-300 uppercase text-sm">{reviews.job}</p>
      </div>

      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-5 text-slate-500">{reviews.text}</div>

      <div className=" text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
}
