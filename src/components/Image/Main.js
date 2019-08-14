import React from "react";

const ImageSection = (props) => {
    return(
        <div className="image-section">
            <img src={props.data.url} alt={`NASA's Daily: ${props.data.date}`}/>
            <p>{props.data.explanation}</p>
            I am the main image section!
        </div>
    );
}

export default ImageSection;