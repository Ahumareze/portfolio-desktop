import React from 'react';

//styles
import classes from './bottomtab.module.css';

//softwares
import spotify from '../../assets/icons/spotify.svg';
import photos from '../../assets/icons/photos.png';
import setting from '../../assets/icons/setting.png';
import user from '../../assets/icons/user.png';
import folder from '../../assets/icons/folder.svg';

const BottomTab = React.memo(() => {

    const Item = ({icon, png}) => {
        if(png){
           return(
            <div className={classes.item}>
                <img src={icon} alt='icon' />
            </div>
            ) 
        }else{
            return(
                <img src={icon} className={classes.freeIcon} />
            )
        }
        
    };

    return (
        <div className={classes.container}>
            <div className={classes.BottomTab}>
                <Item icon={folder} />
                <Item icon={user} />
                <Item icon={spotify} />
                <Item icon={photos} png />
                <Item icon={setting} png />
            </div>
        </div>
    )
})

export default BottomTab