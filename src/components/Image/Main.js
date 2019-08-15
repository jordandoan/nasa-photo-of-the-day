import React from "react";
import styled from "styled-components";
const ImageSection = (props) => {
    let ImageMain = styled.div`
    background-color:cornflowerblue;
    width:700px;
    `
    let Image = styled.img`
        width: 500px;
        margin: 20px 10px;
    `
    let Info = styled.div`
        margin:auto;
        width:90%;
        padding:30px;
        margin:10px auto;
        border: 2px solid blue;
        background-color:white;
        opacity:.5;
        text-align:left;
        font-family: 'Montserrat', sans-serif;
    `    
    return(
        <ImageMain>
            <Image src={props.data.hdurl} alt={`NASA's Daily: ${props.data.date}`}/>
            <Info>
                <h2>{props.data.title}</h2>
                <p>{props.data.explanation}</p>
            </Info>
        </ImageMain>
    );
}

export default ImageSection;