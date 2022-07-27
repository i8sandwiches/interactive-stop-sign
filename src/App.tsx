//due date "07/31"
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { holeState } from "./atom";

const Scene = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  margin: 80px;
  perspective: 400px;
`;

const Cube = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-300px);
  transition: transform 1s;
`;

const CubeFace = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  line-height: 200px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
  transform-style: preserve-3d;
`;
const Front = styled(CubeFace)`
  background: hsla(0, 100%, 50%, 0.7);
  transform: rotateY(0deg) translateZ(100px);
`;
const Right = styled(CubeFace)`
  background: hsla(60, 100%, 50%, 0.7);
  transform: rotateY(90deg) translateZ(100px);
`;
const Back = styled(CubeFace)`
  background: hsla(120, 100%, 50%, 0.7);
  transform: rotateY(180deg) translateZ(100px);
`;
const Left = styled(CubeFace)`
  background: hsla(180, 100%, 50%, 0.7);
  transform: rotateY(-90deg) translateZ(100px);
`;
const Top = styled(CubeFace)`
  background: hsla(240, 100%, 50%, 0.7);
  transform: rotateX(90deg) translateZ(100px);
`;
const Bottom = styled(CubeFace)`
  background: hsla(300, 100%, 50%, 0.7);
  transform: rotateX(-90deg) translateZ(100px);
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
          <Front>Front</Front>
          <Right>Right</Right>
          <Back>Back</Back>
          <Left>Left</Left>
          <Top>Top</Top>
          <Bottom>Bottom</Bottom>
        </CubeFace>
      </Cube>
    </Scene>
  );
}

export default App;
