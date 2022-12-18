import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Draggable from "react-draggable";

//styles
import classes from './folder.module.css';

//icons
import { GrFormClose } from 'react-icons/gr';

//utliliy functions
import getIndex from '../../utilities/getIndex';

//redux actions
import { openFolder, setTopPosition } from '../../redux/actions';

const OpenedFolder = ({title, children, position, top, left}) => {
    //initialize
    const dispatch = useDispatch();

    //redux state
    const desktopStack = useSelector(state => state.desktopReducer.desktopStack);
    const topPosition = useSelector(state => state.desktopReducer.topPosition);

    //cancle
    const [display, setDisplay] = useState('block')

    const closeHnadler = () => {
        const index = getIndex(desktopStack, title);
        
        
        let arr = [...desktopStack];
        arr[index] = {}

        dispatch(openFolder(arr));

        setDisplay('none')
    };

    const bringToTop = () => {
        const arr = [...desktopStack];

        let newArr = arr.map(i => {
            if(i.title === title){
                return {...i, position: topPosition + 1}
            }
            return i
        });

        dispatch(setTopPosition(topPosition + 1));
        dispatch(openFolder(newArr));
    }
    
    return (
        <Draggable onDrag={bringToTop} >
            <div className={classes.container} style={{top: top, left: left, zIndex: position, display: display}}>
                <div className={classes.top}>
                    <div className={classes.close} onClick={closeHnadler}> <GrFormClose className={classes.x_icon} size={15} /> </div>
                    <div className={classes.title} onClick={bringToTop}> <p>{title}</p> </div>
                </div>
                <div className={classes.mainContainer} onClick={bringToTop}>
                    {children}
                </div>
            </div>
        </Draggable>
    )
}

export default OpenedFolder