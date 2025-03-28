
import React from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blockchain-lightBlue py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-sm font-semibold uppercase tracking-wide text-blockchain-blue">
                Revolutionizing E-commerce Trust
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Detect Fake Reviews with</span>
                <span className="block text-blockchain-blue">Blockchain Technology</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              BlockTruthFinder uses advanced blockchain algorithms to verify the authenticity of e-commerce reviews,
              helping consumers make informed purchasing decisions and protecting businesses from fraudulent activities.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/verify">
                    <Button size="lg" className="w-full">
                      Verify a Review
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/submit">
                    <Button variant="outline" size="lg" className="w-full">
                      Submit a Review
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <div className="aspect-w-10 aspect-h-7 bg-blockchain-blue rounded-lg p-8 flex items-center justify-center">
                  <Shield className="h-24 w-24 text-white" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="hexagon bg-white/10 w-40 h-40 absolute animate-pulse-slow"></div>
                    <div className="hexagon bg-white/20 w-32 h-32 absolute animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                    <div className="hexagon bg-white/30 w-24 h-24 absolute animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                  </div>
                </div>
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <h2 className="text-xl font-bold text-white">BlockTruthFinder</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
