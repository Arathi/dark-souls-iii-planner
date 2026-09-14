import "./armor.scss";

type Position = "head" | "body" | "hands" | "legs";

type Props = {
  position: Position;
};

export const Armor: React.FC<Props> = ({ position }) => {
  let index = 0;
  switch (position) {
    case "head":
      index = 4;
      break;
    case "body":
      index = 5;
      break;
    case "hands":
      index = 6;
      break;
    case "legs":
      index = 7;
      break;
  }
  const texture = `/images/armors/${index}.webp`;
  return (
    <div className="armor">
      <div className="textures">
        <div className="background">
          <img />
        </div>
        <div className="texture">
          <img alt={`armor-${position}`} src={texture} />
        </div>
      </div>
    </div>
  );
};
