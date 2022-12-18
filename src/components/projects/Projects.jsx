//styles
import classes from './projects.module.css';

//images
import projectimg from '../../assets/images/project.png';

const Item = () => {
    return(
        <div className={classes.item}>
            <div className={classes.item_img} style={{background: `url(${projectimg})`, backgroundSize: 'cover'}}>

            </div>
            <p className={classes.title}>Project 1</p>
        </div>
    )
};

const project = (
    <div className={classes.item_container}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
    </div>
);

export default project