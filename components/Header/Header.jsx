import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";



const Header = (props) => {
    return (
        <header className={s.header}>
            <div>
                <img src='https://en.ephoto360.com/uploads/effect-data/en.ephoto360.com/1930934c4/35e7424dc18baf.jpg' alt=""/>
            </div>
            <div className={s.loginBlock}>
                { props.isAuth
                    ?   <div> {props.login} - <button onClick={props.logOutThunk}>Log out</button></div>
                    : <NavLink to='/login'>Login</NavLink> }
            </div>
        </header>
    )


}

export default Header;