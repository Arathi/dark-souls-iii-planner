export const Armor = () => {
  let name = "Armor Name";
  let icon = ``;

  return (
    <div>
      <img alt={name} src={icon} width={512} height={512} />
      <span>{name}</span>
    </div>
  );
};
