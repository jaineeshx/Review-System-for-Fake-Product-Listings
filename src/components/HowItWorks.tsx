
import React from "react";
import { Shield, Database, CheckCircle, AlertTriangle } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blockchain-blue font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Blockchain-Powered Review Verification
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our system uses blockchain technology to ensure reviews are authentic and trustworthy.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blockchain-blue text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Review Submission</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                E-commerce merchants submit customer reviews through our secure platform, 
                including relevant metadata like transaction IDs and timestamps.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blockchain-blue text-white">
                  <Database className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Blockchain Verification</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our algorithms analyze the review data, checking for patterns of fraud and authenticating the 
                reviewer's identity before storing it securely on the blockchain.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blockchain-blue text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Verified Reviews</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Legitimate reviews receive our blockchain verification badge, providing consumers 
                with confidence in the authenticity of the feedback.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blockchain-blue text-white">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Fraud Detection</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our system flags suspicious reviews, preventing fake feedback from influencing 
                consumer decisions and protecting business reputations.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
