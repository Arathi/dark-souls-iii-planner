import type { Effect } from "./effect";

export type WeaponType =
  | "Shield"
  | "Straight Sword"
  | "Dagger"
  | "Crossbow"
  | "Staff"
  | "Spear"
  | "Ultra Greatsword"
  | "Greatsword"
  | "Axe"
  | "Katana"
  | "Bow"
  | "Halberd"
  | "Greataxe"
  | "Hammer"
  | "Fist"
  | "Sacred Chime"
  | "Talisman"
  | "Curved Greatsword"
  | "Curved Sword"
  | "Claw"
  | "Piercing Sword"
  | "Great Hammer"
  | "Greatbow"
  | "Flame"
  | "Reaper"
  | "Whip";

export interface Weapon {
  id: number; // 0
  name: string; // 1
  weapon_type: WeaponType; // 2
  weight: number; // 3
  bleed: number; // 4
  poison: number; // 5
  frost: number; // 6
  strength_req: number; // 7
  dex_req: number; // 8
  intelligence_req: number; // 9
  faith_req: number; // 10
  physical_def: number; // 11
  magic_def: number; // 12
  fire_def: number; // 13
  lightning_def: number; // 14
  dark_def: number; // 15
  infusable: boolean; // 16
  dual_wield: boolean; // 17
  base_damage: number[]; // 18
  scaling_coefficients: number[]; // 19
  stat_funcs: number[]; // 20
  effects?: Effect[]; // 21
}
