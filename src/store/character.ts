import { proxy } from "valtio";

import type { Character } from "@/domains/character";
import { CharacterClass } from "@/domains/character-class";
import classes from "@/metadata/classes.json";
import stats from "@/metadata/stats.json";
import type { AttributeKey, Attributes } from "@/domains/attributes";

type State = Character;

type Computed = {
  get level(): number;
  get requiredSouls(): number;
  get baseAttributes(): Attributes;
  get equipmentAttributes(): Attributes;
  get attributes(): Attributes;
  get stats(): any;
};

type Actions = {};

type Store = State & Computed & Actions;

export const store = proxy<Store>({
  // stat
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
  // computed
  get baseAttributes() {
    return classes[store.class];
  },
  get level() {
    return (
      this.baseAttributes.level +
      this.vigor +
      this.attunement +
      this.endurance +
      this.vitality +
      this.strength +
      this.dexterity +
      this.intelligence +
      this.faith +
      this.luck
    );
  },
  get requiredSouls() {
    const level = this.level;
    if (level < stats.souls.length) {
      return stats.souls[level];
    }
    return Math.round((1 / 2.8) * Math.pow(1.120639022 * (level + 10), 2.5));
  },
  get equipmentAttributes() {
    return {} as Attributes;
  },
  get attributes() {
    const keys = [
      "vigor",
      "attunement",
      "endurance",
      "vitality",
      "strength",
      "dexterity",
      "intelligence",
      "faith",
      "luck",
    ];
    const output = {};
    for (const key of keys) {
      const base = this.baseAttributes[key] ?? 0;
      const equip = this.equipmentAttributes[key] ?? 0;
      const level = this[key] ?? 0;
      output[key] = base + equip + level;
    }
    return output as Attributes;
  },
  get stats() {
    function actualAttribute(point: number) {
      if (point < 0) point = 0;
      if (point > 99) point = 99;
      return point;
    }

    const vigor = actualAttribute(this.attributes.vigor);
    const hp = stats.hp[vigor];

    const attunement = actualAttribute(this.attributes.attunement);
    const fp = stats.fp[attunement];

    const endurance = actualAttribute(this.attributes.endurance);
    const stamina = stats.stamina[endurance];

    const baseEquipLoad = this.attributes.vitality + 40;
    const equipLoadModifiers = 1;

    const equipLoad = baseEquipLoad * equipLoadModifiers;
    const equipWeight = 0;

    return {
      hp,
      fp,
      stamina,
      equipLoad,
      equipWeight,
      poise: 0,
      itemDiscovery: 0,
    };
  },
  // actions
});
