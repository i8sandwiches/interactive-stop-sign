//due date "07/31"
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { GrowingHoleState } from "./atom";

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
  height: ${(props) => (props.isActive ? "10.8vw" : "7.2vw")};
  width: ${(props) => (props.isActive ? "18vw" : "12vw")};
  bottom: 0;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out,
    height 0.3s ease-in-out;
  &:hover {
    transform: ${(props) => (props.isActive ? "scale(1.2)" : "scale(0.9)")};
    //it will remove and then add animation
  }
`;

function App() {
  const [growingHole, setGrwoingHole] = useRecoilState(GrowingHoleState);
  const SizeUpHole = () => {
    setGrwoingHole(!growingHole);
  };
  return (
    <Container>
      <Hole isActive={growingHole} onClick={SizeUpHole}></Hole>
    </Container>
  );
}

export default App;
