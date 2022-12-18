import React from 'react';
import Draggable from "react-draggable";

//styles
import classes from './folder.module.css';

//icons
import { GrFormClose } from 'react-icons/gr';

function OpenedFolder({title, children}) {
    const topPosition = Math.floor(Math.random() * 150) + 70;
    const bottomPosition = Math.floor(Math.random() * 400) + 30;
    
    return (
        <Draggable>
            <div className={classes.container} style={{top: topPosition, left: bottomPosition}}>
                <div className={classes.top}>
                    <div className={classes.close}> <GrFormClose className={classes.x_icon} size={15} /> </div>
                    <div className={classes.title}> <p>{title}</p> </div>
                </div>
                <div className={classes.mainContainer}>
                    {children}
                </div>
            </div>
        </Draggable>
    )
}

export default OpenedFolder