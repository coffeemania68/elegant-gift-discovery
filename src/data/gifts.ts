import { Gift } from "../types/gift";

export const gifts: Gift[] = [
  {
    id: "digital_10m_05",
    imageUrl: "/images/products/digital_10m_05.jpg",
    productUrl: "https://link.coupang.com/a/ccibG1",
    name: "일리 프란시스 커피머신 화이트",
    category: "digital",
    priceRange: "10m",
    gender: "a",
    ageGroups: ["y", "d", "s"],
    relations: ["f", "s", "r"],
    seasons: ["a"]
  },
  {
    id: "digital_20m_02",
    imageUrl: "/images/products/digital_20m_02.jpg",
    productUrl: "https://link.coupang.com/a/ccigqx",
    name: "Apple Beats Pill Wireless 블루투스 스피커",
    category: "digital",
    priceRange: "20m",
    gender: "m",
    ageGroups: ["t", "y", "d"],
    relations: ["f", "s", "r"],
    seasons: ["a"]
  },
  // ... 나머지 상품 데이터도 같은 형식으로 추가
];

export const filterGifts = (filters: {
  priceRange?: string;
  category?: string;
  gender?: string;
  age?: string;
  relation?: string;
  season?: string;
}): Gift[] => {
  return gifts.filter(gift => {
    if (filters.priceRange && gift.priceRange !== filters.priceRange) return false;
    if (filters.category && gift.category !== filters.category) return false;
    if (filters.gender && gift.gender !== filters.gender && gift.gender !== "a") return false;
    if (filters.age && !gift.ageGroups.includes(filters.age as any)) return false;
    if (filters.relation && !gift.relations.includes(filters.relation as any)) return false;
    if (filters.season && !gift.seasons.includes(filters.season as any) && !gift.seasons.includes("a")) return false;
    return true;
  });
};