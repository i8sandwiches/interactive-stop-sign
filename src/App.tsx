//due date "07/31"
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { GrowingHoleState } from "./atom";

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
  &::before {
    content: "";
    position: absolute;
    background-color: #ffa600;
    width: 10vw;
    height: 50vh;
    top: 50%;
    left: 0;
  }
  &::after {
    content: "";
    position: absolute;
    background-color: #776748;
    width: 10vw;
    height: 50vh;
    top: 50%;
    right: 0;
  }
`;
const Hole = styled.div<{ isActive: boolean }>`
  background-color: ${(props) =>
    props.isActive ? "pink" : props.theme.holeColor};
  height: ${(props) => (props.isActive ? "5vw" : "5vw")};
  width: ${(props) => (props.isActive ? "10vw" : "10vw")};
  bottom: 0;
  border-radius: 50%;
  /* transition: transform 0.3s ease-in-out, width 0.3s ease-in-out,
    height 0.3s ease-in-out; */
  &:hover {
  }
`;

function App() {
  const [growingHole, setGrwoingHole] = useRecoilState(GrowingHoleState);
  const SizeUpHole = () => {
    setGrwoingHole(!growingHole);
  };
  return (
    <Container>
      {/* <RightSidePillar></RightSidePillar>
      <LeftSidePillar></LeftSidePillar> */}
      <Rhombus>
        <Hole isActive={growingHole} onClick={SizeUpHole}></Hole>
      </Rhombus>
    </Container>
  );
}

export default App;
