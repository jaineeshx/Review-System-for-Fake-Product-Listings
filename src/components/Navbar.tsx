
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Search, FileText, Home } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Shield className="h-8 w-8 text-blockchain-blue" />
              <span className="ml-2 text-xl font-bold text-blockchain-darkBlue">
                BlockTruthFinder
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="border-blockchain-blue text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                <Home className="mr-1 h-4 w-4" />
                Home
              </Link>
              <Link
                to="/verify"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                <Search className="mr-1 h-4 w-4" />
                Verify Review
              </Link>
              <Link
                to="/submit"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                <FileText className="mr-1 h-4 w-4" />
                Submit Review
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="outline" className="mr-2">
              Sign In
            </Button>
            <Button>Register</Button>
          </div>
          <div className="flex items-center sm:hidden">
            <Button variant="ghost" size="sm">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
