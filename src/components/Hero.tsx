import { Search } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-24 text-center animate-fade-up">
      <div className="relative w-32 h-32 mx-auto mb-8">
        <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
        <img 
          src="/placeholder.svg" 
          alt="Gift Finder" 
          className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
        />
      </div>
      <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
        선물 추천
      </h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        AI가 추천하는 특별한 선물로 소중한 마음을 전하세요
      </p>
      <div className="max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="어떤 선물을 찾으시나요?"
            className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <Button 
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};