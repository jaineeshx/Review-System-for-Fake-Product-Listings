
import React from "react";
import Navbar from "@/components/Navbar";
import SubmitReview from "@/components/SubmitReview";
import Footer from "@/components/Footer";

const SubmitPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <SubmitReview />
      </div>
      <Footer />
    </div>
  );
};

export default SubmitPage;
