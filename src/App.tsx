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
  border-collapse: collapse;
  transition: 1s background-color;
`;
const Front = styled(CubeFace)<{ hole: boolean }>`
  /* background-color: ${(props) =>
    props.hole ? "rgb(0, 58, 58)" : " #776748"}; */
  background-color: #776748;
  transform: rotateY(45deg) translateZ(10vh);
  box-shadow: 0 0 2px 1px white;
  overflow: hidden;
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
  box-shadow: 0 0 2px 1px white;
  overflow: hidden;
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
  box-shadow: 0 0 2px 1px white;
  overflow: hidden;
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
  box-shadow: 0 0 2px 1px white;
  overflow: hidden;
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
  box-shadow: 0 0 2px 1px white;
  /* clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); */
  overflow: hidden;
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
const Bottom = styled(CubeFace)<{ hole: boolean }>`
  /* background-color: ${(props) =>
    props.hole ? "rgb(0, 171, 171)" : " rgb(245, 222, 179)"}; */
  background-color: rgb(245, 222, 179);
  transform: rotateX(-90deg) rotateZ(45deg) translateZ(30vh);
  height: 20vh;
  box-shadow: 0 0 2px 1px white;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    position: absolute;
    z-index: 1;
    border-radius: 50%;
    content: "";
    width: ${(props) => (props.hole ? "300%" : "100%")};
    height: ${(props) => (props.hole ? "300%" : "100%")};
    background-color: rgb(0, 128, 128);
    transition: 1s width, 1s height, 1s background-color, 1s transform;
    transition-delay: ${(props) => (props.hole ? "1.3s" : "0s")};
    /* transition-timing-function: ${(props) =>
      props.hole
        ? "cubic-bezier(0,-0.01,1,-0.1)"
        : "cubic-bezier(.34,1.19,.39,.95)"}; */
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
          <Bottom hole={hole}></Bottom>
        </CubeFace>
      </Cube>
    </Scene>
  );
}

export default App;
