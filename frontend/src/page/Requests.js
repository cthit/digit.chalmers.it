import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from 'component/Navbar.js';
const useStyles = makeStyles(theme => ({
    groups: {
        width: '90%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
}));

// https://api.github.com/users/

export default function Members() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar />
            this is text
        </div>
    );
}
