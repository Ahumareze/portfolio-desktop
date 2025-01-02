import React from 'react';

//styles
import classes from './bottomtab.module.css';

//softwares
import spotify from '../../assets/icons/spotify.svg';
import photos from '../../assets/icons/photos.png';
import setting from '../../assets/icons/setting.png';
import user from '../../assets/icons/user.png';
import folder from '../../assets/icons/folder.svg';
import { useDispatch, useSelector } from 'react-redux';
import containsItem from '../../utilities/containsItem';
//redux actions
import { openFolder, setTopPosition } from '../../redux/actions';
import { projects } from '../../components';
import Profile from '../../components/profile/Profile';

const BottomTab = React.memo(() => {
    const dispatch = useDispatch();

    console.log("hello world")

    //redux state
    const desktopStack = useSelector(state => state.desktopReducer.desktopStack);
    const topPosition = useSelector(state => state.desktopReducer.topPosition);

    const Item = ({icon, png, onClick}) => {
        if(png){
           return(
            <div className={classes.item} onClick={onClick}>
                <img src={icon} alt='icon' />
            </div>
            ) 
        }else{
            return(
                <img src={icon} className={classes.freeIcon} onClick={onClick} />
            )
        }
        
    };

    const openHandler = (child) => {
        //absolute positioning
        const top = Math.floor(Math.random() * 100) + 10;
        const left = Math.floor(Math.random() * 400) + 30;

        const data = {
            title: 'My projects',
            child,
            top,
            left
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
            <div className={classes.BottomTab}>
                <Item icon={folder} onClick={() => openHandler(projects)} />
                <Item icon={user} onClick={() => openHandler(Profile)} />
                <Item icon={spotify} />
                <Item icon={photos} png />
                <Item icon={setting} png />
            </div>
        </div>
    )
})

export default BottomTab