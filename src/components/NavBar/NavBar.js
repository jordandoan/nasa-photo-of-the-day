import React from "react";

const NavBar = (props) => {
    return (
        <nav>
            <h1>NASA PHOTO OF THE DAY <br></br>{props.date}</h1>
        </nav>
    );
}

export default NavBar;