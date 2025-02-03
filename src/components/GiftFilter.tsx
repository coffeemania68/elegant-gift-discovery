import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FilterSelect } from "./FilterSelect";
import {
  priceOptions,
  categoryOptions,
  genderOptions,
  ageOptions,
  relationOptions,
  seasonOptions,
  specialEventOptions
} from "@/data/filterOptions";

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
  const [specialEvent, setSpecialEvent] = useState("none");

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
    if (specialEvent && specialEvent !== "none") {
      navigate("/special-event-results", { 
        state: { 
          filters: filters,
          specialEvent: specialEvent
        } 
      });
    } else {
      navigate("/gift-results", { 
        state: { 
          filters: filters 
        } 
      });
    }
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
          <FilterSelect
            label="특별한 날을 위한 선물인가요? (선택사항)"
            options={specialEventOptions}
            value={specialEvent}
            onChange={setSpecialEvent}
            placeholder="선택해주세요 (선택사항)"
          />
          
          <FilterSelect
            label="예산을 선택하세요"
            options={priceOptions}
            value={filters.price}
            onChange={(value) => handleFilterChange(value, "price")}
          />

          <FilterSelect
            label="카테고리"
            options={categoryOptions}
            value={filters.category}
            onChange={(value) => handleFilterChange(value, "category")}
          />

          <FilterSelect
            label="성별을 선택하세요"
            options={genderOptions}
            value={filters.gender}
            onChange={(value) => handleFilterChange(value, "gender")}
          />

          <FilterSelect
            label="연령대를 선택하세요"
            options={ageOptions}
            value={filters.age}
            onChange={(value) => handleFilterChange(value, "age")}
          />

          <FilterSelect
            label="어떤 관계인가요?"
            options={relationOptions}
            value={filters.relation}
            onChange={(value) => handleFilterChange(value, "relation")}
          />

          <FilterSelect
            label="어느 계절에 선물하나요?"
            options={seasonOptions}
            value={filters.season}
            onChange={(value) => handleFilterChange(value, "season")}
          />

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