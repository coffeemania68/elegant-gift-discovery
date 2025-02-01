import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Gift } from "@/types/gift";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, List, Image } from "lucide-react";
import { motion } from "framer-motion";

export default function GiftResults() {
  const location = useLocation();
  const gifts = location.state?.gifts as Gift[] || [];
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "detail">("list");

  const messages = [
    "완벽한 선물을 찾으셨네요! 받는 분의 미소가 떠오르시나요? 😊",
    "특별한 순간을 더욱 빛나게 해줄 선물이에요! ✨",
    "센스있는 당신의 선택! 받는 분의 마음을 사로잡을 거예요. 💝",
    "이런 선물을 고르다니, 당신의 센스가 돋보이네요! 🎁",
  ];

  const getRandomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  if (gifts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">선물 추천 결과</h1>
          <p className="text-gray-600">해당하는 선물이 없습니다.</p>
          <Link to="/">
            <Button className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> 다시 검색하기
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> 돌아가기
          </Button>
        </Link>
        <div className="flex gap-2">
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            onClick={() => setViewMode("list")}
          >
            <List className="mr-2 h-4 w-4" /> 목록보기
          </Button>
          <Button
            variant={viewMode === "detail" ? "default" : "outline"}
            onClick={() => setViewMode("detail")}
          >
            <Image className="mr-2 h-4 w-4" /> 상세보기
          </Button>
        </div>
      </div>

      {viewMode === "list" ? (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {gifts.map((gift) => (
            <motion.div
              key={gift.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className="cursor-pointer h-full hover:shadow-lg transition-shadow"
                onClick={() => {
                  setSelectedGift(gift);
                  setViewMode("detail");
                }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={gift.imageUrl}
                    alt={gift.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{gift.name}</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        selectedGift && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={selectedGift.imageUrl}
                  alt={selectedGift.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{selectedGift.name}</CardTitle>
                <CardDescription className="text-lg mt-4">
                  {getRandomMessage()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={selectedGift.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full">
                    쿠팡에서 구매하기
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        )
      )}
    </div>
  );
}