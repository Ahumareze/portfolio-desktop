import React from 'react'

//containers
import { Folder } from '../../components';

//styles
import classes from './desktop.module.css';

function Desktop() {
    return (
        <div className={classes.container}>
            <div className={classes.foldersContainers}>
                <Folder name={'My Projects'} />
                <Folder name={'Work History'} />
                <Folder name={'Fun Projects'} />
            </div>
        </div>
    )
}

export default Desktop