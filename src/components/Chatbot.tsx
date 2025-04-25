import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean; recommendations?: string[] }[]>([
    { text: "Hi! I'm your healthcare assistant. How can I help you today?", isBot: true, recommendations: ['Organ Donation', 'Emergency Services', 'Book Appointment'] }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    
    // Simulate bot response
    setTimeout(() => {
      const response = getBotResponse(input);
      setMessages(prev => [...prev, response]);
    }, 1000);

    setInput('');
  };

  const handleRecommendationClick = (recommendation: string) => {
    setMessages(prev => [...prev, { text: recommendation, isBot: false }]);
    setTimeout(() => {
      const response = getBotResponse(recommendation);
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  const getBotResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();

    // Responses based on services
    if (lowerMessage.includes('organ donation')) {
      return {
        text: "Organ donation is a noble act that can save lives. You can register as a donor through our 'Organ Donators' service. Would you like to know more?",
        isBot: true,
        recommendations: ['How to register?', 'Benefits of organ donation', 'Eligibility criteria']
      };
    } else if (lowerMessage.includes('emergency')) {
      return {
        text: "For medical emergencies, please call our 24/7 emergency hotline at 911. Our emergency services team is always ready to help.",
        isBot: true,
        recommendations: ['Emergency contacts', 'First aid tips', 'Nearby hospitals']
      };
    } else if (lowerMessage.includes('doctor') || lowerMessage.includes('appointment')) {
      return {
        text: "You can book appointments with our specialist doctors through the 'Patient and Doctor Connection' service. Would you like me to guide you through the process?",
        isBot: true,
        recommendations: ['Book an appointment', 'List of doctors', 'Specializations']
      };
    } else if (lowerMessage.includes('blood bank')) {
      return {
        text: "Our Blood Bank service allows you to donate or request blood. We ensure safe storage and availability of blood for emergencies.",
        isBot: true,
        recommendations: ['Donate blood', 'Request blood', 'Blood donation guidelines']
      };
    } else if (lowerMessage.includes('lab services')) {
      return {
        text: "Our Lab Services provide advanced medical testing facilities, including blood tests, X-rays, and more. Would you like to book a test?",
        isBot: true,
        recommendations: ['Book a test', 'Available tests', 'Test preparation tips']
      };
    } else if (lowerMessage.includes('tissue bank')) {
      return {
        text: "Our Tissue Bank specializes in preserving tissues for medical use. This service supports organ transplantation and research.",
        isBot: true,
        recommendations: ['Learn about tissue banking', 'How to donate tissues', 'Research programs']
      };
    } else if (lowerMessage.includes('awareness programs')) {
      return {
        text: "Our Awareness Programs include healthcare events and camps to educate people about organ donation and healthy living.",
        isBot: true,
        recommendations: ['Upcoming events', 'Health tips', 'Join a program']
      };
    } else if (lowerMessage.includes('research programs')) {
      return {
        text: "Our Research Programs focus on the latest developments in organ transplantation and medical advancements. Would you like to learn more?",
        isBot: true,
        recommendations: ['Ongoing research', 'How to participate', 'Research findings']
      };
    }

    // Responses based on healthcare recommendations
    if (lowerMessage.includes('headache')) {
      return {
        text: "For headaches, ensure you stay hydrated and rest in a quiet, dark room. Over-the-counter pain relievers like ibuprofen or paracetamol may help. If the headache persists, consult a doctor.",
        isBot: true,
        recommendations: ['Common causes of headaches', 'When to see a doctor', 'Home remedies']
      };
    } else if (lowerMessage.includes('fever')) {
      return {
        text: "For fever, stay hydrated and rest. You can take paracetamol to reduce the fever. If it lasts more than 2 days or is very high, consult a doctor.",
        isBot: true,
        recommendations: ['Fever symptoms', 'When to seek help', 'Medications for fever']
      };
    } else if (lowerMessage.includes('cold') || lowerMessage.includes('cough')) {
      return {
        text: "For cold and cough, drink warm fluids, rest, and consider over-the-counter remedies like cough syrups. If symptoms persist, consult a doctor.",
        isBot: true,
        recommendations: ['Home remedies', 'Preventing colds', 'When to see a doctor']
      };
    } else if (lowerMessage.includes('stomach pain')) {
      return {
        text: "For stomach pain, avoid heavy meals and drink plenty of water. Over-the-counter antacids like omeprazole or ranitidine may help. If the pain is severe or persistent, consult a doctor immediately.",
        isBot: true,
        recommendations: ['Common causes', 'Dietary tips', 'When to seek medical help']
      };
    }

    // Default response
    return {
      text: "I'm here to help with any questions about our services, organ donation, or healthcare. What would you like to know more about?",
      isBot: true,
      recommendations: ['Organ Donation', 'Emergency Services', 'Healthcare Tips']
    };
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Healthcare Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index}>
                <div
                  className={`${
                    message.isBot
                      ? 'bg-gray-100 rounded-br-lg rounded-tr-lg rounded-tl-lg ml-4'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-bl-lg rounded-tr-lg rounded-tl-lg mr-4'
                  } p-3 max-w-[80%] ${message.isBot ? '' : 'ml-auto'}`}
                >
                  {message.text}
                </div>
                {message.isBot && message.recommendations && (
                  <div className="flex flex-wrap mt-2 space-x-2">
                    {message.recommendations.map((rec, recIndex) => (
                      <button
                        key={recIndex}
                        onClick={() => handleRecommendationClick(rec)}
                        className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition"
                      >
                        {rec}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}