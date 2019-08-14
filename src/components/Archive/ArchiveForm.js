import React from "react";
import {days, months, years} from "./Dates";
import Select from "./Select";

const ArchiveForm = () => {
    let monthsText = months.map(month => month.text);
    let monthsValue = months.map(month => month.value);
    return (
        <form>
            <Select data={monthsText} value={monthsValue} default="Month"/>
            <Select data={days} value={days} default="Day"/>
            <Select data={years} value={years} default="Year"/>
            <button>View Photo of the Day</button>
        </form>

    );
}

export default ArchiveForm;