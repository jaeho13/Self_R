import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

function Board() {
    return (
        <div>
            <StyledNavi>게시판 목록</StyledNavi>
            <StyledTable>글 번호</StyledTable>
            <StyledTable>글 제목</StyledTable>
            <StyledTable>작성자</StyledTable>
            <StyledTable>작성일</StyledTable>
            <StyledButton>글 작성하기</StyledButton>
        </div>
    );
}

const StyledTable = Styled.div`
    color: red;
    font-size: 30px;
`;

const StyledNavi = Styled.div`
    color: #DEB887;
    background-color: #FFFFE0;
    font-size: 3rem;
    text-align: center;
`;

const StyledButton = Styled.div`
    font-size: 20px;
    width: 110px;
    background-color: #FFFFE0;
    border: 2px solid black;
    margin-left: 90%;
    margin-Top: 20%;
`;

export default Board;