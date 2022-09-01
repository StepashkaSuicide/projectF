import React from 'react';
import s from './NavBar.module.css';
import {Link} from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <Link to="login">Login</Link>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to="registration">Registration</Link>
            </div>
            <div className={s.item}>
                <Link to="profile">Profile</Link>
            </div>
            <div className={s.item}>
                <Link to="PasswordRecovery">Password Recovery</Link>
            </div>
            <div className={s.item}>
                <Link to="newPassword">New Password</Link>
            </div>
            <div className={s.item}>
                <Link to="showComponents">Show Components</Link>
            </div>
            <div className={s.item}>
                <Link to="error404">error404</Link>
            </div>
        </div>
    );
};