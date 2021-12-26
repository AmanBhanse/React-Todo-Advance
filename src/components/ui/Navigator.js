import React from "react";
import LogoIcon from "./LogoIcon";
import { Link } from "react-router-dom";

import "./NavigatorStyle.css";

function Navigator() {
    return (
        <div className="nav-bar">
            <div className="logo-container">
                <div className="logo-img-container">
                    <LogoIcon />
                </div>
                <h2>☑ S i m p l e - T o d o - A p p</h2>
            </div>
            <div className="nav-link">
                <ul>
                    <Link to="/">
                        <li>
                            <div className="nav-link-text">🏡 Home</div>
                        </li>
                    </Link>
                    <Link to="/about">
                        <li>🤵 About me</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Navigator;
