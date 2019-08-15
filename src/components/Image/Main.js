import React from "react";
import styled from "styled-components";
const ImageSection = (props) => {
    let Image = styled.img`
        width:500px;
    `
    return(
        <div className="image-section">
            <Image src={props.data.hdurl} alt={`NASA's Daily: ${props.data.date}`}/>
            <div>
                <h2>{props.data.title}</h2>
                <p>{props.data.explanation}</p>
            </div>
            I am the main image section!
        </div>
    );
}

export default ImageSection;