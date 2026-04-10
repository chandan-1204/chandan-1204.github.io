import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const responses: Record<string, string> = {
  projects: "I've built AI Resume Ranker, Fraud Credit Card Detection, and Stock Price Prediction. Scroll to the Projects section to learn more!",
  skills: "My core skills include Python, Machine Learning, Deep Learning, TensorFlow, JavaScript, React, NLP, and Computer Vision.",
  contact: "You can reach me at chandan.rakesh1204@gmail.com, or connect on GitHub (@chandan-1204) and LinkedIn. Check the Contact section!",
  about: "I'm Chandan, an AI/ML enthusiast passionate about building intelligent systems that solve real-world problems.",
  hello: "Hey there! 👋 I'm Chandan's AI assistant. Ask me about projects, skills, or contact info!",
  hi: "Hey there! 👋 I'm Chandan's AI assistant. Ask me about projects, skills, or contact info!",
};

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();
  for (const key of Object.keys(responses)) {
    if (lower.includes(key)) return responses[key];
  }
  return "I can help with info about projects, skills, or contact details. Try asking about one of those!";
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi! I'm Chandan's AI assistant. Ask me anything about projects, skills, or how to get in touch! 🤖", isUser: false },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((m) => [...m, { text: userMsg, isUser: true }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { text: getResponse(userMsg), isUser: false }]);
    }, 500);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_hsla(199,89%,48%,0.4)] transition-all duration-300 animate-glow-pulse"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 glass neon-border rounded-2xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-border flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-foreground">AI Assistant</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.isUser ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${m.isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask me anything..."
              className="flex-1 bg-secondary text-foreground text-sm rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
            />
            <button onClick={send} className="text-primary hover:text-foreground transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
