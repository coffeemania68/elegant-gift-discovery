import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { HowItWorks } from "@/components/HowItWorks";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen pb-16">
      <Hero />
      <Categories />
      <HowItWorks />
      <Newsletter />
    </div>
  );
};

export default Index;