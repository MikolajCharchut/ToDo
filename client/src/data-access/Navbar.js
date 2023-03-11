import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className="navbar">
            <Link to="/"> ToDo </Link>
            <Link to="/createtask"> + </Link>
        </div>
    )
}

export default Navbar;
