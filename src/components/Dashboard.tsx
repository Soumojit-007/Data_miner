
import { FC } from "react";
import { Search, Bell, Circle, Check, AlertCircle } from "lucide-react";
import ProfileCard from "./ProfileCard";
import ProgressSection from "./ProgressSection";
import FranchiseesSection from "./FranchiseesSection";
import InsightsSection from "./InsightsSection";
import FinancialsSection from "./FinancialsSection";
import ProspectSection from "./ProspectSection";
import PendingQuestions from "./PendingQuestions";
import ChatAssistant from "./ChatAssistant";

const Dashboard: FC = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white p-2 shadow-sm flex justify-between items-center">
        <div>
          <h1 className="text-lg font-semibold">Home</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell size={20} />
          </button>
          <div className="h-8 w-8 bg-gray-200 rounded-full overflow-hidden">
            <img
              src="/lovable-uploads/94571192-3fb3-41b3-b476-28e2402af50e.png"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4 bg-white">
        <div className="grid grid-cols-1 gap-6">
          {/* Main Dashboard Content */}
          <div className="border border-[#e94fad] rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 gap-0">
              {/* Left Column */}
              <div className="border-r border-[#e94fad] p-4">
                <ProgressSection />
              </div>
              
              {/* Middle Column */}
              <div className="border-r border-[#e94fad] p-4">
                <FranchiseesSection />
                <div className="mt-6">
                  <FinancialsSection />
                </div>
              </div>
              
              {/* Right Column */}
              <div className="p-4">
                <InsightsSection />
                <div className="mt-6">
                  <ProspectSection />
                </div>
              </div>
            </div>
          </div>
          
          {/* Pending Questions and Chat */}
          <div className="grid grid-cols-2 gap-6">
            <PendingQuestions />
            <ChatAssistant />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
