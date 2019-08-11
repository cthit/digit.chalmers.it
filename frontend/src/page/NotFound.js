import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        marginTop: '35px',
        textAlign: 'center',
    },
}));

// NotFound is the page shown when a page is missing.
export default function NotFound() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Typography variant="h4">
            This page doesn't exist.
          </Typography>
        </div>
    );
}
