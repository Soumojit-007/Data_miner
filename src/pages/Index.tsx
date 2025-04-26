
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

const Index = () => {
  const [activePage, setActivePage] = useState("Home");
  
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col overflow-hidden border-8 border-[#00634f] rounded-lg m-2">
        <Dashboard />
      </div>
    </div>
  );
};

export default Index;
