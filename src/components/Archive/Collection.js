import React, {useState, useEffect} from "react";
import {oldDates} from "./Dates";
import {URL} from "../../App";
import axios from "axios";

const Collection = () => {
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
                    return <iframe className="collection-image" src={date.url}></iframe>
                } else {
                    return <img className="collection-image" src={date.url} key={date.date} alt={date.title}/>
                }
            })} 
        </div>
    );
    
}

export default Collection;