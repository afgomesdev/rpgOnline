import { CharacterSides } from "../../types/CharacterSides";
import * as C from "./styles";
interface CharacterProps {
  x: number;
  y: number;
  side: CharacterSides;
  name: string;
}
export const Character = ({ x, y, side, name }: CharacterProps) => {
  const sizeCharacter = 30;
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90,
  };
  return (
    <C.Container
      left={x * sizeCharacter}
      top={y * sizeCharacter}
      sizeCharacter={sizeCharacter}
      sidePos={sides[side] ?? 0}
    >
      <C.NameBox>{name}</C.NameBox>
    </C.Container>
  );
};
