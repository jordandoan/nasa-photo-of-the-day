import React from "react";
import styled from "styled-components";
const Loading = () => {
    let StyledDiv = styled.div`
        color:white;
        width:1000px;
        text-align:center;
        display:flex;
        align-items:center;
        background-color:blue;
        margin:100px;
    `
    return (
        <StyledDiv>
            <h1>Hello this page is loading</h1>
        </StyledDiv>
    );
}

export default Loading