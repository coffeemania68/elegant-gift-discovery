import { Search } from "lucide-react";

export const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-24 text-center animate-fade-up">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
        Find the Perfect Gift
      </h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Discover thoughtful gifts for every occasion with our AI-powered recommendation engine
      </p>
      <div className="max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="What's the occasion?"
            className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};