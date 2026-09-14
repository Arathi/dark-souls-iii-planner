import { useState } from "react";
import { useSnapshot } from "valtio";
import { characterStore, settingStore } from "@/store";
import dictionary from "@/i18n/attributes.json";
import "./attribute.scss";

export const Attribute = ({ attribute }) => {
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
        <input
          type="text"
          value={target}
          onChange={(event) => {
            const value = event.currentTarget.value;
            setTarget(value);
          }}
          onBlur={(event) => {
            update(target);
          }}
        />
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

export const ReadonlyAttribute = ({ attribute, targetOnly = false, value }) => {
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

export const ComputedAttribute = ({
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
