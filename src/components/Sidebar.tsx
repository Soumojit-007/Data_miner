
import { FC } from "react";
import { 
  Home, 
  Upload, 
  Users, 
  FileText, 
  Target, 
  MessageSquare, 
  Settings,
  LogOut
} from "lucide-react";

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Sidebar: FC<SidebarProps> = ({ activePage, setActivePage }) => {
  const menuItems = [
    { name: "Home", icon: <Home size={18} /> },
    { name: "Stages & Checklist", icon: <FileText size={18} /> },
    { name: "Upload Docs", icon: <Upload size={18} /> },
    { name: "Preferred Vendors", icon: <Users size={18} /> },
    { name: "Tech Stack", icon: <FileText size={18} /> },
    { name: "Targets", icon: <Target size={18} /> },
    { name: "Zee Sales Targets", icon: <Target size={18} /> },
    { name: "MAI Settings", icon: <Settings size={18} /> },
    { name: "Pending Questions", icon: <MessageSquare size={18} /> }
  ];

  return (
    <div className="w-52 bg-[#00634f] text-white flex flex-col h-full">
      <div className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                className={`flex items-center px-4 py-3 w-full text-left ${
                  activePage === item.name ? "bg-[#004a3c] font-semibold" : ""
                } hover:bg-[#004a3c] transition-colors`}
                onClick={() => setActivePage(item.name)}
              >
                <span className="mr-3">{item.icon}</span>
                <span className="text-sm">{item.name}</span>
                {item.name === "Pending Questions" && (
                  <span className="ml-auto bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    2
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border-t border-[#004a3c]">
        <button className="flex items-center text-sm">
          <LogOut size={18} className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
