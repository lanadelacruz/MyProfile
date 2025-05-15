import './index.css'; // Assuming global styles including Tailwind are here
import { Telegram, Facebook, Github, Instagram } from 'lucide-react';

// Custom TikTok Icon (simplified example, you might want a proper SVG or a different icon library for a more accurate TikTok logo)
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16.5 6.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0z"/>
    <path d="M12 15.5V6.5"/>
    <path d="M12 15.5a4.5 4.5 0 1 0 4.5 4.5V11"/>
  </svg>
);

function App() {
  const socialLinks = [
    { icon: <Telegram size={24} />, href: "https://telegram.org/", label: "Telegram" },
    { icon: <Facebook size={24} />, href: "https://facebook.com/", label: "Facebook" },
    { icon: <Github size={24} />, href: "https://github.com/", label: "Github" },
    { icon: <TikTokIcon />, href: "https://tiktok.com/", label: "TikTok" },
    { icon: <Instagram size={24} />, href: "https://instagram.com/", label: "Instagram" },
  ];

  return (
    <div className="min-h-screen bg-pink-300 flex flex-col items-center justify-center p-4 font-sans">
      <div className="bg-yellow-300 border-4 border-black rounded-lg shadow-[8px_8px_0px_#000000] w-full max-w-sm p-6">
        {/* Profile Picture Placeholder */}
        <div className="w-32 h-32 bg-blue-500 border-4 border-black rounded-full mx-auto mb-4 shadow-[4px_4px_0px_#000000] flex items-center justify-center text-white text-sm">
          {/* You can replace this div with an <img /> tag later */}
          PROFILE
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold text-center text-black mb-2">Placeholder Name</h1>

        {/* Caption */}
        <p className="text-center text-black mb-6">
          This is a placeholder caption. It can be a short bio or a fun fact about the person. Neobrutalism rocks!
        </p>

        {/* Social Media Icons Container */}
        <div className="flex justify-center space-x-3">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={social.label}
              className="w-10 h-10 bg-purple-500 border-2 border-black rounded-md shadow-[2px_2px_0px_#000000] hover:shadow-[4px_4px_0px_#000000] transition-shadow flex items-center justify-center text-white hover:bg-purple-600"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-8 text-center text-sm text-black">
        <p>Inspired by <a href="https://neo-brutalism-ui-library.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline font-bold">Neo Brutalism UI Library</a></p>
      </footer>
    </div>
  );
}

export default App;

