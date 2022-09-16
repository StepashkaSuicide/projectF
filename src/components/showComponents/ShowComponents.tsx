import React from 'react';
import {NavBar} from '../navbar/Navbar';
import styles from '../../utils/styles/wrapperAllComponents.module.css'
import SuperButton from '../../common/button/SuperButton';
import SuperInput from '../../common/input/SuperInput';
import SuperCheckbox from '../../common/checkbox/SuperCheckbox';

export const ShowComponents = () => {
    return (


        <div className={`  ${styles.wrapperAllComponents}`}>
            <SuperButton > TEST</SuperButton >
            <SuperInput/>
            <SuperCheckbox />
        </div>
    );
};

