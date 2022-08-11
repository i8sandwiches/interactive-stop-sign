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
  top: 10vh;
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
  /* background-color: ${(props) =>
    props.hole ? "rgb(0, 58, 58)" : " #776748"}; */
  background-color: #776748;
  transform: rotateY(45deg) translateZ(10vh);
  overflow: hidden;
  box-shadow: 0 0 0.1vh 0.1vh white;
  &::before {
    left: 0;
    top: 0;
    position: absolute;
    content: "";
    width: 20vh;
    height: ${(props) => (props.hole ? "100%" : "0vh")};
    background-color: rgb(0, 58, 58);
    transform-origin: top center;
    transform: ${(props) => (props.hole ? "scaleY(1.3)" : "scale(1)")};
    /* border-radius: 0% 0% 10vh 10vh; */
    transition: 1s height, 1s background-color, 1s transform;
    transition-delay: 0.6s;
  }
`;
const Right = styled(CubeFace)<{ hole: boolean }>`
  /* background-color: ${(props) =>
    props.hole ? "rgb(0, 128, 128)" : "#ffa600"}; */
  background-color: #ffa600;
  transform: rotateY(135deg) translateZ(10vh);
  overflow: hidden;
  box-shadow: 0 0 0.1vh 0.1vh white;
  &::before {
    left: 0;
    top: 0;
    position: absolute;
    content: "";
    width: 20vh;
    height: ${(props) => (props.hole ? "100%" : "0vh")};
    background-color: rgb(0, 128, 128);
    transform-origin: top center;
    transform: ${(props) => (props.hole ? "scaleY(1.3)" : "scale(1)")};
    /* border-radius: 0% 0% 10vh 10vh; */
    transition: 1s height, 1s background-color, 1s transform;
    transition-delay: 0.6s;
  }
`;
const Back = styled(CubeFace)<{ hole: boolean }>`
  /* background-color: ${(props) =>
    props.hole ? "rgb(0, 58, 58)" : " #776748"}; */
  background-color: #776748;
  transform: rotateY(225deg) translateZ(10vh);
  overflow: hidden;
  box-shadow: 0 0 0.1vh 0.1vh white;
  &::before {
    left: 0;
    top: 0;
    position: absolute;
    content: "";
    width: 20vh;
    height: ${(props) => (props.hole ? "100%" : "0vh")};
    background-color: rgb(0, 58, 58);
    transform-origin: top center;
    transform: ${(props) => (props.hole ? "scaleY(1.3)" : "scale(1)")};
    /* border-radius: 0% 0% 10vh 10vh; */
    transition: 1s height, 1s background-color, 1s transform;
    transition-delay: 0.6s;
  }
`;
const Left = styled(CubeFace)<{ hole: boolean }>`
  /* background-color: ${(props) =>
    props.hole ? "rgb(0, 128, 128)" : "#ffa600"}; */
  background-color: #ffa600;
  transform: rotateY(-45deg) translateZ(10vh);
  overflow: hidden;
  box-shadow: 0 0 0.1vh 0.1vh white;
  &::before {
    left: 0;
    top: 0;
    position: absolute;
    content: "";
    width: 20vh;
    height: ${(props) => (props.hole ? "100%" : "0vh")};
    background-color: rgb(0, 128, 128);
    transform-origin: top center;
    transform: ${(props) => (props.hole ? "scaleY(1.3)" : "scale(1)")};
    /* border-radius: 0% 0% 10vh 10vh; */
    transition: 1s height, 1s background-color, 1s transform;
    transition-delay: 0.6s;
  }
`;
const Top = styled(CubeFace)<{ hole: boolean }>`
  /* background-color: ${(props) =>
    props.hole ? "rgb(0, 171, 171)" : " rgb(245, 222, 179)"}; */
  background-color: rgb(245, 222, 179);
  transform: rotateX(90deg) rotateZ(45deg) translateZ(10vh);
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); */
  overflow: hidden;
  box-shadow: 0 0 0.1vh 0.1vh white;
  &::before {
    position: absolute;
    z-index: 1;
    border-radius: 50%;
    content: "";
    width: ${(props) => (props.hole ? "150%" : "60%")};
    height: ${(props) => (props.hole ? "150%" : "60%")};
    background-color: rgb(0, 171, 171);
    transition: 1s width, 1s height, 1s background-color, 1s transform;
    transition-delay: ${(props) => (props.hole ? "0s" : "1.3s")};
  }
`;
const BottomCircle = styled.div``;
const Frame = styled.div<{ hole: boolean }>`
  z-index: 2;
  position: absolute;
  width: 305%;
  height: 305%;
  border-radius: 50%;
  border: ${(props) => (props.hole ? "0vh" : "25vh")} solid black;
  transition: 1s border linear;
  transition-delay: ${(props) => (props.hole ? "1.3s" : "0s")};
`;
const Bottom = styled(CubeFace)<{ hole: boolean }>`
  background-color: rgb(245, 222, 179);
  background-color: rgb(0, 58, 58);
  transform: rotateX(-90deg) rotateZ(45deg) translateZ(30vh);
  height: 20vh;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0.1vh 0.1vh white;
  ${BottomCircle} {
    z-index: 1;
    position: absolute;
    border-radius: 50%;
    content: "";
    width: 60vh;
    height: 60vh;
    background-color: rgb(0, 128, 128);
    overflow: hidden;
    ::before {
      /* box-shadow: inset 0 0 0.1vh 0.1vh black; */
      content: "";
      transform: translate(-50%, -20%);
      width: 30vh;
      height: 26vh;
      position: absolute;
      background-color: rgb(0, 58, 58);
      clip-path: polygon(0% 0%, 100% 0%, 83% 100%, 17% 100%);
    }
  }
`;

const Hole = styled.div<{ hole: boolean }>`
  z-index: 2;
  background-color: white;
  height: 12vh;
  width: 12vh;
  border-radius: 50%;
  color: rgb(0, 128, 128);
  position: absolute;
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
          <Bottom hole={hole}>
            <Frame hole={hole}></Frame>
            <BottomCircle></BottomCircle>
          </Bottom>
        </CubeFace>
      </Cube>
    </Scene>
  );
}

export default App;
