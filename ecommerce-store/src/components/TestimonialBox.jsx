import React from "react";

const TestimonialBox = ({ name, review, rating }) => {
  return (
    <div className="border p-4 rounded bg-gray-100 shadow-md">
      <h3 className="font-bold">{name}</h3>
      <p className="italic">"{review}"</p>
      <p className="text-yellow-500">Rating: {rating} ★</p>
    </div>
  );
};

export default TestimonialBox;
