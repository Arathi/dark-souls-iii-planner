import "./ring.scss";

type Position = 1 | 2 | 3 | 4;

type Props = {
  position: Position;
};

export const Ring: React.FC<Props> = ({ position }) => {
  const index = `${position}`;
  const texture = `/images/rings/${index}.webp`;

  return (
    <div className="ring">
      <div className="textures">
        <div className="background">
          <img />
        </div>
        <div className="texture">
          <img src={texture} />
        </div>
      </div>
    </div>
  );
};
