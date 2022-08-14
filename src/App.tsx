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
const Blob = styled.div`
  width: 3vh;
  height: 6vh;
  background: rgb(0, 128, 128);
  border-radius: 50%;
  position: absolute;
  bottom: 0vh;
  &:nth-of-type(1) {
    left: -1.5vh;
    height: 8vh;
  }
  &:nth-of-type(2) {
    left: 0vh;
    width: 8vh;
    height: 4vh;
  }
  &:nth-of-type(3) {
    left: 6vh;
    height: 4vh;
    width: 6vh;
  }
  &:nth-of-type(4) {
    left: 11vh;
    width: 3vh;
    height: 10vh;
  }
  &:nth-of-type(5) {
    left: 12vh;
    width: 9vh;
  }
  &:nth-of-type(6) {
    background-color: pink;
    left: 18.5vh;
    width: 3vh;
    height: 8vh;
  }
`;
const BlobsContainer = styled.div<{ hole: boolean }>`
  height: ${(props) => (props.hole ? "100%" : "0vh")};
  filter: url("#goo");
  left: 0;
  top: 0;
  position: absolute;
  content: "";
  width: 20vh;
  transform-origin: top center;
  transform: ${(props) => (props.hole ? "scaleY(1.1)" : "scale(1)")};
  /* border-radius: 0% 0% 10vh 10vh; */
  transition: 2s height ease, 1s background-color, 1s transform;
  transition-delay: 0.6s;
  ${Blob} {
    transform: ${(props) =>
      props.hole
        ? "scale(1, 2) translate(0, -0vh)"
        : "scale(1,1) translate(0, -10vh)"};
    transition: 0.2s transform;
    transition-delay: 0.6s;
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
  background-color: #776748;
  transform: rotateY(45deg) translateZ(10vh);
  overflow: hidden;
  box-shadow: 0.08vh -0.08vh white, -0.08vh -0.08vh white, inset 0 -0.08vh white;
  ${BlobsContainer} {
    height: ${(props) => (props.hole ? "100%" : "0vh")};
    background-color: rgb(0, 58, 58);
  }
  ${Blob} {
    background-color: rgb(0, 58, 58);
  }
`;
const Right = styled(CubeFace)<{ hole: boolean }>`
  background-color: #ffa600;
  transform: rotateY(135deg) translateZ(10vh);
  overflow: hidden;
  box-shadow: 0.08vh -0.08vh white, -0.08vh -0.08vh white, inset 0 -0.08vh white;
  ${BlobsContainer} {
    background-color: rgb(0, 128, 128);
  }
  ${Blob} {
    background-color: rgb(0, 128, 128);
  }
`;
const Back = styled(CubeFace)<{ hole: boolean }>`
  background-color: #776748;
  transform: rotateY(225deg) translateZ(10vh);
  overflow: hidden;
  box-shadow: 0.08vh -0.08vh white, -0.08vh -0.08vh white, inset 0 -0.08vh white;
  ${BlobsContainer} {
    background-color: rgb(0, 58, 58);
  }
  ${Blob} {
    background-color: rgb(0, 58, 58);
  }
`;
const Left = styled(CubeFace)<{ hole: boolean }>`
  background-color: #ffa600;
  transform: rotateY(-45deg) translateZ(10vh);
  overflow: hidden;
  box-shadow: 0.08vh -0.08vh white, -0.08vh -0.08vh white, inset 0 -0.08vh white;
  ${BlobsContainer} {
    background-color: rgb(0, 128, 128);
  }
  ${Blob} {
    background-color: rgb(0, 128, 128);
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
  &::before {
    position: absolute;
    z-index: 1;
    border-radius: 50%;
    content: "";
    width: ${(props) => (props.hole ? "150%" : "60%")};
    height: ${(props) => (props.hole ? "150%" : "60%")};
    background-color: rgb(0, 171, 171);
    transition: 1s width, 1s height, 1s background-color, 1s transform;
    transition-delay: ${(props) => (props.hole ? "0s" : "2.3s")};
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
      height: 25.6vh;
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
    <>
      <Scene>
        <Cube>
          <CubeFace>
            <Front hole={hole}>
              <BlobsContainer hole={hole}>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
              </BlobsContainer>
            </Front>
            <Right hole={hole}>
              <BlobsContainer hole={hole}>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
              </BlobsContainer>
            </Right>
            <Back hole={hole}>
              <BlobsContainer hole={hole}>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
              </BlobsContainer>
            </Back>
            <Left hole={hole}>
              <BlobsContainer hole={hole}>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
              </BlobsContainer>
            </Left>
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
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -2"
              result="goo"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default App;
