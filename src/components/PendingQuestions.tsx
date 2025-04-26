
import { FC } from "react";

interface Question {
  id: number;
  user: {
    name: string;
    image: string;
  };
  question: string;
  time: string;
}

const PendingQuestions: FC = () => {
  const questions: Question[] = [
    {
      id: 1,
      user: { name: "Brandon Baker", image: "" },
      question: "What are the requirements for opening a new franchise?",
      time: "5 days ago"
    },
    {
      id: 2,
      user: { name: "Kristin Otranto", image: "" },
      question: "How do I manage inventory effectively?",
      time: "8 days ago"
    }
  ];

  return (
    <div className="bg-white rounded-lg border p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Pending Questions</h2>
        <div className="bg-blue-500 text-white text-xs py-1 px-2 rounded">2</div>
      </div>
      
      <div className="space-y-4">
        {questions.map(item => (
          <div key={item.id} className="flex space-x-3">
            <div className="h-8 w-8 bg-gray-200 rounded-full overflow-hidden">
              {item.user.image ? (
                <img src={item.user.image} alt={item.user.name} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-gray-300 text-gray-600">
                  {item.user.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <span className="font-medium text-sm">{item.user.name}</span>
                <span className="text-xs text-gray-500">{item.time}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{item.question}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingQuestions;
