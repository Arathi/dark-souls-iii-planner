import { useState } from "react";

import { Attribute } from "@/components/attribute";
import { Select } from "@/components/select";
import classes from "@/metadata/classes.json";
import dictionary from "@/i18n/classes.json";
import { characterStore, settingStore } from "@/store";

import "./index.scss";
import type { CharacterClass } from "@/domains/character-class";
import { useSnapshot } from "valtio";

export const Planner = () => {
  const character = useSnapshot(characterStore);
  const setting = useSnapshot(settingStore);

  const hp = 0;
  const fp = 0;
  const stamina = 0;
  const equipLoad = 0;
  const poise = 0;
  const itemDiscovery = 0;

  const physicalDefense = 0;
  const physicalAbsorption = 0;

  const vsStrikeDefense = 0;
  const vsStrikeAbsorption = 0;

  const vsSlashDefense = 0;
  const vsSlashAbsorption = 0;

  const vsThrustDefense = 0;
  const vsThrustAbsorption = 0;

  const magicDefense = 0;
  const magicAbsorption = 0;

  const fireDefense = 0;
  const fireAbsorption = 0;

  const lightningDefense = 0;
  const lightningAbsorption = 0;

  const darkDefense = 0;
  const darkAbsorption = 0;

  const bleedResistances = 0;
  const bleedArmor = 0;

  const poisonResistances = 0;
  const poisonArmor = 0;

  const frostResistances = 0;
  const frostArmor = 0;

  const curseResistances = 0;
  const curseArmor = 0;

  const baseVigor = 0;
  const baseAttunement = 0;
  const baseEndurance = 0;
  const baseVitality = 0;
  const baseStrength = 0;
  const baseDexterity = 0;
  const baseIntelligence = 0;
  const baseFaith = 0;
  const baseLuck = 0;

  const slots = [];

  const classOptions = [];
  classes.forEach((it, index) => {
    const entry = dictionary.find((e) => e.id == it.id);
    const label = entry?.[setting.language] ?? it.id;
    classOptions.push({
      value: index as CharacterClass,
      label,
    });
  });

  return (
    <div className="planner">
      <div className="group attributes">
        <div className="name">
          <input
            type="text"
            value={character.name}
            placeholder="角色名称"
            onChange={(event) => {
              const value = event.currentTarget.value;
              characterStore.name = value;
            }}
          />
        </div>
        <div className="attribute class">
          <Select
            options={classOptions}
            value={character.class}
            onChange={(value) => {
              characterStore.class = value;
            }}
          />
        </div>
        <div className="blank" />
        <Attribute property="level" editable={false} />
        <Attribute property="vigor" editable={true} />
        <Attribute property="attunement" editable={true} />
        <Attribute property="endurance" editable={true} />
        <Attribute property="vitality" editable={true} />
        <Attribute property="strength" editable={true} />
        <Attribute property="dexterity" editable={true} />
        <Attribute property="intelligence" editable={true} />
        <Attribute property="faith" editable={true} />
        <Attribute property="luck" editable={true} />
      </div>
      <div className="group equipments">
        <div className="weapons right">
          <div className="weapon">
            <img />
          </div>
          <div className="weapon">
            <img />
          </div>
          <div className="weapon">
            <img />
          </div>
        </div>
        <div className="weapons left">
          <div className="weapon">
            <img />
          </div>
          <div className="weapon">
            <img />
          </div>
          <div className="weapon">
            <img />
          </div>
        </div>
        <div className="armors">
          <div className="armor head">
            <img />
          </div>
          <div className="armor body">
            <img />
          </div>
          <div className="armor hands">
            <img />
          </div>
          <div className="armor legs">
            <img />
          </div>
        </div>
        <div className="rings">
          <div className="ring">
            <img />
          </div>
          <div className="ring">
            <img />
          </div>
          <div className="ring">
            <img />
          </div>
          <div className="ring">
            <img />
          </div>
        </div>
        <div className="spells">
          <div className="spell">
            <img />
          </div>
        </div>
      </div>
      <div className="group stats">
        <div className="header">Base power</div>
        <div className="attribute hp">
          <span className="icon hp" />
          <span className="attribute-name">HP</span>
          <span>{hp}</span>
        </div>
        <div className="attribute fp">
          <span className="icon fp" />
          <span className="attribute-name">FP</span>
          <span>{fp}</span>
        </div>
        <div className="attribute stamina">
          <span className="icon stamina" />
          <span className="attribute-name">Stamina</span>
          <span>{stamina}</span>
        </div>

        <div className="blank" />

        <div className="attribute equip-load">
          <span className="icon equip-load" />
          <span className="attribute-name">Equip Load</span>
          <span>{equipLoad}</span>
        </div>
        <div className="attribute poise">
          <span className="icon poise" />
          <span className="attribute-name">Poise</span>
          <span>{stamina}</span>
        </div>
        <div className="attribute item-discovery">
          <span className="icon item-discovery" />
          <span className="attribute-name">Item Discovery</span>
          <span>{itemDiscovery}</span>
        </div>

        <div className="blank" />

        <div className="stat-header">
          <div style={{ width: 20 }}></div>
          <span />
          <span>Defense /</span>
          <span>Absorption</span>
        </div>
        <div className="stat physical">
          <span className="icon physical" />
          <span className="stat-name">Physical</span>
          <span className="defense">{physicalDefense}</span>
          <span className="absorption">{physicalAbsorption}</span>
        </div>
        <div className="stat vs-strike">
          <span className="icon item-discovery" />
          <span className="stat-name">VS strike</span>
          <span className="defense">{itemDiscovery}</span>
          <span className="absorption">{itemDiscovery}</span>
        </div>
        <div className="stat vs-strike">
          <span className="icon item-discovery" />
          <span className="stat-name">VS slash</span>
          <span className="defense">{itemDiscovery}</span>
          <span className="absorption">{itemDiscovery}</span>
        </div>
        <div className="stat vs-strike">
          <span className="icon item-discovery" />
          <span className="stat-name">VS thrust</span>
          <span className="defense">{itemDiscovery}</span>
          <span className="absorption">{itemDiscovery}</span>
        </div>
        <div className="stat magic">
          <span className="icon magic" />
          <span className="stat-name">Magic</span>
          <span className="defense">{itemDiscovery}</span>
          <span className="absorption">{itemDiscovery}</span>
        </div>
        <div className="stat magic">
          <span className="icon magic" />
          <span className="stat-name">Fire</span>
          <span className="defense">{itemDiscovery}</span>
          <span className="absorption">{itemDiscovery}</span>
        </div>
        <div className="stat magic">
          <span className="icon magic" />
          <span className="stat-name">Lightning</span>
          <span className="defense">{itemDiscovery}</span>
          <span className="absorption">{itemDiscovery}</span>
        </div>
        <div className="stat magic">
          <span className="icon magic" />
          <span className="stat-name">Dark</span>
          <span className="defense">{itemDiscovery}</span>
          <span className="absorption">{itemDiscovery}</span>
        </div>

        <div className="stat-header">
          <div style={{ width: 20 }}></div>
          <span></span>
          <span>Resistances /</span>
          <span>Armor</span>
        </div>
        <div className="stat bleed">
          <span className="icon bleed" />
          <span className="stat-name">Bleed</span>
          <span className="resistances">{bleedResistances}</span>
          <span className="armor">{bleedArmor}</span>
        </div>
        <div className="stat bleed">
          <span className="icon bleed" />
          <span className="stat-name">Poison</span>
          <span className="resistances">{bleedResistances}</span>
          <span className="armor">{bleedArmor}</span>
        </div>
        <div className="stat bleed">
          <span className="icon bleed" />
          <span className="stat-name">Frost</span>
          <span className="resistances">{bleedResistances}</span>
          <span className="armor">{bleedArmor}</span>
        </div>
        <div className="stat bleed">
          <span className="icon bleed" />
          <span className="stat-name">Curse</span>
          <span className="resistances">{bleedResistances}</span>
          <span className="armor">{bleedArmor}</span>
        </div>
      </div>
    </div>
  );
};
