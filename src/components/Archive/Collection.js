import React, {useContext, useState, useEffect, memo} from "react";
import styled from "styled-components";
import ImageContext from "../../ImageContext";
import {oldDates} from "./Dates";
import axios from "axios";
const Collection = (props) => {
    let imageData = useContext(ImageContext);

    let handleClick = (event) => {
        imageData.setCurrent(event.target.src);
    }
    let [oldImages, setImages] = useState([]);
    let imageList = [];
    const URL = "https://api.nasa.gov/planetary/apod?api_key=uXT4531jbPEaeOzwwqMGmNR2rkLV4Lhz2ssdj6TI";
    useEffect(() => {
        axios.all(oldDates.map((date) =>{
            return (axios.get(`${URL}&date=${date}`)
                .then(res => res.data))
        })).then(results => {
            setImages(results);
        });
    }, []);

    let Collection = styled.div`
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        margin:20px;
        width:100%;

    `
    let ImageContainer = styled.div`
        width:70px;
        height:70px;
        margin:2px;
        overflow:hidden;
    `
    let CollectionImage = styled.img`
        height: 130px;
        margin: -10px 0px 10px -10px;
    `
    let CollectionVideo = styled.iframe`
        height: 130px;
        margin: -10px 0px 10px -10px;
    `

    if (oldImages.length < 10){
        return (<h1>Loading...</h1>)
    }
    return (
        <Collection>
            {oldImages.map((date) => {
                if (date.media_type == "video") {
                    return  <ImageContainer key={date.date}><CollectionVideo onClick={(event) => handleClick(event)} key={date.date}src={date.url} alt={date.title}/></ImageContainer>
                } else {
                    return <ImageContainer key={date.date}><CollectionImage onClick={(event) => handleClick(event)} src={date.url} key={date.date} alt={date.title}/></ImageContainer>
                }
            })} 
        </Collection>
    );
    
}
function arePropsEqual(prevProps, currentProps) {
    return prevProps.isTrue == currentProps.isTrue;
}
export default Collection;
let MemoizedCollection = memo(Collection, arePropsEqual);
export {MemoizedCollection};