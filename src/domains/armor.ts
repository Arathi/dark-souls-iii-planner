import type { Effect } from "./effect";

export type ArmorType = "Body" | "Arms" | "Head" | "Legs";
export interface Armor {
  id: number; // 0
  name: string; // 1
  weight: number; // 2
  physical: number; // 3
  vs_strike: number; // 4
  vs_slash: number; // 5
  vs_thrust: number; // 6
  magic: number; // 7
  fire: number; // 8
  lightning: number; // 9
  dark: number; // 10
  bleed: number; // 11
  poison: number; // 12
  frost: number; // 13
  curse: number; // 14
  poise: number; // 15
  armor_type: ArmorType; // 16
  armor_set: string; // 17
  effects?: Effect[]; // 18
}
