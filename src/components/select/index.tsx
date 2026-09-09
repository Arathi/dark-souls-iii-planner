type ValueTypes = string | number;

type Props<V extends ValueTypes> = {
  value: V;
  options: Option<V>[];
  onChange: (value: V) => void;
};

type Option<V extends ValueTypes> = {
  value: V;
  label: string;
};

export function Select<V extends ValueTypes>({ value, options, onChange }: Props<V>) {
  const optionNodes: React.ReactNode[] = [];
  options.forEach((option) => {
    const { value, label } = option;
    const key = `${value}`;
    optionNodes.push(
      <option key={key} value={value}>
        {label}
      </option>,
    );
  });
  return (
    <select
      value={value}
      onChange={(event) => {
        const value = event.currentTarget.value;
        onChange(value as V);
      }}
    >
      {optionNodes}
    </select>
  );
}
