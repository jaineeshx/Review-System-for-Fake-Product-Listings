
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const VerifyReview = () => {
  const [reviewId, setReviewId] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<null | {
    isVerified: boolean;
    reviewData?: {
      productId: string;
      productName: string;
      rating: number;
      reviewText: string;
      reviewerName: string;
      date: string;
      transactionId: string;
    };
  }>(null);
  
  const { toast } = useToast();

  const handleVerify = () => {
    if (!reviewId.trim()) {
      toast({
        title: "Error",
        description: "Please enter a review ID",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    
    // Simulate blockchain verification (would connect to actual blockchain in production)
    setTimeout(() => {
      const isVerified = reviewId.length > 5; // Simple demo logic - longer IDs are "verified"
      
      if (isVerified) {
        setVerificationResult({
          isVerified: true,
          reviewData: {
            productId: "P-" + Math.floor(Math.random() * 10000),
            productName: "Premium Wireless Headphones",
            rating: 4,
            reviewText: "These headphones are amazing! Great sound quality and comfortable to wear for long periods. Battery life is excellent too.",
            reviewerName: "Alex Johnson",
            date: "2023-06-15",
            transactionId: "TX-" + Math.floor(Math.random() * 100000),
          }
        });
        
        toast({
          title: "Verification Complete",
          description: "This review has been verified as authentic",
          variant: "default",
        });
      } else {
        setVerificationResult({
          isVerified: false
        });
        
        toast({
          title: "Verification Failed",
          description: "This review could not be verified or may be fraudulent",
          variant: "destructive",
        });
      }
      
      setIsVerifying(false);
    }, 2000);
  };

  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Verify Review Authenticity
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Enter a review ID to check if it's been verified on our blockchain
          </p>
        </div>

        <div className="mt-5 flex rounded-md shadow-sm">
          <Input
            type="text"
            placeholder="Enter review ID (e.g., BTF-123456)"
            value={reviewId}
            onChange={(e) => setReviewId(e.target.value)}
            className="flex-1"
          />
          <Button
            onClick={handleVerify}
            disabled={isVerifying}
            className="ml-3"
          >
            {isVerifying ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Verify
              </>
            )}
          </Button>
        </div>

        {verificationResult && (
          <div className="mt-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Verification Result</CardTitle>
                  {verificationResult.isVerified ? (
                    <div className="verified-badge flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      VERIFIED
                    </div>
                  ) : (
                    <div className="unverified-badge flex items-center">
                      <XCircle className="h-4 w-4 mr-1" />
                      UNVERIFIED
                    </div>
                  )}
                </div>
                <CardDescription>
                  Review ID: {reviewId}
                </CardDescription>
              </CardHeader>

              {verificationResult.isVerified && verificationResult.reviewData && (
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Product</h4>
                      <p className="mt-1">{verificationResult.reviewData.productName}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Rating</h4>
                      <div className="flex mt-1">
                        {Array(5).fill(0).map((_, i) => (
                          <svg 
                            key={i} 
                            className={`h-5 w-5 ${i < verificationResult.reviewData!.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Review</h4>
                      <p className="mt-1">{verificationResult.reviewData.reviewText}</p>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-200">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Reviewer</h4>
                          <p className="mt-1 text-sm">{verificationResult.reviewData.reviewerName}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Date</h4>
                          <p className="mt-1 text-sm">{verificationResult.reviewData.date}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-200">
                      <h4 className="text-sm font-medium text-gray-500">Blockchain Data</h4>
                      <div className="mt-1 bg-gray-50 p-2 rounded text-xs font-mono">
                        <p>Transaction ID: {verificationResult.reviewData.transactionId}</p>
                        <p>Timestamp: {new Date().toISOString()}</p>
                        <p>Verification Status: Confirmed (6+ blocks)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}

              {!verificationResult.isVerified && (
                <CardContent>
                  <div className="py-4 text-center">
                    <XCircle className="h-12 w-12 text-blockchain-red mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900">Review Not Verified</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      This review ID could not be found on our blockchain or may be fraudulent. 
                      Please check the ID and try again, or contact support if you believe this is an error.
                    </p>
                  </div>
                </CardContent>
              )}

              <CardFooter className="bg-gray-50">
                <p className="text-xs text-gray-500">
                  Verification powered by BlockTruthFinder blockchain technology
                </p>
              </CardFooter>
            </Card>
          </div>
        )}

        <div className="mt-12 bg-blockchain-lightBlue rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900">About Verification</h3>
          <p className="mt-2 text-sm text-gray-500">
            Our blockchain verification technology ensures the authenticity of reviews by 
            confirming they were written by real customers who purchased the product. 
            Each verified review is stored in an immutable blockchain, making it impossible to forge or modify.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyReview;
