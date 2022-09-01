import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Login} from './components/login/Login';
import {Profile} from './components/profile/Profile';
import {NewPassword} from './components/newPassword/NewPassword';
import {PasswordRecovery} from './components/passwordRecovery/PasswordRecovery';
import {NavBar} from './components/navbar/Navbar';
import {Registration} from './components/registration/Registration';
import {Header} from './components/Header/Header';
import s from './App.module.css';
import {Error404} from './components/error404/Error404';
import {ShowComponents} from './components/showComponents/ShowComponents';

function App() {

    return (
        <div className={s.wrapperAppComponents}>
            <div >
                <NavBar/>
            </div>

            <div className={s.navbarWrapper}>
                <Routes>
                    <Route path="/login/" element={<Login/>}/>
                    <Route path="/profile/" element={<Profile/>}/>
                    <Route path="/newPassword/" element={<NewPassword/>}/>
                    <Route path="/passwordRecovery/" element={<PasswordRecovery/>}/>
                    <Route path="/registration/" element={<Registration/>}/>
                    <Route path="/showComponents/" element={<ShowComponents/>}/>
                    <Route path="/error404/" element={<Error404/>}/>
                </Routes>
            </div>


        </div>
    );
}

export default App;
{/*<div className={s.headerWrapper}>*/}
{/*    <Header/>*/}
{/*</div>*/}