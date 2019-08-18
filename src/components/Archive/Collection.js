import React, {useContext, memo} from "react";
import styled from "styled-components";
import ImageContext from "../../ImageContext";

const Collection = (props) => {
    let imageData = useContext(ImageContext);
    let handleMouseOver = (event) => {
        imageData.setCurrent(event.target.src);
    }

    let handleMouseLeave = () => {
        imageData.setCurrent(imageData.original);
    }

    let Collection = styled.div`
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        margin:20px 5px;
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

    if (props.archive.length == 0){
        return (<h1>Loading...</h1>)
    }
    return (
        <Collection>
            {props.archive.map((date) => {
                if (date.media_type == "video") {
                    return  <ImageContainer key={date.date}><CollectionVideo key={date.date}src={date.url} alt={date.title}/></ImageContainer>
                } else {
                    return <ImageContainer onMouseOver={(event) => handleMouseOver(event)} onMouseLeave={() => handleMouseLeave} key={date.date}><CollectionImage src={date.url} key={date.date} alt={date.title}/></ImageContainer>
                }
            })} 

        </Collection>
    );
    
}
function arePropsEqual(prevProps, currentProps) {
    return prevProps.archive == currentProps.archive;
}
export default Collection;
let MemoizedCollection = memo(Collection, arePropsEqual);
export {MemoizedCollection};