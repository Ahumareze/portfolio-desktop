import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

//containers
import { Folder, projects } from '../../components';

//styles
import classes from './desktop.module.css';

//redux actions
import { openFolder, setTopPosition } from '../../redux/actions';

//helper
import containsItem from '../../utilities/containsItem';

function Desktop() {
    //imitialize
    const dispatch = useDispatch();

    //redux state
    const desktopStack = useSelector(state => state.desktopReducer.desktopStack);
    const topPosition = useSelector(state => state.desktopReducer.topPosition);

    const openProjecthandler = () => {
        //absolute positioning
        const top = Math.floor(Math.random() * 100) + 70;
        const left = Math.floor(Math.random() * 400) + 30;
        
        const data = {
            title: 'My projects',
            child: projects,
            top,
            left,
            position: topPosition + 1
        };

        let isOpened = containsItem(desktopStack, data);

        if(isOpened) return

        const arr = [...desktopStack];
        arr.push(data);
        dispatch(openFolder(arr));
        dispatch(setTopPosition(topPosition + 1));
    };

    const openWorkHandler = () => {
        //absolute positioning
        const top = Math.floor(Math.random() * 100) + 70;
        const left = Math.floor(Math.random() * 400) + 30;

        const data = {
            title: 'Work History',
            child: <div style={{height: 200, width: 200, backgroundColor: 'red'}} />,
            top,
            left,
            position: topPosition + 1
        };

        let isOpened = containsItem(desktopStack, data);

        if(isOpened) return

        const arr = [...desktopStack];
        arr.push(data);
        dispatch(openFolder(arr));
        dispatch(setTopPosition(topPosition + 1));
    };

    const openPersonalHandler = () => {
        //absolute positioning
        const top = Math.floor(Math.random() * 100) + 70;
        const left = Math.floor(Math.random() * 400) + 30;

        const data = {
            title: 'My Fun Projects',
            child: <h2>Personal projects</h2>,
            top,
            left,
            position: topPosition + 1
        };

        let isOpened = containsItem(desktopStack, data);

        if(isOpened) return

        const arr = [...desktopStack];
        arr.push(data);
        dispatch(openFolder(arr));
        dispatch(setTopPosition(topPosition + 1));
    }

    return (
        <div className={classes.container}>
            <div className={classes.foldersContainers}>
                <Folder name={'My Projects'} openFolderHandler={openProjecthandler} />
                <Folder name={'Work History'} openFolderHandler={openWorkHandler} />
                <Folder name={'Fun Projects'} openFolderHandler={openPersonalHandler} />
            </div>
        </div>
    )
}

export default Desktop