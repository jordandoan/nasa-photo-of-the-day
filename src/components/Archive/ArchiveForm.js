import React from "react";
import {days, months, years} from "./Dates";
import Select from "./Select";
import styled from "styled-components";

const ArchiveForm = () => {
    let Button = styled.button`
        padding: 5px 10px;
        width: 200px;
        margin: 10px;
        background-color:cadetblue;
        color:white;
        font-family: 'Montserrat', sans-serif;
    `
    let monthsText = months.map(month => month.text);
    let monthsValue = months.map(month => month.value);
    return (

        <form>
            <Select data={monthsText} value={monthsValue} default="Month"/>
            <Select data={days} value={days} default="Day"/>
            <Select data={years} value={years} default="Year"/>
            <Button>View Photo of the Day</Button>
        </form>

    );
}

export default ArchiveForm;