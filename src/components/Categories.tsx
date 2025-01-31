import { Gift, Cake, Heart, Star } from "lucide-react";

const categories = [
  {
    icon: Gift,
    title: "Birthday Gifts",
    description: "Perfect presents for their special day",
  },
  {
    icon: Heart,
    title: "Anniversary",
    description: "Celebrate your love with thoughtful gifts",
  },
  {
    icon: Star,
    title: "Special Occasions",
    description: "Make any moment memorable",
  },
  {
    icon: Cake,
    title: "Celebrations",
    description: "Add joy to every celebration",
  },
];

export const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
        Popular Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <category.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{category.title}</h3>
            <p className="text-gray-600 text-center">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};