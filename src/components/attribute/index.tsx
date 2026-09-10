import { useMemo, useState } from "react";
import { useSnapshot } from "valtio";

import dictionary from "@/i18n/attributes.json";
import classes from "@/metadata/classes.json";
import { characterStore, settingStore } from "@/store";

import "./index.scss";

type Property =
  | "level"
  | "vigor"
  | "attunement"
  | "endurance"
  | "vitality"
  | "strength"
  | "dexterity"
  | "intelligence"
  | "faith"
  | "luck"
  | "hollow";

type Props = {
  property: Property;
  editable?: boolean;
};

export const Attribute: React.FC<Props> = ({ property, editable = false }) => {
  const character = useSnapshot(characterStore);
  const setting = useSnapshot(settingStore);
  const classMetadata = classes[character.class];
  const baseValue = classMetadata[property];
  const [value, setValue] = useState(baseValue);

  const attributeId = `attribute-${property}`;
  const entry = dictionary.find((it) => it.id == attributeId);

  const icon = `/images/attributes/${property}.avif`;
  const name = entry[setting.language];

  function decrement() {
    update(value - 1);
  }

  function increment() {
    update(value + 1);
  }

  const displayValue = useMemo(() => {
    if (property == "level") {
      const {
        vigor,
        attunement,
        endurance,
        vitality,
        strength,
        dexterity,
        intelligence,
        faith,
        luck,
      } = character;
      const level =
        baseValue +
        vigor +
        attunement +
        endurance +
        vitality +
        strength +
        dexterity +
        intelligence +
        faith +
        luck;
      return level;
    }
    return value;
  }, [character, value]);

  function update(value: number) {
    const min = baseValue;
    const max = 99;
    if (value < min) {
      value = min;
    }
    if (value > max) {
      value = max;
    }

    const actualValue = value - baseValue;
    setValue(value);
    characterStore[property] = actualValue;
  }

  let actions: React.ReactNode[] = [];
  if (editable) {
    actions = [
      <button
        key="decrement"
        className="decrement"
        onClick={decrement}
        disabled={!editable}
      >
        ▼
      </button>,
      <button
        key="increment"
        className="increment"
        onClick={increment}
        disabled={!editable}
      >
        ▲
      </button>,
    ];
  } else {
    actions = [
      <div key="decrement" className="decrement" />,
      <div key="increment" className="increment" />,
    ];
  }

  // △▽
  return (
    <div className="attribute">
      <img className="icon" alt={`attribute-${property}`} src={icon} />
      <span className="property">{name}</span>
      <span className="base-value">{baseValue}</span>
      <span>→</span>
      <input
        className="value"
        type="text"
        value={displayValue}
        disabled={!editable}
        onChange={(event) => {
          const strValue = event.currentTarget.value;
          const intValue = Number.parseInt(strValue);
          if (Number.isNaN(intValue)) return;
          setValue(intValue);
        }}
        onBlur={(event) => {
          update(value);
        }}
      />
      {actions}
    </div>
  );
};
