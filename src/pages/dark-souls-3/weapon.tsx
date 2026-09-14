import "./weapon.scss";

type Hand = "left" | "right";
type Position = 1 | 2 | 3;

type Props = {
  hand: Hand;
  position: Position;
};

export const Weapon: React.FC<Props> = ({ hand, position }) => {
  const infusion = "混沌";
  const name = "流放者大刀";
  const upgrade = "+10";

  const Hand = hand == "left" ? "Left" : "Right";
  const key = `weapon${Hand}${position}`;
  const index = 54;

  let backgroundFileName = "weapon";
  if (hand == "left") {
    backgroundFileName = "shield";
  }
  const background = `/images/ui/${backgroundFileName}.png`;
  const texture = `/images/weapons/${index}.webp`;

  return (
    <div className="weapon">
      <div className="textures">
        <div className="background">
          <img alt={`background-${hand}`} src={background} />
        </div>
        <div className="texture">
          <img alt={`weapon-${index}`} src={texture} />
        </div>
        <div className="infusion">
          <img />
        </div>
      </div>
    </div>
  );
};
