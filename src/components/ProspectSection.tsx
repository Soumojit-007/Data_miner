
import { FC } from "react";

interface Prospect {
  id: number;
  name: string;
  image: string;
  stage: string;
}

const ProspectSection: FC = () => {
  const prospects: Prospect[] = [
    { id: 1, name: "Wade Warren", image: "", stage: "Initial Inquiry" },
    { id: 2, name: "Ava Wright", image: "", stage: "Initial Inquiry" },
    { id: 3, name: "Dolly Fisher", image: "", stage: "Initial Inquiry" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center border-b pb-3">
        <h2 className="text-md font-semibold">Prospect Leads</h2>
      </div>
      
      <div className="mt-4 space-y-3">
        {prospects.map(prospect => (
          <div key={prospect.id} className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-gray-200 rounded-full overflow-hidden">
              {prospect.image ? (
                <img src={prospect.image} alt={prospect.name} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-gray-300 text-gray-600">
                  {prospect.name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <p className="text-sm font-medium">{prospect.name}</p>
              <p className="text-xs text-gray-500">Stage: {prospect.stage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProspectSection;
