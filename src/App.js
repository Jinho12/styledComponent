import styled from "styled-components";

//백틱 안에는 CSS폼으로 ; 이고 따옴표 사용
const Father = styled.div`
  display: flex;
`;
// 컴포넌트의 props를 가져와 사용할 수 있음
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
// Box에 있는 것을 가져와서 다음과 같이 사용할 수 있음
const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="grey" />
    </Father>
  );
}

export default App;
