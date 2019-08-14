import React from "react";
import {oldDates} from "./Dates";
import Axios from "axios";
import {URL} from "../../App";

const Collection = (props) => {
    function createElement(obj) {
        return <img src={obj.url}/>
    }
    return (
        <div>This is the Archive Collection
            {
                oldDates.map((date) =>{
                    return (Axios.get(`${URL}&date=${date}`)
                        .then (res => res.data)
                        .then(createElement)
                        .catch(err => console.log(err))
                    
                    );
                })}
        </div>
    );
}

export default Collection;