import React from "react";
import styled from "styled-components";

const NavLink = (props) => {
    let Link = styled.div`
        font-family: 'Montserrat', sans-serif;
    `
    return (
        <Link>{props.text}</Link>
    );
}

export default NavLink;