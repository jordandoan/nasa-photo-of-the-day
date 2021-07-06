import React from "react";

const Select = (props) => {
    return ( 
        <select onChange={props.onChange} defaultValue={props.default}>
            <option value={props.default} disabled>{props.default}</option> 
        {
            props.data.map((obj, index) =>
                <option key={obj} value={props.value[index]}>{obj}</option>    
            )
        } 
        </select>
    );
}

export default Select;