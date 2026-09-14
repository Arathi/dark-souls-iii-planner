import { useSnapshot } from "valtio";
import { characterStore } from "@/store";
import { Attribute, ComputedAttribute, ReadonlyAttribute } from "./attribute";
import { Stat, EquipWeight } from "./stat";

import "./index.scss";
import { Weapon } from "./weapon";
import { Armor } from "./armor";
import { Ring } from "./ring";

const Page = () => {
  const character = useSnapshot(characterStore);

  return (
    <div className="app-dark-souls-3">
      <div className="attributes">
        <ReadonlyAttribute attribute="level" value={character.level} />
        <ComputedAttribute
          attribute="requiredSouls"
          slug="required-souls"
          iconFileName="souls"
          value={character.requiredSouls}
        />
        <span className="blank" />
        <span className="title">Attributes:</span>
        <Attribute attribute="vigor" />
        <Attribute attribute="attunement" />
        <Attribute attribute="endurance" />
        <Attribute attribute="vitality" />
        <Attribute attribute="strength" />
        <Attribute attribute="dexterity" />
        <Attribute attribute="intelligence" />
        <Attribute attribute="faith" />
        <Attribute attribute="luck" />
      </div>
      <div className="equipments">
        <span className="title">Weapons (Right Hand)</span>
        <div className="weapons right">
          <Weapon hand="right" position={1} />
          <Weapon hand="right" position={2} />
          <Weapon hand="right" position={3} />
        </div>
        <span className="title">Weapons (Left Hand)</span>
        <div className="weapons left">
          <Weapon hand="left" position={1} />
          <Weapon hand="left" position={2} />
          <Weapon hand="left" position={3} />
        </div>
        <span className="title">Armors</span>
        <div className="armors">
          <Armor position="head" />
          <Armor position="body" />
          <Armor position="hands" />
          <Armor position="legs" />
        </div>
        <span className="title">Rings</span>
        <div className="rings">
          <Ring position={1} />
          <Ring position={2} />
          <Ring position={3} />
          <Ring position={4} />
        </div>
      </div>
      <div className="stats">
        <span className="title">Basic power</span>
        <Stat stat="hp" />
        <Stat stat="fp" />
        <Stat stat="stamina" />
        <span className="blank" />
        <EquipWeight stat="equipLoad" slug="equip-load" />
        <Stat stat="poise" />
        <Stat stat="itemDiscovery" slug="item-discovery" />
      </div>
    </div>
  );
};

export default Page;
