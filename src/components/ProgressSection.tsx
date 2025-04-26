
import { FC } from "react";
import { Check, Circle } from "lucide-react";

const ProgressSection: FC = () => {
  const progress = 85;
  
  return (
    <div>
      <h2 className="text-md font-semibold border-b pb-3">Account Progress</h2>
      
      <div className="flex flex-col items-center justify-center py-6">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="10"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * progress) / 100}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold">{progress}%</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-sm font-semibold mb-3">Steps Completed</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <Check size={15} className="text-white" />
            </div>
            <span className="text-sm">Profile Setup</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <Check size={15} className="text-white" />
            </div>
            <span className="text-sm">Initial Training</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <Check size={15} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-[#e94fad]">Legal Documents</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center mr-3">
              <Circle size={8} className="text-gray-300" />
            </div>
            <span className="text-sm text-gray-500">Financial Integration</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center mr-3">
              <Circle size={8} className="text-gray-300" />
            </div>
            <span className="text-sm text-gray-500">Final Review</span>
          </div>
        </div>
      </div>

      <div className="pt-6 pb-2">
        <div className="bg-[#e94fad] py-2 px-4 rounded text-white text-center">
          <span className="font-bold">Rachit</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;
