import type { CharacterClass } from "./character-class";

export interface Character {
  name: string;
  class: CharacterClass;
  vigor: number;
  attunement: number;
  endurance: number;
  vitality: number;
  strength: number;
  dexterity: number;
  intelligence: number;
  faith: number;
  luck: number;
  hollowing: number;
  weaponRight1?: Weapon;
  weaponRight2?: Weapon;
  weaponRight3?: Weapon;
  weaponLeft1?: Weapon;
  weaponLeft2?: Weapon;
  weaponLeft3?: Weapon;
  head?: Armor;
  body?: Armor;
  hands?: Armor;
  legs?: Armor;
  ring1?: Ring;
  ring2?: Ring;
  ring3?: Ring;
  ring4?: Ring;
}

export type Equipment = UpgradeableEquipment | number;

export interface UpgradeableEquipment {
  id: number;
  upgrade: number;
  infusion: number;
}

export type Weapon = UpgradeableEquipment;
export type Armor = number;
export type Ring = number;
