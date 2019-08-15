import React from "react";
import ImageInfo from "./Info";

const ImageSection = (props) => {
    return(
        <div className="image-section">
            <img src={props.data.hdurl} alt={`NASA's Daily: ${props.data.date}`}/>
            <ImageInfo title={props.data.title} explanation={props.data.explanation}/>

            I am the main image section!
        </div>
    );
}

export default ImageSection;