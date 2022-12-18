import React from 'react';

//styles
import classes from './folder.module.css';

//images
import folder_img from '../../assets/icons/folder.svg';

function Folder({name, type}) {
    return (
        <div className={classes.container}>
            <img src={folder_img} alt='foldericon' />
            <p>{name}</p>
        </div>
    )
}

export default Folder