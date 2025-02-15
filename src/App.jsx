import React from 'react';
import { Brain, Calculator, Clock, ChevronRight, Bot, BookOpen, Code, Github, Linkedin, Mail } from 'lucide-react';
const ProfileCard = ({ name, role, description, image, github, linkedin, email }) => (
  <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-violet-100">
    <div className="flex flex-col items-center text-center">
      {/* <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-violet-200 shadow-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div> */}
      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
        {name}
      </h3>
      <p className="text-violet-600 font-medium mb-3">{role}</p>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex gap-4 text-gray-600">
        {github && (
          <a href={github} className="hover:text-violet-600 transition-colors">
            <Github size={20} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} className="hover:text-violet-600 transition-colors">
            <Linkedin size={20} />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="hover:text-violet-600 transition-colors">
            <Mail size={20} />
          </a>
        )}
      </div>
    </div>
  </div>
);
const FloatingParticle = ({ index }) => {
  const randomDelay = (index * 2) % 5;
  return (
    <div
      className={`absolute w-2 h-2 bg-violet-400/30 rounded-full blur-sm animate-float`}
      style={{
        left: `${(index * 17) % 90}%`,
        top: `${(index * 23) % 85}%`,
        animationDelay: `${randomDelay}s`
      }}
    />
  );
};

const GlowingButton = ({ children, className = "" }) => (
  <button className={`group relative inline-flex items-center justify-center px-8 py-4 font-bold text-lg tracking-wide text-white bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
    <div className="relative flex items-center gap-2">
      {children}
    </div>
  </button>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group relative bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-violet-100">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    <div className="relative">
      <div className="bg-gradient-to-br from-violet-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    </div>
  </div>
);

const App = () => {
  React.useEffect(() => {
        // Check if the script is already loaded
        const existingScript = document.querySelector("script[src='https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js']");
        const existingMessenger = document.querySelector('df-messenger');
        
        if (!existingScript && !existingMessenger) {
          // Add the stylesheet
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
          document.head.appendChild(link);
    
          // Add the script
          const script = document.createElement('script');
          script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
          script.async = true;
    
          script.onload = () => {
            // Create df-messenger only once the script has loaded
            if (!document.querySelector('df-messenger')) {
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
    
    const style = document.createElement('style');
    style.textContent = `
      df-messenger {
        z-index: 999;
        bottom: 24px;
        right: 24px;
        --df-messenger-button-titlebar-color: #7c3aed;
        --df-messenger-button-titlebar-font-color: white;
        --df-messenger-chat-background-color: #ffffff;
        --df-messenger-send-icon: #7c3aed;
        --df-messenger-user-message: #7c3aed;
        width: 400px;
      }

      df-messenger #df-messenger-chat {
        border-radius: 24px;
        padding: 16px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
      }

      df-messenger #df-messenger-button {
        border-radius: 50%;
        width: 72px;
        height: 72px;
        background: linear-gradient(135deg, #7c3aed, #06b6d4);
        box-shadow: 0 20px 25px -5px rgba(124, 58, 237, 0.25);
        transition: all 0.3s ease;
      }

      df-messenger #df-messenger-button:hover {
        transform: scale(1.1) translateY(-4px);
        box-shadow: 0 25px 30px -5px rgba(124, 58, 237, 0.35);
      }

      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 relative overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <FloatingParticle key={i} index={i} />
      ))}

      <header className="relative min-h-screen flex items-center bg-gradient-to-r from-violet-900 to-cyan-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-8">
              <Bot className="text-violet-200" size={16} />
              <span className="text-violet-100 font-medium">Math Tutor AI Agent</span>
            </div>
            <h1 className="text-7xl font-bold mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-200">
                AI-Powered Mathematics Learning Assistant
              </span>
            </h1>
            <div className="mb-8">
              <p className="text-2xl mb-6 text-violet-100 max-w-2xl leading-relaxed">
                An intelligent tutoring system that leverages artificial intelligence to provide personalized mathematics education.
              </p>
              {/* <div className="flex items-center gap-8 text-violet-200">
                <div className="flex items-center gap-2">
                  <BookOpen size={20} />
                  <span>Undergraduate Thesis Project</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code size={20} />
                  <span>Computer Science & Engineering</span>
                </div>
              </div> */}
            </div>
            {/* <div className="flex gap-6 mb-12">
              <GlowingButton>
                Try the AI Tutor
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </GlowingButton>
              <button className="px-8 py-4 rounded-xl font-bold text-lg text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300">
                View Documentation
              </button>
            </div> */}

          </div>
        </div>
      </header>
      

      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Project Features
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Leveraging cutting-edge AI technology to revolutionize mathematics education
            </p>
          </div>
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
      <section className="py-24 relative bg-gradient-to-br from-violet-100/50 to-cyan-100/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Project Team
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Meet the developers behind this innovative AI-powered mathematics learning platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ProfileCard
              name="Mohiuddin Khan Mahin"
              // role="Frontend Developer"
              image="/api/placeholder/200/200"
              github="https://github.com/mohiddun-khan-mahin"
              linkedin="https://linkedin.com/in/mohiddun-khan-mahin"
              email="mahin@gmail.com"
            />
            <ProfileCard
              name="Junaid Ahmed"
              // role="dev"
              // image="https://i.ibb.co.com/d4zyf256/1672326185281.jpg"
              github="https://github.com/junaid9011"
              linkedin="https://linkedin.com/in/junaid9011"
              email="junaid@dreammatehq.com"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;