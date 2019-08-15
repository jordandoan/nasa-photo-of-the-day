import React, {useState, useEffect} from "react";
import ArchiveForm from "./ArchiveForm";
import Collection from "./Collection";

const ArchiveBar = () => {
    return (
        <div className="archive-bar">
            <p>View any of the previous photos of the day!</p>
            <ArchiveForm/>
            <Collection/>
        </div>
    );
}


export default ArchiveBar;