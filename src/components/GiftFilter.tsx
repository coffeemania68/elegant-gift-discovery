import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export const GiftFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filters, setFilters] = useState(() => {
    const savedFilters = sessionStorage.getItem('giftFilters');
    if (savedFilters) {
      return JSON.parse(savedFilters);
    }
    return {
      price: "",
      category: "",
      gender: "",
      age: "",
      relation: "",
      season: "",
    };
  });

  useEffect(() => {
    if (location.state?.defaultFilters) {
      setFilters(prev => ({
        ...prev,
        ...location.state.defaultFilters
      }));
    }
  }, [location.state]);

  useEffect(() => {
    sessionStorage.setItem('giftFilters', JSON.stringify(filters));
  }, [filters]);

  const handleFilterChange = (value: string, filterType: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/gift-results", { 
      state: { 
        filters: filters 
      } 
    });
  };

  return (
    <>
      <div className="relative h-[400px] w-full overflow-hidden mb-8">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/winter.mp4"
        />
      </div>

      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl shadow-xl overflow-hidden animate-fade-in">
        <form onSubmit={handleSubmit} className="p-6 space-y-8">
           {/* 특별 이벤트 드롭다운 추가 */}
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-800">
              특별한 날을 위한 선물인가요? (선택사항)
            </label>
            <Select value={specialEvent} onValueChange={setSpecialEvent}>
              <SelectTrigger className="w-full h-14 text-lg">
                <SelectValue placeholder="선택해주세요 (선택사항)" />
              </SelectTrigger>
              <SelectContent className="bg-white max-h-[300px]" position="popper" sideOffset={5}>
                <SelectItem value="" className="hover:bg-pink-50 cursor-pointer py-3 italic text-gray-500">선택하지 않음</SelectItem>
                <SelectItem value="valentine" className="hover:bg-pink-50 cursor-pointer py-3">발렌타인데이 (2월 14일)</SelectItem>
                <SelectItem value="white" className="hover:bg-pink-50 cursor-pointer py-3">화이트데이 (3월 14일)</SelectItem>
                <SelectItem value="parents" className="hover:bg-pink-50 cursor-pointer py-3">어버이날 (5월 8일)</SelectItem>
                <SelectItem value="teacher" className="hover:bg-pink-50 cursor-pointer py-3">스승의날 (5월 15일)</SelectItem>
                <SelectItem value="christmas" className="hover:bg-pink-50 cursor-pointer py-3">크리스마스 (12월 25일)</SelectItem>
                <SelectItem value="birthday" className="hover:bg-pink-50 cursor-pointer py-3">생일</SelectItem>
                <SelectItem value="anniversary" className="hover:bg-pink-50 cursor-pointer py-3">기념일</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-800">
              예산을 선택하세요
            </label>
            <Select value={filters.price} onValueChange={(value) => handleFilterChange(value, "price")}>
              <SelectTrigger className="w-full h-16 text-lg bg-white">
                <SelectValue placeholder="선택해주세요" />
              </SelectTrigger>
              <SelectContent className="bg-white max-h-[300px]" position="popper" sideOffset={5}>
                <SelectItem value="all" className="hover:bg-pink-50 cursor-pointer py-3">전체 예산</SelectItem>
                <SelectItem value="1m" className="hover:bg-pink-50 cursor-pointer py-3">1만원대</SelectItem>
                <SelectItem value="3m" className="hover:bg-pink-50 cursor-pointer py-3">3만원대</SelectItem>
                <SelectItem value="5m" className="hover:bg-pink-50 cursor-pointer py-3">5만원대</SelectItem>
                <SelectItem value="10m" className="hover:bg-pink-50 cursor-pointer py-3">10만원대</SelectItem>
                <SelectItem value="20m" className="hover:bg-pink-50 cursor-pointer py-3">20만원대</SelectItem>
                <SelectItem value="under50" className="hover:bg-pink-50 cursor-pointer py-3">50만원 미만</SelectItem>
                <SelectItem value="over50" className="hover:bg-pink-50 cursor-pointer py-3">50만원 이상</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-800">
              카테고리
            </label>
            <Select value={filters.category} onValueChange={(value) => handleFilterChange(value, "category")}>
              <SelectTrigger className="w-full h-16 text-lg bg-white">
                <SelectValue placeholder="선택해주세요" />
              </SelectTrigger>
              <SelectContent className="bg-white max-h-[300px]" position="popper" sideOffset={5}>
                <SelectItem value="all" className="hover:bg-pink-50 cursor-pointer py-3">전체 카테고리</SelectItem>
                <SelectItem value="digital" className="hover:bg-pink-50 cursor-pointer py-3">디지털/가전</SelectItem>
                <SelectItem value="health" className="hover:bg-pink-50 cursor-pointer py-3">건강/운동</SelectItem>
                <SelectItem value="pet" className="hover:bg-pink-50 cursor-pointer py-3">반려동물</SelectItem>
                <SelectItem value="fashion" className="hover:bg-pink-50 cursor-pointer py-3">패션/잡화</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-800">
              성별을 선택하세요
            </label>
            <Select value={filters.gender} onValueChange={(value) => handleFilterChange(value, "gender")}>
              <SelectTrigger className="w-full h-14 text-lg">
                <SelectValue placeholder="선택해주세요" />
              </SelectTrigger>
              <SelectContent className="bg-white max-h-[300px]" position="popper" sideOffset={5}>
                <SelectItem value="all" className="hover:bg-pink-50 cursor-pointer py-3">전체</SelectItem>
                <SelectItem value="m" className="hover:bg-pink-50 cursor-pointer py-3">남성</SelectItem>
                <SelectItem value="f" className="hover:bg-pink-50 cursor-pointer py-3">여성</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-800">
              연령대를 선택하세요
            </label>
            <Select value={filters.age} onValueChange={(value) => handleFilterChange(value, "age")}>
              <SelectTrigger className="w-full h-14 text-lg">
                <SelectValue placeholder="선택해주세요" />
              </SelectTrigger>
              <SelectContent className="bg-white max-h-[300px]" position="popper" sideOffset={5}>
                <SelectItem value="all" className="hover:bg-pink-50 cursor-pointer py-3">전체 연령대</SelectItem>
                <SelectItem value="b" className="hover:bg-pink-50 cursor-pointer py-3">영아 (0-3세)</SelectItem>
                <SelectItem value="k" className="hover:bg-pink-50 cursor-pointer py-3">아동 (4-13세)</SelectItem>
                <SelectItem value="t" className="hover:bg-pink-50 cursor-pointer py-3">청소년 (14-19세)</SelectItem>
                <SelectItem value="y" className="hover:bg-pink-50 cursor-pointer py-3">청년 (20-29세)</SelectItem>
                <SelectItem value="d" className="hover:bg-pink-50 cursor-pointer py-3">성인 (30-49세)</SelectItem>
                <SelectItem value="s" className="hover:bg-pink-50 cursor-pointer py-3">장년 (50세+)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-800">
              어떤 관계인가요?
            </label>
            <Select value={filters.relation} onValueChange={(value) => handleFilterChange(value, "relation")}>
              <SelectTrigger className="w-full h-14 text-lg">
                <SelectValue placeholder="선택해주세요" />
              </SelectTrigger>
              <SelectContent className="bg-white max-h-[300px]" position="popper" sideOffset={5}>
                <SelectItem value="all" className="hover:bg-pink-50 cursor-pointer py-3">전체 관계</SelectItem>
                <SelectItem value="f" className="hover:bg-pink-50 cursor-pointer py-3">가족</SelectItem>
                <SelectItem value="s" className="hover:bg-pink-50 cursor-pointer py-3">연인</SelectItem>
                <SelectItem value="r" className="hover:bg-pink-50 cursor-pointer py-3">친구</SelectItem>
                <SelectItem value="w" className="hover:bg-pink-50 cursor-pointer py-3">직장동료</SelectItem>
                <SelectItem value="t" className="hover:bg-pink-50 cursor-pointer py-3">선생님</SelectItem>
                <SelectItem value="c" className="hover:bg-pink-50 cursor-pointer py-3">고객/거래처</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-800">
              어느 계절에 선물하나요?
            </label>
            <Select value={filters.season} onValueChange={(value) => handleFilterChange(value, "season")}>
              <SelectTrigger className="w-full h-14 text-lg">
                <SelectValue placeholder="선택해주세요" />
              </SelectTrigger>
              <SelectContent className="bg-white max-h-[300px]" position="popper" sideOffset={5}>
                <SelectItem value="all" className="hover:bg-pink-50 cursor-pointer py-3">전체 계절</SelectItem>
                <SelectItem value="p" className="hover:bg-pink-50 cursor-pointer py-3">봄</SelectItem>
                <SelectItem value="u" className="hover:bg-pink-50 cursor-pointer py-3">여름</SelectItem>
                <SelectItem value="f" className="hover:bg-pink-50 cursor-pointer py-3">가을</SelectItem>
                <SelectItem value="w" className="hover:bg-pink-50 cursor-pointer py-3">겨울</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-medium py-6 text-lg hover:shadow-lg transform transition hover:-translate-y-0.5"
          >
            마음까지 전하는 선물 추천받기
          </Button>
        </form>
      </div>
    </>
  );
};
