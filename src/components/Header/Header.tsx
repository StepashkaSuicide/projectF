import React from 'react';
import s from './Header.module.css';


export const Header = () => {
    return (
        <div>
            <div className={s.header}>
              <button>login</button>
            </div>
        </div>
    );
};
