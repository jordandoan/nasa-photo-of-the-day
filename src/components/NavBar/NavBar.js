import React from "react";
import NavLink from "./NavLink"
import styled from "styled-components";
const NavBar = (props) => {
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
            <div>
                <h1>NASA PHOTO OF THE DAY <br></br>{props.date}</h1>
            </div>
            {createLinks(nav2)}
        </Nav>
    );
}

export default NavBar;