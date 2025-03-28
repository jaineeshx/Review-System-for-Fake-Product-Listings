
import React from "react";
import { LockIcon, FileText, CheckCircle } from "lucide-react";

const BlockchainVisual = () => {
  return (
    <div className="py-12 bg-blockchain-lightBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Blockchain Technology in Action</h2>
          <p className="mt-4 text-lg text-gray-500">
            See how our blockchain securely stores and verifies review data
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 overflow-x-auto pb-8">
          {/* Block 1 */}
          <div className="blockchain-node min-w-[250px]">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs font-semibold text-blockchain-darkBlue">BLOCK #1</div>
              <LockIcon size={16} className="text-blockchain-darkBlue" />
            </div>
            <div className="text-sm mb-2">
              <div className="font-bold">Hash:</div>
              <div className="font-mono text-xs truncate">0x8f4a3b2c1d...</div>
            </div>
            <div className="text-sm mb-2">
              <div className="font-bold">Previous Hash:</div>
              <div className="font-mono text-xs truncate">0x0000000000...</div>
            </div>
            <div className="p-2 bg-white rounded border border-gray-200">
              <div className="flex items-center">
                <FileText size={14} className="mr-1 text-gray-500" />
                <span className="text-xs">3 Verified Reviews</span>
              </div>
            </div>
            <div className="blockchain-connector hidden md:block"></div>
          </div>

          {/* Block 2 */}
          <div className="blockchain-node min-w-[250px]">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs font-semibold text-blockchain-darkBlue">BLOCK #2</div>
              <LockIcon size={16} className="text-blockchain-darkBlue" />
            </div>
            <div className="text-sm mb-2">
              <div className="font-bold">Hash:</div>
              <div className="font-mono text-xs truncate">0x2e5f8a9b3c...</div>
            </div>
            <div className="text-sm mb-2">
              <div className="font-bold">Previous Hash:</div>
              <div className="font-mono text-xs truncate">0x8f4a3b2c1d...</div>
            </div>
            <div className="p-2 bg-white rounded border border-gray-200">
              <div className="flex items-center">
                <FileText size={14} className="mr-1 text-gray-500" />
                <span className="text-xs">5 Verified Reviews</span>
              </div>
            </div>
            <div className="blockchain-connector hidden md:block"></div>
          </div>

          {/* Block 3 */}
          <div className="blockchain-node min-w-[250px]">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs font-semibold text-blockchain-darkBlue">BLOCK #3</div>
              <LockIcon size={16} className="text-blockchain-darkBlue" />
            </div>
            <div className="text-sm mb-2">
              <div className="font-bold">Hash:</div>
              <div className="font-mono text-xs truncate">0x7d1c9e4f3a...</div>
            </div>
            <div className="text-sm mb-2">
              <div className="font-bold">Previous Hash:</div>
              <div className="font-mono text-xs truncate">0x2e5f8a9b3c...</div>
            </div>
            <div className="p-2 bg-white rounded border border-gray-200">
              <div className="flex items-center">
                <FileText size={14} className="mr-1 text-gray-500" />
                <span className="text-xs">2 Verified Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
            <CheckCircle size={16} className="mr-2 text-blockchain-green" />
            <span className="text-sm font-medium">All blocks verified and secured</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainVisual;
