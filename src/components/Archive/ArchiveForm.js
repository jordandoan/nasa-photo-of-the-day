import React, {useState, useContext} from "react";
import {days, months, years} from "./Dates";
import Select from "./Select";
import styled from "styled-components";
import axios from "axios";
import {URL} from "../../App";
import ImageContext from "../../ImageContext";

const ArchiveForm = (props) => {
    let imageData = useContext(ImageContext);
    let [day, changeDay] = useState("");
    let [month, changeMonth] = useState("");
    let [year, changeYear] = useState("");
    let [data, setData] = useState(imageData)

    let changeData = (event, changeState) => {
        changeState(event.target.value);
    }

    let showNew = () => {
        let dateQuery = `&date=${year}-${month}-${day}`
        if (dateQuery.length != 16) {
            alert("Please enter a valid date!");
        }
        axios.get(URL+dateQuery)
            .then((res) => {
                setData(res.data);
            });
    }

    let Button = styled.p`
        padding: 5px 10px;
        width: 200px;
        margin: 10px auto;
        background-color:cadetblue;
        color:white;
        font-family: 'Montserrat', sans-serif;
        text-align:center;
    `
    let monthsText = months.map(month => month.text);
    let monthsValue = months.map(month => month.value);
    return (

        <form onSubmit={showNew}>
            <Select onChange={(event) => {changeData(event,changeMonth)}} data={monthsText} value={monthsValue} default="Month"/>
            <Select onChange={(event) => {changeData(event,changeDay)}} data={days} value={days} default="Day"/>
            <Select onChange={(event) => {changeData(event,changeYear)}} data={years} value={years} default="Year"/>
            <Button onClick={(event) => {showNew()}}>View Photo of the Day</Button>
        </form>

    );
}

export default ArchiveForm;