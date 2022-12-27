import styled, { keyframes } from "styled-components";

//백틱 안에는 CSS폼으로 ; 이고 따옴표 사용 div를 변경하여  CSS 부분을 사용하고 싶다면? as를 사용
const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  display: flex;
  background-color: tomato;
  height: 200px;
  width: 200px;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 3s linear infinite;
  span {
    font-size: 50px;
    &:hover {
      font-size: 40px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    // as를 사용하여 div => as로 변경 가능
    <Wrapper>
      <Box>
        <span>😍</span>
      </Box>
    </Wrapper>
  );
}

export default App;
