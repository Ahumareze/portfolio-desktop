import React from 'react';

//styles
import classes from './canva.module.css';

//compoennts
import { Header } from '../../components';

function Canva({children}) {
    const dark = (
        <div className={classes.bubbles}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );

    const light = (
        <div className={classes.container}>
            <div />
            <div />
            <div />
            <div className={classes.backDrop} />
        </div>
    )
    return (
        <div className={classes.Canva}>
            {dark}
            <div className={classes.mainContainer}>
                {children}
            </div>
        </div>
    )
}

export default Canva