import React from "react";
import Styled from "styled-components";

function Main() {
    return (
        <StyledTop>메인 화면입니다.</StyledTop>
        
    );
};

export default Main;

const StyledTop = Styled.h1`
    text-align: center;
    font-size: 2rem;
`