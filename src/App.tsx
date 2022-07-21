import styled from "styled-components";
const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 30vw;
  width: 50vw;
`;
const Hole = styled.div`
  background-color: ${(props) => props.theme.holeColor};
  height: 7.2vw;
  width: 12vw;
  bottom: 0;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;

function App() {
  const BiggerHole = () => {
    //when click HOLE, its bigger than when hover that
  };
  return (
    <Container>
      <Hole onClick={BiggerHole}></Hole>
    </Container>
  );
}

export default App;
