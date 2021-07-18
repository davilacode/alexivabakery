import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import MenuItem from "./menuItem"

const Menu = () => {

    return (
        <div className="collapse navbar-collapse" id="primaryMenu">
			<StaticQuery 
                query={MenuQuery}
                render={(data) => {
                    if(data.wpMenu.menuItems) {
                        const menuItems = data.wpMenu.menuItems.nodes
                        const wordPressUrl = data.wp.generalSettings.url

                        return (
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                { 
                                    menuItems && menuItems.map((menuItem) => (
                                       <MenuItem key={menuItem.id} menuItem={menuItem} wordPressUrl={wordPressUrl} /> 
                                    )) 
                                }
                            </ul>
                        )
                    }
                    return null
                }}
            />
        </div>
    )
}

export default Menu

const MenuQuery = graphql`
    query menuQuery {
        wpMenu(locations: {eq: PRIMARY}) {
            menuItems {
                nodes {
                    id
                    label
                    url
                    title
                    target
                }
            }
        }
        wp {
            generalSettings {
                url
            }
        }
    }
`