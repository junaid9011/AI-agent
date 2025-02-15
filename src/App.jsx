import React from 'react';
import { Brain, Calculator, Clock, ChevronRight } from 'lucide-react';

const FloatingParticle = ({ index }) => {
  const randomDelay = (index * 2) % 5;
  return (
    <div
      className={`absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float`}
      style={{
        left: `${(index * 17) % 90}%`,
        top: `${(index * 23) % 85}%`,
        animationDelay: `${randomDelay}s`
      }}
    />
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-blue-100">
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-4 text-blue-600">
      {title}
    </h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const App = () => {
  React.useEffect(() => {
    // Ensure the script is loaded only once
    const existingScript = document.querySelector("script[src='https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js']");
    if (!existingScript) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
      script.async = true;

      script.onload = () => {
        // Add the Dialogflow Messenger element only once
        const existingMessenger = document.querySelector('df-messenger');
        if (!existingMessenger) {
          setTimeout(() => {
            const dfMessengerElement = document.createElement('df-messenger');
            dfMessengerElement.setAttribute('intent', 'WELCOME');
            dfMessengerElement.setAttribute('chat-title', 'Math Tutor Chatbot');
            dfMessengerElement.setAttribute('project-id', 'reflected-ion-450813-k9');
            dfMessengerElement.setAttribute('agent-id', '74e2c780-7c84-43d3-b60e-2c8741ae87aa');
            dfMessengerElement.setAttribute('location', 'us-central1');
            dfMessengerElement.setAttribute('language-code', 'en');
            dfMessengerElement.setAttribute('max-query-length', '-1');
            document.body.appendChild(dfMessengerElement);
          }, 1000);
        }
      };

      document.body.appendChild(script);
    }

    // Add custom styles
    const style = document.createElement('style');
    style.textContent = `
  df-messenger {
    z-index: 999;
    bottom: 16px;
    right: 16px;
    --df-messenger-button-titlebar-color: #0066ff;
    --df-messenger-button-titlebar-font-color: white;
    --df-messenger-chat-background-color: #fafafa;
    --df-messenger-send-icon: #0066ff;
    --df-messenger-user-message: #0066ff;
    width: 500px; /* Adjust the width of the chat container */
    
  }

  df-messenger #df-messenger-chat {
    border-radius: 20px; /* Rounded chat container */
    padding: 16px; /* More padding inside chat */
  }

  /* Chat floating icon background color */
  df-messenger #df-messenger-button {
    border-radius: 50%; /* Circular button */
    width: 70px; /* Bigger button */
    height: 70px; /* Bigger button */
    background-color: #ff6347; /* Change this color to whatever you like */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  df-messenger #df-messenger-button:hover {
    transform: scale(1.1); /* Hover effect to enlarge button */
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3); /* Bigger shadow on hover */
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  /* Additional tweaks for buttons and interactions */
  df-messenger .df-button-text {
    font-weight: bold;
    font-size: 14px; /* Larger text for buttons */
    color: white;
  }

  df-messenger .df-messenger-chat-wrapper {
    font-size: 16px; /* Larger font size inside chat */
  }

  /* Custom scrollbar for chat */
  df-messenger #df-messenger-chat-content {
    scrollbar-width: thin;
    scrollbar-color: #0066ff transparent;
  }

  df-messenger #df-messenger-chat-content::-webkit-scrollbar {
    width: 8px;
  }
  df-messenger #df-messenger-chat-content::-webkit-scrollbar-thumb {
    background-color: #0066ff;
    border-radius: 4px;
  }

  df-messenger #df-messenger-chat-content::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

    document.head.appendChild(style);

    // // Cleanup function
    // return () => {
    //   document.head.removeChild(link);
    //   if (script.parentNode) {
    //     document.body.removeChild(script);
    //   }
    //   const dfMessenger = document.querySelector('df-messenger');
    //   if (dfMessenger) {
    //     document.body.removeChild(dfMessenger);
    //   }
    //   if (style.parentNode) {
    //     document.head.removeChild(style);
    //   }
    // };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <FloatingParticle key={i} index={i} />
      ))}

      <header className="relative h-screen bg-gradient-to-r from-blue-500 to-blue-600 text-white py-40">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Transform Your Math Journey with AI
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl">
              Experience the future of mathematics learning with our advanced AI tutor.
              Get instant help, detailed explanations, and step-by-step guidance.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 group">
              Start Learning Now
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-600">
            The Future of Math Education
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI-Powered Learning"
              description="Advanced artificial intelligence adapts to your learning style and pace for personalized education."
            />
            <FeatureCard
              icon={Calculator}
              title="Smart Problem Solving"
              description="Get detailed step-by-step solutions with explanations that help you understand the concepts."
            />
            <FeatureCard
              icon={Clock}
              title="24/7 Availability"
              description="Access expert math help whenever you need it, day or night, anywhere in the world."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
