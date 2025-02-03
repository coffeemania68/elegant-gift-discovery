import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "@/types/gift";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface GiftResultsProps {
  gifts: Gift[];
}

export const GiftResults = ({ gifts }: GiftResultsProps) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  if (gifts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-gray-600">해당하는 선물이 없습니다.</p>
      </div>
    );
  }

  const handleImageError = (giftId: string) => {
    setImageErrors(prev => ({ ...prev, [giftId]: true }));
    console.error(`Image failed to load for gift: ${giftId}`);
  };

  const getFallbackImage = (category: string) => {
    const fallbackImages: Record<string, string> = {
      digital: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      health: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
      pet: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9",
      fashion: "https://images.unsplash.com/photo-1445205170230-053b83016050",
      living: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      default: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    };

    return fallbackImages[category] || fallbackImages.default;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gifts.map((gift) => (
        <Card key={gift.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <a href={gift.productUrl} target="_blank" rel="noopener noreferrer">
            <div className="aspect-video relative overflow-hidden">
              {imageErrors[gift.id] ? (
                <img
                  src={getFallbackImage(gift.categories[0])}
                  alt={gift.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform"
                />
              ) : (
                <img
                  src={gift.imageUrl}
                  alt={gift.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform"
                  onError={() => handleImageError(gift.id)}
                />
              )}
            </div>
            <CardHeader>
              <CardTitle className="text-lg line-clamp-2">{gift.name}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                안심 당일배송 쿠팡 바로가기 <ExternalLink className="w-4 h-4" />
              </CardDescription>
            </CardHeader>
          </a>
        </Card>
      ))}
    </div>
  );
};