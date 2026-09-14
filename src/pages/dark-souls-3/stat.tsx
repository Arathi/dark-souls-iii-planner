import { useSnapshot } from "valtio";
import { characterStore, settingStore } from "@/store";
import dictionary from "@/i18n/attributes.json";
import "./stat.scss";

export const Stat = ({ stat, slug = stat }) => {
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

export const EquipWeight = ({ stat, slug }) => {
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
