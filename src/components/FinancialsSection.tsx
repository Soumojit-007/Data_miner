
import { FC } from "react";

const FinancialsSection: FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center border-b pb-3">
        <h2 className="text-md font-semibold">Financial Milestones</h2>
        <span className="text-xs text-green-500">+3.1%</span>
      </div>
      
      <div className="py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">20</h1>
          <div>
            <p className="text-xs text-gray-500">Total Franchisees</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">Current</p>
          <p className="text-lg font-semibold">$500,000</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Target</p>
          <p className="text-lg font-semibold">$450,000</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialsSection;
