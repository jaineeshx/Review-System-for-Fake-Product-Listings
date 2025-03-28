
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import BlockchainVisual from "@/components/BlockchainVisual";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <HowItWorks />
        <BlockchainVisual />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
