import React from 'react';
import {NavBar} from '../navbar/Navbar';
import styles from '../../components/utils/styles/wrapperAllComponents.module.css'
import SuperButton from '../button/SuperButton';
import SuperInput from '../input/SuperInput';
import SuperCheckbox from '../checkbox/SuperCheckbox';

export const ShowComponents = () => {
    return (


        <div className={`  ${styles.wrapperAllComponents}`}>
            <SuperButton > TEST</SuperButton >
            <SuperInput/>
            <SuperCheckbox />
        </div>
    );
};

