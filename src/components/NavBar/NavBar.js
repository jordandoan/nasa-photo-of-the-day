import React, {useContext} from "react";
import NavLink from "./NavLink"
import styled from "styled-components";
import ImageContext from "../../ImageContext";

const NavBar = (props) => {
    let imageData = useContext(ImageContext);

    let Nav = styled.nav`
        display:flex;
        background-color:skyblue;
        justify-content: center;
        align-items: baseline;
    `
    let nav1 = ["HOME","ARCHIVE"];
    let nav2= ["ABOUT","NASA"];
    let createLinks = (arr) => {
        return (arr.map(link => 
            <NavLink text={link} key={link}/>
        ));
    }
    return (
        <Nav>
            {createLinks(nav1)}
            <div onClick={()=>{imageData.setCurrent("bye")}}>
                {/* <h1>NASA PHOTO OF THE DAY <br></br>{imageData.mainData.date}</h1> */}{imageData.current}
            </div>
            {createLinks(nav2)}
        </Nav>
    );
}

export default NavBar;