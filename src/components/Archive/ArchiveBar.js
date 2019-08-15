import React, {useState, useEffect} from "react";
import ArchiveForm from "./ArchiveForm";
import Collection from "./Collection";
import styled from "styled-components";

const ArchiveBar = () => {
    let ArchiveBar = styled.div`
        height:500px;
        width:300px;
        background-color:coral;
    `
    return (
        <ArchiveBar>
            <p>View any of the previous photos of the day!</p>
            <ArchiveForm/>
            <Collection/>
        </ArchiveBar>
    );
}


export default ArchiveBar;