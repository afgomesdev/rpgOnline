import styled from "styled-components";
interface ContainerProps {
  left: number;
  top: number;
  sizeCharacter: number;
  sidePos: number;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  height: ${({ sizeCharacter }) => sizeCharacter}px;
  width: ${({ sizeCharacter }) => sizeCharacter}px;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  background-image: url("/assets/char.png");
  background-position: 0px ${({ sidePos }) => sidePos}px;
`;

export const NameBox = styled.div`
  background-color: #000;
  padding: 3px;
  border-radius: 5px;
  position: absolute;
  font-size: 10px;
  text-align: center;
  margin-top: -20px;
`;
