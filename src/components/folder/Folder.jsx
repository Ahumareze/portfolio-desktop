import React from 'react';
import { useDispatch } from 'react-redux';

//styles
import classes from './folder.module.css';

//images
import folder_img from '../../assets/icons/folder.svg';

function Folder({name, openFolderHandler}) {

    return (
        <div className={classes.container} onClick={openFolderHandler} >
            <img src={folder_img} alt='foldericon' />
            <p>{name}</p>
        </div>
    )
}

export default Folder