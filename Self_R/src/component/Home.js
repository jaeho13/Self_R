import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <StyledHome>JBTI</StyledHome>
        <button><Link to="/second">이동하기</Link></button>
      </div>
    );
}

export default Home;

const StyledHome = Styled.header`
  font-size: 80px;
  text-align: center;
  padding: 5px 0px 0px 0px;  
`;
