import styled from "styled-components";

//백틱 안에는 CSS폼으로 ; 이고 따옴표 사용 div를 변경하여  CSS 부분을 사용하고 싶다면? as를 사용
const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true, minLength: "10px" })`
  background-color: tomato;
`;

function App() {
  return (
    // as를 사용하여 div => as로 변경 가능
    <Father as="header">
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
