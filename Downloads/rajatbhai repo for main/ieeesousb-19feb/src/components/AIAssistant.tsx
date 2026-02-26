import { useState } from "react";
import { X, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface QuickOption {
  id: string;
  label: string;
  response: string;
}

const QUICK_OPTIONS: QuickOption[] = [
  {
    id: "join",
    label: "How to join IEEE?",
    response: "To join IEEE, you can become a member through the official IEEE website or visit our Join page for more information about student membership benefits and the registration process. As a student member, you'll get access to exclusive resources, networking opportunities, and technical publications."
  },
  {
    id: "events",
    label: "Upcoming events",
    response: "Check out our Events page to see all upcoming workshops, seminars, and technical sessions. We regularly organize events on emerging technologies, skill development, and professional networking. Stay connected through our social media channels for the latest updates!"
  },
  {
    id: "contact",
    label: "Contact team",
    response: "You can reach our team at:\n📧 ieee.fbc@socet.edu.in\n📧 ieee.sc@socet.edu.in\n📧 ieee.tr@socet.edu.in\n📞 +91 79660 46304\n📍 Apple Lab, B-120, Silver Oak University\n\nOr visit our Contact page to send us a message directly!"
  },
  {
    id: "benefits",
    label: "IEEE benefits",
    response: "IEEE membership offers:\n• Access to cutting-edge technical papers and publications\n• Networking opportunities with professionals worldwide\n• Career development resources and job boards\n• Discounts on conferences and events\n• Leadership and skill development programs\n• Student branch activities and competitions\n• Resume building and professional recognition"
  },
  {
    id: "about",
    label: "About IEEE SOU SB",
    response: "IEEE Silver Oak University Student Branch is dedicated to providing students with opportunities for professional development, technical growth, and networking. We conduct various events, workshops, and competitions throughout the year. Visit our About page to learn more about our mission, vision, and activities!"
  },
  {
    id: "chapters",
    label: "Student chapters",
    response: "We have several active chapters:\n• WIE (Women in Engineering)\n• SPS (Signal Processing Society)\n• CS (Computer Society)\n• SIGHT (Special Interest Group on Humanitarian Technology)\n\nEach chapter focuses on specific technical domains and organizes specialized events and workshops."
  }
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello! I'm your IEEE SOU SB assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [customInput, setCustomInput] = useState("");

  const handleQuickOption = (option: QuickOption) => {
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: option.label,
      sender: "user",
      timestamp: new Date()
    };

    // Add bot response
    const botMessage: Message = {
      id: `bot-${Date.now()}`,
      text: option.response,
      sender: "bot",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  const handleCustomMessage = () => {
    if (!customInput.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: customInput,
      sender: "user",
      timestamp: new Date()
    };

    // Generate response based on keywords
    let botResponse = "I'm a simple assistant with predefined responses. Please use the quick options above, or visit our Contact page for specific inquiries. Our team will be happy to help you!";

    const lowerInput = customInput.toLowerCase();

    if (lowerInput.includes("join") || lowerInput.includes("membership") || lowerInput.includes("register")) {
      botResponse = QUICK_OPTIONS.find(opt => opt.id === "join")?.response || botResponse;
    } else if (lowerInput.includes("event") || lowerInput.includes("workshop") || lowerInput.includes("seminar")) {
      botResponse = QUICK_OPTIONS.find(opt => opt.id === "events")?.response || botResponse;
    } else if (lowerInput.includes("contact") || lowerInput.includes("reach") || lowerInput.includes("email") || lowerInput.includes("phone")) {
      botResponse = QUICK_OPTIONS.find(opt => opt.id === "contact")?.response || botResponse;
    } else if (lowerInput.includes("benefit") || lowerInput.includes("advantage") || lowerInput.includes("why")) {
      botResponse = QUICK_OPTIONS.find(opt => opt.id === "benefits")?.response || botResponse;
    } else if (lowerInput.includes("about") || lowerInput.includes("what is") || lowerInput.includes("who are")) {
      botResponse = QUICK_OPTIONS.find(opt => opt.id === "about")?.response || botResponse;
    } else if (lowerInput.includes("chapter") || lowerInput.includes("wie") || lowerInput.includes("sps") || lowerInput.includes("sight")) {
      botResponse = QUICK_OPTIONS.find(opt => opt.id === "chapters")?.response || botResponse;
    }

    const botMessage: Message = {
      id: `bot-${Date.now()}`,
      text: botResponse,
      sender: "bot",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setCustomInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleCustomMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-[#00629B] hover:bg-[#004f7d] z-50 transition-all duration-200 hover:scale-110"
          size="icon"
          aria-label="Open assistant"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[32rem] bg-white dark:bg-gray-800 rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="bg-[#00629B] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-semibold">IEEE SOU SB Assistant</h3>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 h-8 w-8"
              aria-label="Close assistant"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick Options */}
          <div className="p-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Quick Options:</p>
            <div className="flex flex-wrap gap-2">
              {QUICK_OPTIONS.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleQuickOption(option)}
                  className="text-xs px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-[#00629B] hover:text-white hover:border-[#00629B] transition-colors duration-200"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg p-3 text-sm",
                    message.sender === "user"
                      ? "bg-[#00629B] text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  )}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#00629B]"
              />
              <Button
                onClick={handleCustomMessage}
                size="icon"
                className="bg-[#00629B] hover:bg-[#004f7d]"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              This is a simple rule-based assistant. For specific inquiries, please contact our team.
            </p>
          </div>
        </div>
      )}
    </>
  );
}