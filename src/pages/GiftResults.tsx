import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Gift } from "@/types/gift";
import { Button } from "@/components/ui/button";
import { ArrowLeft, List, Image } from "lucide-react";
import { motion } from "framer-motion";
import { filterGifts } from "@/data/gifts";
import { GiftResults as GiftResultsComponent } from "@/components/GiftResults";

export default function GiftResults() {
  const location = useLocation();
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [viewMode, setViewMode] = useState<"list" | "detail">("list");

  useEffect(() => {
    if (location.state?.filters) {
      const { price, category, gender, age, relation, season } = location.state.filters;
      const filteredGifts = filterGifts({
        priceRange: price,
        category,
        gender,
        age,
        relation,
        season
      });
      setGifts(filteredGifts);
    }
  }, [location.state]);

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
      <div className="mt-1" style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,240,255,0.7))",
        border: "1px solid rgba(0,0,0,0.05)",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "20px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <p style={{
          color: "#4a4a4a",
          fontSize: "14px",
          lineHeight: "1.6",
          margin: "0"
        }}>
          🤝 이 포스팅은 <span style={{color: "#1e88e5", fontWeight: "bold"}}>쿠팡 파트너스 활동</span>의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
        </p>
      </div>
      
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

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <GiftResultsComponent gifts={gifts} />
      </motion.div>
    </div>
  );
}
