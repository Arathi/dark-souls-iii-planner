import type { Effect } from "./effect";

export type RingRank = 0 | 1 | 2 | 3;
export interface Ring {
  id: number; // 0
  name: string; // 1
  rank: RingRank; // 2
  weight: number; // 3
  effects: Effect[]; // 4
}
