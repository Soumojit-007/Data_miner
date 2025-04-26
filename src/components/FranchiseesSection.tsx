
import { FC } from "react";
import { ArrowRight, Users } from "lucide-react";

const FranchiseesSection: FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center border-b pb-3">
        <h2 className="text-md font-semibold">Total Franchisees Onboard</h2>
        <span className="text-xs text-green-500">+5.31%</span>
      </div>
      
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2">
            <div className="h-6 w-6 bg-gray-400 rounded-full border-2 border-white"></div>
            <div className="h-6 w-6 bg-gray-300 rounded-full border-2 border-white"></div>
            <div className="h-6 w-6 bg-gray-500 rounded-full border-2 border-white"></div>
            <div className="h-6 w-6 bg-gray-200 rounded-full border-2 border-white"></div>
          </div>
          <ArrowRight size={16} />
        </div>
        <h1 className="text-3xl font-bold">14</h1>
      </div>
      
      <div className="space-y-2 mt-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
            <span className="text-xs">Stage 1 (Initial Inquiry)</span>
          </div>
          <span className="text-xs font-semibold">02</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
            <span className="text-xs">Stage 2 (Document Submission)</span>
          </div>
          <span className="text-xs font-semibold">07</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-800 rounded-full mr-2"></div>
            <span className="text-xs">Stage 3 (Training)</span>
          </div>
          <span className="text-xs font-semibold">05</span>
        </div>
      </div>
    </div>
  );
};

export default FranchiseesSection;
