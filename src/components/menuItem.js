import React from 'react'
import { CreateLocalLink } from "../utils"
import { Link } from "gatsby"

const MenuItem = ({ menuItem, wordPressUrl }) => {

    return (
        <li className="menu-item">
            { menuItem.label.includes("pedido") ? 
                <a className="d-flex align-items-center flex-lg-column" target="_blank" href={menuItem.url} title={menuItem.label} rel="noreferrer noopener">{menuItem.label}</a>
            :
                <Link
                    className="d-flex align-items-center flex-lg-column"
                    to={CreateLocalLink(menuItem, wordPressUrl)}
                    activeClassName="active"
                    target=""
                    
                >
                    {menuItem.label}
                </Link>
            }
        </li>
    );
}

export default MenuItem