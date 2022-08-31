import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Login} from './components/login/Login';
import {Profile} from './components/profile/Profile';
import {NewPassword} from './components/newPassword/NewPassword';
import { PasswordRecovery } from './components/passwordRecovery/PasswordRecovery';
import {ShowComponents} from './components/showComponents/ShowComponents';
import {NavBar} from './components/navbar/Navbar';
import {Registration} from './components/registration/Registration';

function App() {
  return (
    <div >
      <NavBar/>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <Routes>
          <Route path='/login/' element={<Login/>}
          />
          <Route path='/profile/' element={<Profile/>}/>
          <Route path='/newPassword/' element={<NewPassword/>}
          />
          <Route path='/passwordRecovery/' element={<PasswordRecovery/>}
          /> <Route path='/registration/' element={<Registration />}
        />
        </Routes>

    </div>
  );
}

export default App;
