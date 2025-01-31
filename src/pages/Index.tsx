import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { GiftFilter } from "@/components/GiftFilter";
import { HowItWorks } from "@/components/HowItWorks";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
            맞춤형 선물 찾기
          </h2>
          <GiftFilter />
        </div>
      </div>
      <HowItWorks />
      <Newsletter />
    </div>
  );
};

export default Index;