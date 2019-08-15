import React, {useState, useEffect} from "react";
import {oldDates} from "./Dates";
import {URL} from "../../App";
import axios from "axios";
import styled from "styled-components";

const Collection = () => {
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

    let [data, setData] = useState([]);
    useEffect(()=>{
        axios.all(oldDates.map((date) =>{
            return (axios.get(`${URL}&date=${date}`)
                .then(res => res.data))
        })).then(results => {
            setData(results);
        });
    }, []);
    if (data.length == 0){
        return (<h1>Loading...</h1>)
    }
    return (
        <Collection>
            {data.map((date) => {
                if (date.media_type == "video") {
                    return  <ImageContainer><CollectionVideo key={date.date}src={date.url} alt={date.title}/></ImageContainer>
                } else {
                    return <ImageContainer><CollectionImage src={date.url} key={date.date} alt={date.title}/></ImageContainer>
                }
            })} 

        </Collection>
    );
    
}

export default Collection;