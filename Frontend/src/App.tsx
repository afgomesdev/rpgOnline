import { useEffect } from "react";
import * as C from "./styles";
import { Character } from "./components/Character";
import { useCharacter } from "./hooks/useCharacter";
import { io } from "socket.io-client";
import { Move } from "./types/Move";
const socket = io("http://192.168.15.9:8080");

const App = () => {
  const char = useCharacter("Andre");

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    socket.on("move", (data: string) => {
      const dataParsed: Move = JSON.parse(data);
      if (socket.id !== dataParsed.id) char.moves[dataParsed.type]();
    });

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "KeyA":
      case "ArrowLeft":
        socket.emit(
          `move`,
          JSON.stringify({ id: socket.id, type: "moveLeft" })
        );
        char.moves.moveLeft();
        break;
      case "KeyW":
      case "ArrowUp":
        socket.emit(`move`, JSON.stringify({ id: socket.id, type: "moveUp" }));
        char.moves.moveUp();
        break;
      case "KeyD":
      case "ArrowRight":
        socket.emit(
          `move`,
          JSON.stringify({ id: socket.id, type: "moveRight" })
        );
        char.moves.moveRight();
        break;
      case "KeyS":
      case "ArrowDown":
        socket.emit(
          `move`,
          JSON.stringify({ id: socket.id, type: "moveDown" })
        );
        char.moves.moveDown();
        break;
    }
  };

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.name} />
      </C.Map>
    </C.Container>
  );
};

export default App;
