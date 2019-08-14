import React from "react";
import ArchiveForm from "./ArchiveForm";
import Collection from "./Collection";
const ArchiveBar = () => {
    return (
        <div className="archive-bar">
            This is an archive bar!
            <ArchiveForm/>
            <Collection/>
        </div>
    );
}


export default ArchiveBar;