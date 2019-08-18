import React, {useContext} from "react";
import styled from "styled-components";
import ImageContext from "../../ImageContext";

const ImageSection = () => {
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
    return (
        <ImageMain>
            <Image src={imageData.current ? imageData.current : imageData.original} alt={`NASA's Daily: ${imageData.data.explanation}`}/>
            <Info>
                <h2>{imageData.data.title}</h2>
                <p>{imageData.data.explanation}</p>
            </Info>
        </ImageMain>
    );
}

export default ImageSection;