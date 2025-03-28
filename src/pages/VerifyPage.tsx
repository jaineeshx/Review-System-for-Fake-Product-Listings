
import React from "react";
import Navbar from "@/components/Navbar";
import VerifyReview from "@/components/VerifyReview";
import Footer from "@/components/Footer";

const VerifyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <VerifyReview />
      </div>
      <Footer />
    </div>
  );
};

export default VerifyPage;
