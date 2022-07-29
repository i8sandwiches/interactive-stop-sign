//due date "07/31"
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { holeState } from "./atom";

const Scene = styled.div`
  position: relative;
  top: 20vh;
  /* perspective: 700vh; */
  width: 20vh;
  height: 40vh;
`;

const Cube = styled.div`
  /* transform-style: preserve-3d; "if this on it looks like more 3d not 2.5d"*/
  transform: translateZ(-30vh);
`;

const CubeFace = styled.div`
  position: absolute;
  width: 20vh;
  height: 40vh;
  line-height: 20vh;
  font-size: 4vh;
  font-weight: bold;
  color: white;
  text-align: center;
  transform-style: preserve-3d;
  transform: rotateX(-30deg);
`;
const Front = styled(CubeFace)`
  background: #776748;
  transform: rotateY(45deg) translateZ(10vh);
`;
const Right = styled(CubeFace)`
  background: #ffa600;
  transform: rotateY(135deg) translateZ(10vh);
`;
const Back = styled(CubeFace)`
  background: #776748;
  transform: rotateY(225deg) translateZ(10vh);
`;
const Left = styled(CubeFace)`
  background: #ffa600;
  transform: rotateY(-45deg) translateZ(10vh);
`;
const Top = styled(CubeFace)`
  background: wheat;
  transform: rotateX(90deg) rotateZ(45deg) translateZ(10vh);
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Bottom = styled(CubeFace)`
  background: wheat;
  transform: rotateX(-90deg) rotateZ(45deg) translateZ(30vh);
  height: 20vh;
`;
const Hole = styled.div<{ hole: boolean }>`
  background-color: ${(props) =>
    props.hole ? "white" : props.theme.holeColor};
  height: 12vh;
  width: 12vh;
  border-radius: 50%;

  &:hover {
  }
`;

function App() {
  const [hole, setHole] = useRecoilState(holeState);
  const SizeUpHole = () => {
    setHole(!hole);
  };

  return (
    <Scene>
      <Cube>
        <CubeFace>
          <Front></Front>
          <Right></Right>
          <Back></Back>
          <Left></Left>
          <Top>
            <Hole hole={hole} onClick={SizeUpHole}></Hole>
          </Top>
          <Bottom></Bottom>
        </CubeFace>
      </Cube>
    </Scene>
  );
}

export default App;
