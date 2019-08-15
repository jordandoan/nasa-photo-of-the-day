import React, {useState, useEffect} from "react";
import {oldDates} from "./Dates";
import {URL} from "../../App";
import axios from "axios";
import styled from "styled-components";

const Collection = () => {
    let Collection = styled.div`
    `
    let CollectionImage = styled.img`
        width: 70px;
        margin: 2px;
    `
    let CollectionVideo = styled.iframe`
        width: 70px;
        margin: 2px;
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
        <div className="collection">
            {data.map((date) => {
                if (date.media_type == "video") {
                    return <CollectionVideo key={date.date}src={date.url} alt={date.title}/>
                } else {
                    return <CollectionImage src={date.url} key={date.date} alt={date.title}/>
                }
            })} 
        </div>
    );
    
}

export default Collection;