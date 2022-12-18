import React from 'react';

//containers
import OpenedFolder from '../../containers/openedFolder/OpenedFolder';

//styles
import classes from './projects.module.css';

//images
import projectimg from '../../assets/images/project.png';

function Projects() {

    const Item = () => {
        return(
            <div className={classes.item}>
                <div className={classes.item_img} style={{background: `url(${projectimg})`, backgroundSize: 'cover'}}>
                    <div className={classes.item_backdrop}>
                        <img />
                        <img />
                        <img />
                    </div>
                </div>
                <p className={classes.title}>Project 1</p>
            </div>
        )
    }

    return (
        <OpenedFolder title={'My Projects'}>
            <div className={classes.container}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </OpenedFolder>
    )
}

export default Projects