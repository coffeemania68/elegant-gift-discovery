import { useNavigate } from "react-router-dom";

const categories = [
  {
    image: "/images/categories/novel.jpg",
    title: "도슨트북",
    description: "스토리 요약부터 해설까지, 도슨트와 함께 읽는",
    defaultFilters: {
      category: "all",
      relation: "f",
      season: "all"
    }
  },
  {
    image: "/images/categories/essay.jpg",
    title: "오브제북",
    description: "활자를 넘어 아름다운 그림과 음악을 함께 감상하는",
    defaultFilters: {
      category: "all",
      relation: "s",
      season: "all"
    }
  },
  {
    image: "/images/categories/business.jpg",
    title: "오디오북",
    description: "소설, 인문, 경제경영, 자기계발, 에세이, 과학",
    defaultFilters: {
      category: "all",
      relation: "all",
      season: "all"
    }
  },
  {
    image: "/images/categories/self-help.jpg",
    title: "챗북",
    description: "백발백중! 벼락치기 운세, 쇼트 클래식, 인터뷰 시리즈",
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
      <h2 className="text-3xl font-bold text-center mb-12">
        카테고리
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => handleCategoryClick(category.defaultFilters)}
          >
            <div className="flex items-center p-6 gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
              <div className="w-32 h-32 flex-shrink-0">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};