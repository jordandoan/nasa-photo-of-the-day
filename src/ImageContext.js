import React, {useState} from 'react';
let useImage = () => {
    let [image,setImage] = useState();
    return {image,setImage}
}
const ImageContext = React.createContext(useImage);
export const ImageProvider = ImageContext.Provider
export const ImageConsumer = ImageContext.Consumer
export default ImageContext       