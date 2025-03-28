
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SubmitReview = () => {
  const [formData, setFormData] = useState({
    merchantId: "",
    productId: "",
    productName: "",
    transactionId: "",
    customerEmail: "",
    rating: "",
    reviewText: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedReviewId, setGeneratedReviewId] = useState("");

  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    const requiredFields = [
      "merchantId",
      "productId",
      "productName",
      "transactionId",
      "customerEmail",
      "rating",
      "reviewText",
    ];

    const missingFields = requiredFields.filter((field) => !formData[field as keyof typeof formData]);

    if (missingFields.length > 0) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate blockchain submission
    setTimeout(() => {
      const generatedId = "BTF-" + Math.floor(100000 + Math.random() * 900000);
      setGeneratedReviewId(generatedId);
      setIsSubmitted(true);
      setIsSubmitting(false);

      toast({
        title: "Success",
        description: "Review submitted successfully and stored on the blockchain",
      });
    }, 2500);
  };

  const handleReset = () => {
    setFormData({
      merchantId: "",
      productId: "",
      productName: "",
      transactionId: "",
      customerEmail: "",
      rating: "",
      reviewText: "",
    });
    setIsSubmitted(false);
    setGeneratedReviewId("");
  };

  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Submit Review for Verification
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            For merchants to submit customer reviews to be verified and stored on the blockchain
          </p>
        </div>

        {!isSubmitted ? (
          <Card>
            <CardHeader>
              <CardTitle>Review Submission Form</CardTitle>
              <CardDescription>
                Enter all details for the review to be verified and stored on the blockchain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="merchantId">Merchant ID</Label>
                    <Input
                      id="merchantId"
                      name="merchantId"
                      placeholder="Your merchant identifier"
                      value={formData.merchantId}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="productId">Product ID</Label>
                    <Input
                      id="productId"
                      name="productId"
                      placeholder="Unique product identifier"
                      value={formData.productId}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="productName">Product Name</Label>
                  <Input
                    id="productName"
                    name="productName"
                    placeholder="Product name"
                    value={formData.productName}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="transactionId">Transaction ID</Label>
                    <Input
                      id="transactionId"
                      name="transactionId"
                      placeholder="Order/transaction identifier"
                      value={formData.transactionId}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customerEmail">Customer Email</Label>
                    <Input
                      id="customerEmail"
                      name="customerEmail"
                      type="email"
                      placeholder="customer@example.com"
                      value={formData.customerEmail}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rating">Rating</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("rating", value)}
                    value={formData.rating}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 - Poor</SelectItem>
                      <SelectItem value="2">2 - Below Average</SelectItem>
                      <SelectItem value="3">3 - Average</SelectItem>
                      <SelectItem value="4">4 - Good</SelectItem>
                      <SelectItem value="5">5 - Excellent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reviewText">Review Text</Label>
                  <Textarea
                    id="reviewText"
                    name="reviewText"
                    placeholder="Enter the customer's review"
                    rows={5}
                    value={formData.reviewText}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting to Blockchain
                    </>
                  ) : (
                    "Submit for Verification"
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="bg-gray-50 text-xs text-gray-500">
              <p>
                By submitting, you confirm that this review is from a verified
                customer and authorize its storage on the blockchain
              </p>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader className="bg-blockchain-lightBlue">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-6 w-6 text-blockchain-green" />
              </div>
              <CardTitle className="text-center mt-4">Review Submitted Successfully</CardTitle>
              <CardDescription className="text-center">
                The review has been verified and stored on the blockchain
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="rounded-md bg-gray-50 p-4">
                <div className="text-sm font-medium text-gray-500">Review ID</div>
                <div className="mt-1 text-lg font-bold text-blockchain-blue">
                  {generatedReviewId}
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  Share this Review ID with your customer for them to verify the authenticity of their review.
                </div>
              </div>
              
              <div className="mt-6 border rounded-md p-4">
                <h3 className="text-lg font-medium text-gray-900">Review Details</h3>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Product</dt>
                    <dd className="mt-1 text-sm text-gray-900">{formData.productName}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Rating</dt>
                    <dd className="mt-1 text-sm text-gray-900">{formData.rating} / 5</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Review Content</dt>
                    <dd className="mt-1 text-sm text-gray-900">{formData.reviewText}</dd>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleReset} className="w-full">
                Submit Another Review
              </Button>
            </CardFooter>
          </Card>
        )}

        <div className="mt-12 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">About Review Submission</h3>
          <p className="mt-2 text-sm text-gray-500">
            When you submit a review, our system verifies the transaction data and stores the review on a secure blockchain. 
            This ensures that reviews cannot be altered or deleted, providing trust and transparency for both merchants and customers. 
            Each review receives a unique Review ID that can be used to verify its authenticity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmitReview;
