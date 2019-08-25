import React, {useContext} from "react";
import styled from "styled-components";
import ImageContext from "../../ImageContext";

const ImageSection = (props) => {
    let imageData = useContext(ImageContext);
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
    let Video = styled.iframe`
    width: 500px;
    margin: 20px 10px;
`
    let chosen = ""
    // if (imageData.current) {
    //     chosen = imageData.current;
    // } else {
    //     chosen = imageData.original;
    // }
    return (
        <ImageMain>
            <Image src={props.data.url} alt={`NASA's Daily: ${props.data.explanation}`}/>
            <Info>
                <h2>{props.data.title}</h2>
                <p>{props.data.explanation}</p>
            </Info>
        </ImageMain>
    );
}

export default ImageSection;