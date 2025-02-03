export type Gender = "m" | "f" | "all";  // m: 남성, f: 여성, all: 전체
export type AgeGroup = "b" | "k" | "t" | "y" | "d" | "s" | "all";  // b: 영아, k: 아동, t: 청소년, y: 청년, d: 성인, s: 장년, all: 전체
export type Relation = "f" | "s" | "r" | "w" | "t" | "c" | "all";  // f: 가족, s: 연인, r: 친구, w: 직장동료, t: 선생님, c: 고객, all: 전체
export type Season = "p" | "u" | "f" | "w" | "all";  // p: 봄, u: 여름, f: 가을, w: 겨울, all: 전체
export type Category = "digital" | "health" | "pet" | "fashion" | "beauty" | "living" | "baby" | "all";
export type PriceRange = "1m" | "3m" | "5m" | "10m" | "20m" | "under50" | "over50" | "all";

export interface Gift {
  id: string;
  imageUrl: string;
  productUrl: string;
  name: string;
  categories: Category[];
  priceRange: PriceRange;
  gender: Gender;
  ageGroups: AgeGroup[];
  relations: Relation[];
  seasons: Season[];
}