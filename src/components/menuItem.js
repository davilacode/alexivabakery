import React from 'react'
import { CreateLocalLink } from "../utils"
import { Link } from "gatsby"

const MenuItem = ({ menuItem, wordPressUrl }) => {

    return (
        <li className="menu-item">
            <Link
                className="d-flex align-items-center flex-lg-column"
                to={CreateLocalLink(menuItem, wordPressUrl)}
                activeClassName="active"
            >
                {menuItem.label}
            </Link>
        </li>
    );
}

export default MenuItem