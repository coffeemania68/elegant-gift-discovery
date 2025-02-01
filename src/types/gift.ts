export type Gender = "m" | "f" | "a";  // m: 남성, f: 여성, a: 전체
export type AgeGroup = "b" | "k" | "t" | "y" | "d" | "s";  // b: 영아, k: 아동, t: 청소년, y: 청년, d: 성인, s: 장년
export type Relation = "f" | "s" | "r" | "w" | "t" | "c";  // f: 가족, s: 연인, r: 친구, w: 직장동료, t: 선생님, c: 고객
export type Season = "p" | "u" | "f" | "w" | "a";  // p: 봄, u: 여름, f: 가을, w: 겨울, a: 전체
export type Category = "digital" | "health" | "pet" | "fashion";
export type PriceRange = "1m" | "3m" | "5m" | "10m" | "20m" | "under50" | "over50";

export interface Gift {
  id: string;
  imageUrl: string;
  productUrl: string;
  name: string;
  category: Category;
  priceRange: PriceRange;
  gender: Gender;
  ageGroups: AgeGroup[];
  relations: Relation[];
  seasons: Season[];
}