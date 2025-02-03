import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { GiftResults as GiftResultsComponent } from "@/components/GiftResults";
import { Gift } from "@/types/gift";
import { filterGifts } from "@/data/gifts";

const eventTitles: Record<string, string> = {
  valentine: "발렌타인데이 선물 추천",
  white: "화이트데이 선물 추천",
  parents: "어버이날 선물 추천",
  teacher: "스승의날 선물 추천",
  christmas: "크리스마스 선물 추천",
  birthday: "생일 선물 추천",
  anniversary: "기념일 선물 추천"
};

export default function SpecialEventResults() {
  const location = useLocation();
  const [gifts, setGifts] = useState<Gift[]>([]);
  const eventType = location.state?.specialEvent || "none";

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mt-3 mb-8" style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,240,255,0.7))",
        border: "1px solid rgba(0,0,0,0.05)",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
        textAlign: "center"
      }}>
        <p style={{
          color: "#4a4a4a",
          fontSize: "14px",
          lineHeight: "1.6",
          margin: "0"
        }}>
          🤝 이 포스팅은 <span style={{color: "#1e88e5", fontWeight: "bold"}}>쿠팡 파트너스와 컬리 쿠페이터 활동</span>의 일환으로 <br />
          이에 따른 일정액의 <span style={{color: "#4caf50", fontWeight: "bold"}}>수수료를 제공받습니다</span>.
        </p>
      </div>
      
      <div className="flex justify-between items-center mb-8">
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> 돌아가기
          </Button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
        {eventTitles[eventType] || "맞춤 선물 추천"}
      </h1>

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
