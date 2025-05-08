import React from "react";
import ProductCard from "../components/ProductCard";
import TestimonialBox from "../components/TestimonialBox";
import CardLayout from "../components/CardLayout";
import SectionContainer from "../components/SectionContainer";

const HomeView = () => {
  return (
    <SectionContainer>
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to Our Store</h1>

      {/* Using Props-Based Components */}
      <CardLayout>
        <ProductCard
          title="Smart Watch"
          image="https://via.placeholder.com/150"
          price="99.99"
        />
      </CardLayout>

      <CardLayout>
        <TestimonialBox
          name="John Doe"
          review="Amazing product! Highly recommend."
          rating={5}
        />
      </CardLayout>
    </SectionContainer>
  );
};

export default HomeView;
