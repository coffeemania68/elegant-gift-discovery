import { Gift, Cake, Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    icon: Gift,
    title: "생일 선물",
    description: "특별한 날을 위한 완벽한 선물",
    defaultFilters: {
      category: "all",
      relation: "f",
      season: "all"
    }
  },
  {
    icon: Heart,
    title: "기념일",
    description: "사랑하는 마음을 전하는 선물",
    defaultFilters: {
      category: "all",
      relation: "s",
      season: "all"
    }
  },
  {
    icon: Star,
    title: "특별한 날",
    description: "잊지 못할 순간을 만드는 선물",
    defaultFilters: {
      category: "all",
      relation: "all",
      season: "all"
    }
  },
  {
    icon: Cake,
    title: "축하",
    description: "기쁨을 더하는 축하 선물",
    defaultFilters: {
      category: "all",
      relation: "r",
      season: "all"
    }
  },
];

export const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (defaultFilters: typeof categories[0]['defaultFilters']) => {
    navigate('/#gift-filter', { state: { defaultFilters } });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
        인기 카테고리
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#D946EF]/10 to-[#F97316]/10 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow animate-fade-up cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => handleCategoryClick(category.defaultFilters)}
          >
            <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <category.icon className="w-6 h-6 text-[#8B5CF6]" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{category.title}</h3>
            <p className="text-gray-600 text-center">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};