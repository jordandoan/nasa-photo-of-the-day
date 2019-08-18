import React, {useState} from 'react';

let useImage = () => {
    let [data,setData] = useState();
    let [current,setCurrent] = useState(null);
    let [original, setOriginal] = useState();
    return {data,setData,current,setCurrent,original,setOriginal}
}

const ImageContext = React.createContext(useImage);
export const ImageProvider = ImageContext.Provider
export const ImageConsumer = ImageContext.Consumer
export default ImageContext       