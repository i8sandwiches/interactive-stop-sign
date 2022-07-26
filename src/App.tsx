//due date "07/31"
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { holeState } from "./atom";

const Rhombus = styled.div`
  width: 20vw;
  height: 10vw;
  background-color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0 50%, 50% 100%, 100% 50%, 50% 0);
  z-index: 3;
`;

const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 4;
  &::before {
    content: "";
    position: absolute;
    background-color: #ffa600;
    width: 10vw;
    height: 30vh;
    top: 50%;
    left: 0;
    transform-origin: left;
    transform: skew(0turn, 26.5deg);
    //matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
  }
  &::after {
    content: "";
    position: absolute;
    background-color: #776748;
    width: 10vw;
    height: 30vh;
    top: 50%;
    right: 0vw;
    transform-origin: right;
    transform: skew(0turn, -26.5deg);
  }
`;
const Hole = styled.div<{ hole: boolean }>`
  background-color: ${(props) =>
    props.hole ? "white" : props.theme.holeColor};
  height: 5vw;
  width: 10vw;
  bottom: 0;
  border-radius: 50%;
  /* transition: transform 0.3s ease-in-out, width 0.3s ease-in-out,
    height 0.3s ease-in-out; */
  &:hover {
  }
`;

function App() {
  const [hole, setHole] = useRecoilState(holeState);
  const SizeUpHole = () => {
    setHole(!hole);
  };
  return (
    <Container>
      <Rhombus>
        <Hole hole={hole} onClick={SizeUpHole}></Hole>
      </Rhombus>
    </Container>
  );
}

export default App;
