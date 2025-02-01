import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Gift } from "@/types/gift";
import { gifts, filterGifts } from "@/data/gifts";
import { GiftResults } from "@/components/GiftResults";
import { useNavigate } from "react-router-dom";

export const GiftFilter = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    price: "",
    category: "",
    gender: "",
    age: "",
    relation: "",
    season: "",
  });

  const handleFilterChange = (value: string, filterType: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const results = filterGifts({
      priceRange: filters.price,
      category: filters.category,
      gender: filters.gender,
      age: filters.age,
      relation: filters.relation,
      season: filters.season,
    });
    
    navigate("/gift-results", { state: { gifts: results } });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
      <div className="h-2 bg-gradient-to-r from-primary to-blue-500" />
      
      <form onSubmit={handleSubmit} className="p-8 space-y-8">
        {/* 예산 선택 */}
        <div className="space-y-3">
          <label className="block text-lg font-medium text-gray-800">
            예산을 선택하세요
          </label>
          <Select onValueChange={(value) => handleFilterChange(value, "price")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">1만원대</SelectItem>
              <SelectItem value="3m">3만원대</SelectItem>
              <SelectItem value="5m">5만원대</SelectItem>
              <SelectItem value="10m">10만원대</SelectItem>
              <SelectItem value="20m">20만원대</SelectItem>
              <SelectItem value="under50">50만원 미만</SelectItem>
              <SelectItem value="over50">50만원 이상</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 카테고리 선택 */}
        <div className="space-y-3">
          <label className="block text-lg font-medium text-gray-800">
            어떤 종류의 선물을 찾으시나요?
          </label>
          <Select onValueChange={(value) => handleFilterChange(value, "category")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체 카테고리</SelectItem>
              <SelectItem value="digital">디지털/가전</SelectItem>
              <SelectItem value="health">건강/운동</SelectItem>
              <SelectItem value="pet">반려동물</SelectItem>
              <SelectItem value="fashion">패션/잡화</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 성별 선택 */}
        <div className="space-y-3">
          <label className="block text-lg font-medium text-gray-800">
            성별을 선택하세요
          </label>
          <Select onValueChange={(value) => handleFilterChange(value, "gender")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="m">남성</SelectItem>
              <SelectItem value="f">여성</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 연령대 선택 */}
        <div className="space-y-3">
          <label className="block text-lg font-medium text-gray-800">
            연령대를 선택하세요
          </label>
          <Select onValueChange={(value) => handleFilterChange(value, "age")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="b">영아 (0-3세)</SelectItem>
              <SelectItem value="k">아동 (4-13세)</SelectItem>
              <SelectItem value="t">청소년 (14-19세)</SelectItem>
              <SelectItem value="y">청년 (20-29세)</SelectItem>
              <SelectItem value="d">성인 (30-49세)</SelectItem>
              <SelectItem value="s">장년 (50세+)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 관계 선택 */}
        <div className="space-y-3">
          <label className="block text-lg font-medium text-gray-800">
            어떤 관계인가요?
          </label>
          <Select onValueChange={(value) => handleFilterChange(value, "relation")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="f">가족</SelectItem>
              <SelectItem value="s">연인</SelectItem>
              <SelectItem value="r">친구</SelectItem>
              <SelectItem value="w">직장동료</SelectItem>
              <SelectItem value="t">선생님</SelectItem>
              <SelectItem value="c">고객/거래처</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 계절 선택 */}
        <div className="space-y-3">
          <label className="block text-lg font-medium text-gray-800">
            어느 계절에 선물하나요?
          </label>
          <Select onValueChange={(value) => handleFilterChange(value, "season")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체 계절</SelectItem>
              <SelectItem value="p">봄</SelectItem>
              <SelectItem value="u">여름</SelectItem>
              <SelectItem value="f">가을</SelectItem>
              <SelectItem value="w">겨울</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-blue-500 text-white font-medium py-6 text-lg hover:shadow-lg transform transition hover:-translate-y-0.5"
        >
          나에게 딱 맞는 선물 찾기
        </Button>
      </form>
      
    </div>
  );
};
