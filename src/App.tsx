//due date "07/31"
import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { holeState } from "./atom";

const animation = keyframes`
   from {
    transform: rotateX(-30deg) rotateY(0deg) 
   }
   to {
    transform: rotateX(-30deg) rotateY(360deg)
   }
`;

const Scene = styled.div`
  position: relative;
  top: 20vh;
  /* perspective: 700vh; */
  width: 20vh;
  height: 40vh;
`;

const Cube = styled.div`
  transform: rotateX(-30deg);
  /* animation: ${animation} linear 4s infinite; */
  transform-style: preserve-3d;
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
  /* transform: rotateX(-30deg); */
  transition: 1s background-color;
`;
const Front = styled(CubeFace)<{ hole: boolean }>`
  background-color: ${(props) => (props.hole ? "rgb(0, 58, 58)" : " #776748")};
  transform: rotateY(45deg) translateZ(10vh);
  box-shadow: 0 0 2px 1px white;
`;
const Right = styled(CubeFace)<{ hole: boolean }>`
  background-color: ${(props) => (props.hole ? "rgb(0, 128, 128)" : "#ffa600")};
  transform: rotateY(135deg) translateZ(10vh);
  box-shadow: 0 0 2px 1px white;
`;
const Back = styled(CubeFace)<{ hole: boolean }>`
  background-color: ${(props) => (props.hole ? "rgb(0, 58, 58)" : " #776748")};
  transform: rotateY(225deg) translateZ(10vh);
  box-shadow: 0 0 2px 1px white;
`;
const Left = styled(CubeFace)<{ hole: boolean }>`
  background-color: ${(props) => (props.hole ? "rgb(0, 128, 128)" : "#ffa600")};
  transform: rotateY(-45deg) translateZ(10vh);
  box-shadow: 0 0 2px 1px white;
`;
const Top = styled(CubeFace)<{ hole: boolean }>`
  /* background: rgb(245, 222, 179); */
  background-color: ${(props) =>
    props.hole ? "rgb(0, 171, 171)" : " rgb(245, 222, 179)"};
  transform: rotateX(90deg) rotateZ(45deg) translateZ(10vh);
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2px 1px white;
`;
const Bottom = styled(CubeFace)<{ hole: boolean }>`
  background-color: ${(props) =>
    props.hole ? "rgb(0, 171, 171)" : " rgb(245, 222, 179)"};
  transform: rotateX(-90deg) rotateZ(45deg) translateZ(30vh);
  height: 20vh;
  box-shadow: 0 0 2px 1px white;
`;
const Hole = styled.div<{ hole: boolean }>`
  background-color: white;
  height: 12vh;
  width: 12vh;
  border-radius: 50%;
  color: rgb(0, 128, 128);
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
          <Front hole={hole}></Front>
          <Right hole={hole}></Right>
          <Back hole={hole}></Back>
          <Left hole={hole}></Left>
          <Top hole={hole}>
            <Hole hole={hole} onClick={SizeUpHole}></Hole>
          </Top>
          <Bottom hole={hole}></Bottom>
        </CubeFace>
      </Cube>
    </Scene>
  );
}

export default App;
