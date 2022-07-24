//due date "07/31"
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { GrowingHoleState } from "./atom";

const Rhombus = styled.div`
  width: 23vw;
  height: 11vw;
  background-color: wheat;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftSidePillar = styled.div`
  position: absolute;
  top: 29.63vh;
  left: 26.7vh;
  width: 11.5vw;
  height: 50vh;
  background-color: #ffa600;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
`;
const RightSidePillar = styled.div`
  position: absolute;
  top: 29.63vh;
  right: 10vh;
  right: 26.7vh;
  width: 11.5vw;
  height: 50vh;
  background-color: #776748;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
`;
const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 30vw;
  width: 50vw;
`;
const Hole = styled.div<{ isActive: boolean }>`
  background-color: ${(props) =>
    props.isActive ? "pink" : props.theme.holeColor};
  height: ${(props) => (props.isActive ? "7.2vw" : "7.2vw")};
  width: ${(props) => (props.isActive ? "12vw" : "12vw")};
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
      <RightSidePillar></RightSidePillar>
      <LeftSidePillar></LeftSidePillar>
      <Rhombus>
        <Hole isActive={growingHole} onClick={SizeUpHole}></Hole>
      </Rhombus>
    </Container>
  );
}

export default App;
