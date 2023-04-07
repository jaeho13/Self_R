import React from "react";
import Styled from "styled-components";

function Home() {
    return (
      <form>
        <StyledHome>JBTI</StyledHome>
        <StyledButton type="submit">시작하기</StyledButton>
      </form>
    );
}

export default Home;

const StyledHome = Styled.header`
  font-size: 80px;
  text-align: center;
  padding: 5px 0px 0px 0px;  
`;

const StyledButton = Styled.button`
  font-size: 30px;
  text-align: center;
  padding-top: 500px;
`;

//시작하기 버튼이 왜 찹살떡마냥 늘어나는지 궁금하다.
//패딩이란 위에와 그만큼 거리를 두는 것 아닌가??
//text-align: center; 하면 가운데 정렬이 아닌가??
