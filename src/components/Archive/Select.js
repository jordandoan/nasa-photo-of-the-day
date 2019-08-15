import React from "react";

const Select = (props) => {
    return ( 
        <select>
        <option selected disabled>{props.default}</option> 
        {
            props.data.map((obj, index) =>
                <option key = { obj } value = { props.value[index] } > { obj } </option>    
            )
        } 
        </select>
    );
}

export default Select;