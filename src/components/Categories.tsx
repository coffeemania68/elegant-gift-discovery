import { useNavigate } from "react-router-dom";

const categories = [
  {
    image: "/images/categories/birthday.jpg",
    title: "생일 선물",
    description: "특별한 날을 위한 완벽한 선물",
    defaultFilters: {
      category: "all",
      relation: "f",
      season: "all"
    }
  },
  {
    image: "/images/categories/anniversary.jpg",
    title: "기념일",
    description: "사랑하는 마음을 전하는 선물",
    defaultFilters: {
      category: "all",
      relation: "s",
      season: "all"
    }
  },
  {
    image: "/images/categories/special.jpg",
    title: "특별한 날",
    description: "잊지 못할 순간을 만드는 선물",
    defaultFilters: {
      category: "all",
      relation: "all",
      season: "all"
    }
  },
  {
    image: "/images/categories/congratulation.jpg",
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
    const giftFilterElement = document.getElementById('gift-filter');
    if (giftFilterElement) {
      giftFilterElement.scrollIntoView({ behavior: 'smooth' });
      // 필터 상태 업데이트를 위해 state를 전달
      navigate('/', { state: { defaultFilters } });
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        인기 카테고리
      </h2>
      <div className="grid grid-cols-1 gap-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden animate-fade-up h-[75px]"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => handleCategoryClick(category.defaultFilters)}
          >
            <div className="flex items-center p-3 gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
              <div className="w-16 h-16 flex-shrink-0">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover rounded-lg transform -rotate-12"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};