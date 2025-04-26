
import { FC } from "react";
import { AlertCircle } from "lucide-react";

const InsightsSection: FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center border-b pb-3">
        <h2 className="text-md font-semibold">Key Insights & Feedback</h2>
      </div>
      
      <div className="py-4">
        <div className="flex items-center">
          <div className="flex-1">
            <span className="text-3xl font-bold">10%</span>
            <p className="text-xs text-gray-500">Sales Growth</p>
          </div>
          <div className="bg-yellow-100 p-3 rounded-lg">
            <AlertCircle size={24} className="text-yellow-500" />
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-sm font-medium mb-3">Feedback</h3>
        <p className="text-xs text-gray-600">
          Franchisees are reporting some database tracking updates.
        </p>
      </div>
    </div>
  );
};

export default InsightsSection;
