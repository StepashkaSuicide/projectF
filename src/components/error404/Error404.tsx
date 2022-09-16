import React from 'react';
import s from './error404.module.css'
import styles from '../../utils/styles/wrapperAllComponents.module.css'

export const Error404 = () => {
    return (
        <div className={`${s.notfound} ${styles.wrapperAllComponents}`}>
            PAGE NOT FOUND 404
        </div>
    );
};
