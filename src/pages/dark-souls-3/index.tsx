import { useMemo, useState } from "react";
import { useSnapshot } from "valtio";
import { characterStore, settingStore } from "@/store";
import dictionary from "@/i18n/attributes.json";

import "./index.scss";

const Attribute = ({ attribute }) => {
  const character = useSnapshot(characterStore);
  const setting = useSnapshot(settingStore);
  const source = character.baseAttributes[attribute];

  const [target, setTarget] = useState(source);

  const icon = `/images/attributes/${attribute}.avif`;
  const entry = dictionary.find((it) => it.id == `attribute-${attribute}`);
  const label = entry[setting.language];

  let decrementDisabled = false;
  let incrementDisabled = false;

  function decrement() {
    update(target - 1);
  }

  function increment() {
    update(target + 1);
  }

  function update(input: number) {
    const min = source;
    const max = 99;
    let target = input;
    if (target < min) {
      target = min;
    }
    if (target > max) {
      target = max;
    }
    const value = target - min;
    setTarget(target);
    characterStore[attribute] = value;
  }

  return (
    <div className="attribute">
      <div className="label">
        <img alt={`attribute-${attribute}`} src={icon} width={24} height={24} />
        <span>{label}</span>
      </div>
      <div className="source">
        <span>{source}</span>
        <span>⇒</span>
      </div>
      <div className="target">
        <button
          type="button"
          className="adjust decrement"
          onClick={decrement}
          disabled={decrementDisabled}
        >
          &lt;
        </button>
        <input type="text" value={target} />
        <button
          type="button"
          className="adjust increment"
          onClick={increment}
          disabled={incrementDisabled}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

const ReadonlyAttribute = ({ attribute, targetOnly = false, value }) => {
  const character = useSnapshot(characterStore);
  const setting = useSnapshot(settingStore);
  const source = character.baseAttributes[attribute];

  const icon = `/images/attributes/${attribute}.avif`;
  const entry = dictionary.find((it) => it.id == `attribute-${attribute}`);
  const label = entry[setting.language];

  const sourceNodes = !targetOnly ? (
    <div className="source">
      <span>{source}</span>
      <span>⇒</span>
    </div>
  ) : null;

  return (
    <div className="attribute">
      <div className="label">
        <img alt={`attribute-${attribute}`} src={icon} width={24} height={24} />
        <span>{label}</span>
      </div>
      {sourceNodes}
      <div className="target">
        <span style={{ width: 24 }} />
        <span>{value}</span>
        <span style={{ width: 24 }} />
      </div>
    </div>
  );
};

const ComputedAttribute = ({
  attribute,
  slug = attribute,
  iconFileName = slug,
  value,
}) => {
  const setting = useSnapshot(settingStore);
  const icon = `/images/attributes/${iconFileName}.avif`;
  const entry = dictionary.find((it) => it.id == `attribute-${slug}`);
  let label = entry[setting.language];

  return (
    <div className="attribute">
      <div className="label">
        <img
          alt={`computed-attribute-${slug}`}
          src={icon}
          width={24}
          height={24}
        />
        <span>{label}</span>
      </div>
      <div />
      <div className="target">
        <span style={{ width: 24 }} />
        <span>{value}</span>
        <span style={{ width: 24 }} />
      </div>
    </div>
  );
};

const Stat = ({ stat, slug = stat }) => {
  const character = useSnapshot(characterStore);
  const setting = useSnapshot(settingStore);

  const icon = `/images/stats/${slug}.avif`;
  const entry = dictionary.find((it) => it.id == `stat-${slug}`);
  const label = entry[setting.language];
  const value = character.stats[stat];

  return (
    <div className="stat">
      <div className="label">
        <img src={icon} alt={`stat-${stat}`} width={24} height={24} />
        <span>{label}</span>
      </div>
      <div className="value">
        <span>{value}</span>
      </div>
    </div>
  );
};

const EquipWeight = ({ stat, slug }) => {
  const character = useSnapshot(characterStore);
  const setting = useSnapshot(settingStore);
  const icon = `/images/stats/${slug}.avif`;
  const entry = dictionary.find((it) => it.id == `stat-${slug}`);
  const label = entry[setting.language];

  const weight: number = character.stats.equipWeight;
  const load: number = character.stats.equipLoad;
  const percent = (weight * 100.0) / load;

  return (
    <div className="stat">
      <div className="label">
        <img src={icon} alt={`stat-${stat}`} width={24} height={24} />
        <span>{label}</span>
      </div>
      <div className="value">
        <span>({percent.toFixed(2)}%)</span>
        <span>{weight.toFixed(2)}</span>
        <span>/</span>
        <span>{load.toFixed(2)}</span>
      </div>
    </div>
  );
};

const Page = () => {
  const character = useSnapshot(characterStore);
  const setting = useSnapshot(settingStore);

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
        <span className="title">Weapons (Left Hand)</span>
        <span className="title">Armors</span>
        <span className="title">Rings</span>
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
