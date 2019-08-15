import React, {useState, useEffect} from "react";
import ArchiveForm from "./ArchiveForm";
import Collection from "./Collection";
import styled from "styled-components";

const ArchiveBar = (props) => {
    let ArchiveBar = styled.div`
        height:500px;
        width:300px;
        background-color:coral;
    `
    let StyledP = styled.p`
        font-family: 'Archivo Black', sans-serif;
    `
    return (
        <ArchiveBar>
            <StyledP>View any of the previous photos of the day!</StyledP>
            <ArchiveForm data={props.data} setData={props.setData} imgURL={props.imgURL} setImg={props.setImg}/>
            <Collection setImg={props.setImg}/>
        </ArchiveBar>
    );
}


export default ArchiveBar;