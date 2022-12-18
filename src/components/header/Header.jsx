import React from 'react';

//styles
import classes from './header.module.css';

//icons
import { BsDribbble, BsInstagram } from 'react-icons/bs'

function Header() {
    return (
        <div className={classes.container}>
            <div className={classes.logoContainer}> <p>IFEANYI AHUMAREZE</p> </div>
            <div className={classes.extraContainer}>
                <p className={classes.emailContact}>contact@ifeanyicodes.com</p>
                <div> <BsDribbble size={20} /> </div>
                <div> <BsInstagram size={20} /> </div>
                <p className={classes.date}>MON 12 DEC 19:35</p>
            </div>
        </div>
    )
}

export default Header