import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from 'component/Navbar.js';
import DigitGroup from 'component/DigITGroup.js';

import digIT19 from 'data/digIT19.json';
import digIT18 from 'data/digIT18.json';
import digIT17 from 'data/digIT17.json';
import digIT16 from 'data/digIT16.json';
import digIT15 from 'data/digIT15.json';
import digIT14 from 'data/digIT14.json';
import digIT13 from 'data/digIT13.json';

const useStyles = makeStyles(theme => ({
    groups: {
        width: '90%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
}));

export default function Members() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Navbar />
          <div className={classes.groups}>
            <DigitGroup data={digIT19} />
            <DigitGroup data={digIT18} />
            <DigitGroup data={digIT17} />
            <DigitGroup data={digIT16} />
            <DigitGroup data={digIT15} />
            <DigitGroup data={digIT14} />
            <DigitGroup data={digIT13} />
          </div>
        </div>
    );
}
