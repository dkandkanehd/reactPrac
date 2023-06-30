import styled from "styled-components";

function App() {

  const Father = styled.div`
    display: flex;
  `;

  const Box = styled.div`
    height : 200px;
    width : 200px;
    background-color: tomato;
  `;

  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default App;
