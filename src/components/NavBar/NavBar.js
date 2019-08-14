import React from "react";
import NavLink from "./NavLink"

const NavBar = (props) => {
    let nav1 = ["HOME","ARCHIVE"];
    let nav2= ["ABOUT","NASA"];
    let createLinks = (arr) => {
        return (arr.map(link => 
            <NavLink text={link} key={link}/>
        ));
    }
    return (
        <nav>
            {createLinks(nav1)}
            <div>
                <h1>NASA PHOTO OF THE DAY <br></br>{props.date}</h1>
            </div>
            {createLinks(nav2)}
        </nav>
    );
}

export default NavBar;