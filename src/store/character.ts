import type { Character } from "@/domains/character";
import { CharacterClass } from "@/domains/character-class";
import { proxy } from "valtio";

export const store = proxy<Character>({
  name: "Ashen One",
  class: CharacterClass.Knight,
  vigor: 0,
  attunement: 0,
  endurance: 0,
  vitality: 0,
  strength: 0,
  dexterity: 0,
  intelligence: 0,
  faith: 0,
  luck: 0,
  hollowing: 0,
});
