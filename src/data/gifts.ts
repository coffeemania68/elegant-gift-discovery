
import digitalGifts from './categories/digital.json';
import healthGifts from './categories/health.json';
import petGifts from './categories/pet.json';
import fashionGifts from './categories/fashion.json';
import beautyGifts from './categories/beauty.json';
import livingGifts from './categories/living.json';
import { Gift } from "@/types/gift";

// 모든 카테고리의 선물을 하나의 배열로 결합
export const gifts: Gift[] = [
  ...digitalGifts.gifts,
  ...healthGifts.gifts,
  ...petGifts.gifts,
  ...fashionGifts.gifts,
  ...beautyGifts.gifts,
  ...livingGifts.gifts
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
    // 모든 필터가 비어있거나 'all'인 경우 true 반환
    const noFiltersApplied = Object.values(filters).every(
      value => !value || value === 'all'
    );
    
    if (noFiltersApplied) {
      return true;
    }

    // 가격 범위 필터
    const priceMatches = !filters.priceRange || 
                        filters.priceRange === 'all' || 
                        gift.priceRange === filters.priceRange;
    
    // 카테고리 필터 - 여러 카테고리 지원
    const categoryMatches = !filters.category || 
                          filters.category === 'all' || 
                          gift.categories.includes(filters.category as any);
    
    // 성별 필터
    const genderMatches = !filters.gender || 
                         filters.gender === 'all' || 
                         gift.gender === 'all' || 
                         gift.gender === filters.gender;
    
    // 연령대 필터
    const ageMatches = !filters.age || 
                      filters.age === 'all' || 
                      gift.ageGroups.includes(filters.age as any);
    
    // 관계 필터
    const relationMatches = !filters.relation || 
                          filters.relation === 'all' || 
                          gift.relations.includes(filters.relation as any);
    
    // 계절 필터
    const seasonMatches = !filters.season || 
                         filters.season === 'all' || 
                         gift.seasons.includes(filters.season as any) || 
                         gift.seasons.includes('all');
    
    return priceMatches && 
           categoryMatches && 
           genderMatches && 
           ageMatches && 
           relationMatches && 
           seasonMatches;
  });
};
