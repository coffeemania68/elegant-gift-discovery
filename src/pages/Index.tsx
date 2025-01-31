import { Hero } from "@/components/Hero";
import { GiftFilter } from "@/components/GiftFilter";

const Index = () => {
  return (
    <div className="min-h-screen pb-16">
      <header className="text-center py-12 px-4">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
          <img 
            src="/placeholder.svg" 
            alt="선물 추천" 
            className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-3">선물 추천</h1>
        <p className="text-gray-600 text-lg">특별한 선물을 찾아보세요</p>
      </header>

      <main className="container mx-auto px-4 pb-12 max-w-2xl">
        <GiftFilter />
      </main>
    </div>
  );
};

export default Index;