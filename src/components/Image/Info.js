import React from "react";

const ImageInfo = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
        </div>
    );
}

export default ImageInfo;