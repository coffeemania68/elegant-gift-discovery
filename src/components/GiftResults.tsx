import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "@/types/gift";
import { ExternalLink } from "lucide-react";

interface GiftResultsProps {
  gifts: Gift[];
}

export const GiftResults = ({ gifts }: GiftResultsProps) => {
  if (gifts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-gray-600">해당하는 선물이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gifts.map((gift) => (
        <Card key={gift.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <a href={gift.productUrl} target="_blank" rel="noopener noreferrer">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={gift.imageUrl}
                alt={gift.name}
                className="object-cover w-full h-full hover:scale-105 transition-transform"
              />
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
