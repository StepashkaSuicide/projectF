import React from 'react';
import s from './Login.module.css';
import styles from '../../components/utils/styles/wrapperAllComponents.module.css'


export const Login = () => {
    return (
        <div className={`${s.loginWrapper} ${styles.wrapperAllComponents}`}>


            <div>
                <input placeholder={'email'} type="text"/>
            </div>
            <div>
                <input placeholder={'pass'} type="password"/>
            </div>

            <button>send</button>
        </div>
    );
};
