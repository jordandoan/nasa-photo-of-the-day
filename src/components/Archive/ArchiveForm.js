import React from "react";
import {days, months, years} from "./Dates";
import Select from "./Select";
import {Button} from "semantic-ui-react";

const ArchiveForm = () => {
    let monthsText = months.map(month => month.text);
    let monthsValue = months.map(month => month.value);
    return (
        <form>
            <Select data={monthsText} value={monthsValue} default="Month"/>
            <Select data={days} value={days} default="Day"/>
            <Select data={years} value={years} default="Year"/>
            <Button color="blue">View Photo of the Day</Button>
        </form>

    );
}

export default ArchiveForm;