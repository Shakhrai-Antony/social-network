import React from 'react'
import {NavLink} from 'react-router-dom'


const Dialog = (props) => {

    let path = '/dialogs/' + props.id
    return (
        <NavLink to={path}>
            <div>{props.name}</div>
        </NavLink>
    )
}


export default Dialog