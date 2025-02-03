import digitalGifts from './categories/digital.json';
import healthGifts from './categories/health.json';
import petGifts from './categories/pet.json';
import fashionGifts from './categories/fashion.json';
import { Gift } from "@/types/gift";

// 모든 카테고리의 선물을 하나의 배열로 결합
export const gifts: Gift[] = [
  ...digitalGifts.gifts,
  ...healthGifts.gifts,
  ...petGifts.gifts,
  ...fashionGifts.gifts
].map(gift => ({
  ...gift,
  categories: gift.categories as Gift['categories'],
  priceRange: gift.priceRange as Gift['priceRange'],
  gender: gift.gender as Gift['gender'],
  ageGroups: gift.ageGroups as Gift['ageGroups'],
  relations: gift.relations as Gift['relations'],
  seasons: gift.seasons as Gift['seasons']
}));

export const filterGifts = (filters: {
  priceRange?: string;
  category?: string;
  gender?: string;
  age?: string;
  relation?: string;
  season?: string;
}): Gift[] => {
  return gifts.filter(gift => {
    // 모든 필터가 'all'이거나 비어있으면 true 반환
    if ((!filters.priceRange || filters.priceRange === 'all') && 
        (!filters.category || filters.category === 'all') && 
        (!filters.gender || filters.gender === 'all') && 
        (!filters.age || filters.age === 'all') && 
        (!filters.relation || filters.relation === 'all') && 
        (!filters.season || filters.season === 'all')) {
      return true;
    }

    // 가격 범위 필터
    if (filters.priceRange && filters.priceRange !== 'all' && 
        gift.priceRange !== filters.priceRange) {
      return false;
    }
    
    // 카테고리 필터 - 여러 카테고리 지원
    if (filters.category && filters.category !== 'all' && 
        !gift.categories.includes(filters.category as any)) {
      return false;
    }
    
    // 성별 필터
    if (filters.gender && filters.gender !== 'all' && 
        gift.gender !== 'all' && gift.gender !== filters.gender) {
      return false;
    }
    
    // 연령대 필터
    if (filters.age && filters.age !== 'all' && 
        !gift.ageGroups.includes(filters.age as any)) {
      return false;
    }
    
    // 관계 필터
    if (filters.relation && filters.relation !== 'all' && 
        !gift.relations.includes(filters.relation as any)) {
      return false;
    }
    
    // 계절 필터
    if (filters.season && filters.season !== 'all' && 
        !gift.seasons.includes(filters.season as any) && 
        !gift.seasons.includes('all')) {
      return false;
    }
    
    return true;
  });
};