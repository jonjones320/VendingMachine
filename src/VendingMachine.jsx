import React from "react";
import { Link } from "react-router-dom";


function VendingMachine() {
    return (
        <div className="VendingMachine-main">
            <h1>Welcome to the Virtual Vender!</h1>
            <ul>
                <li><Link to="/chips">Chips</Link></li>
                <li><Link to="/granolabar">Granola Bar</Link></li>
                <li><Link to="/monster">Monster</Link></li>
            </ul>

        </div>
      );
}

export default VendingMachine;