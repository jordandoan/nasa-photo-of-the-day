import React, {useEffect, useContext, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import ImageContext from "../../ImageContext";
const ImageSection = () => {
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
    let imageData = useContext(ImageContext);
    let [data,setData] = useState(imageData.mainData)
    useEffect(() => {
        let changeState = () => {
            setData(imageData.mainData);
        }
        changeState();
    }, [imageData.mainData])
    console.log(imageData);
    return(
        <ImageMain>
            <Image src={imageData.img ? imageData.img : imageData.original} alt={`NASA's Daily: ${imageData.mainData.explanation}`}/>
            <Info>
                <h2>{imageData.mainData.title}</h2>
                <p>{data.explanation}</p>
                <button onClick={()=>{imageData.mainData.explanation = "DEEZ NUTS!";imageData.setData(imageData.mainData)} }>Click me to change the state of the caption!</button>
            </Info>
        </ImageMain>
    );
}

export default ImageSection;