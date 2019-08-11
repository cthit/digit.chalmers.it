import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    paper: {
        height: 200,
        width: 200,
    },
    avatar: {
        width: 100,
        height: 100,
        margin: '10px auto',
        top: '10px',
    },
}));

export default function DigITMember(data) {
    const classes = useStyles();

    return (
        <Grid item>
            <Paper className={classes.paper}>
                <Avatar src={data.baseUrl + '/' + data.member.img} className={classes.avatar} />
                <h4>{data.member.role}<br/></h4>
                <h5>{data.member.name}</h5>
            </Paper>
        </Grid>
    );
}
