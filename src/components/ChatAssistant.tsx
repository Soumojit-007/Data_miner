import { FC, useState } from "react";
import { Send } from "lucide-react";

const ChatAssistant: FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);

  // Function to handle sending the user's message
  const handleSend = () => {
    if (!message.trim()) return;

    // Add user's message
    setMessages((prev) => [...prev, { sender: "user", text: message }]);
    setMessage(""); // Clear input

    // Simulate bot reply after short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Hi there! 👋 I'm your assistant for the Franchise Dashboard. What queries or help do you need today?" }
      ]);
    }, 800); // 0.8 second delay
  };

  // Handle Enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="bg-white rounded-lg border p-4">
      <div className="flex items-center space-x-2 mb-4">
        <div className="bg-[#e94fad] p-2 rounded">
          <div className="w-5 h-5 bg-white rounded"></div>
        </div>
        <h2 className="font-semibold">Welcome to the AI Chat Assistant</h2>
      </div>

      {/* Chat Messages */}
      <div className="flex flex-col space-y-2 mb-4 max-h-60 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`px-3 py-2 rounded-lg max-w-[80%] ${
              msg.sender === "user" ? "self-end bg-blue-100" : "self-start bg-gray-100"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex border rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Ask your question here..."
          className="flex-1 py-2 px-3 outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-gray-100 px-3 flex items-center disabled:opacity-50"
          onClick={handleSend}
          disabled={!message.trim()}
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatAssistant;
