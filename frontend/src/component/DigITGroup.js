import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import DigITMember from 'component/DigITMember.js';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        padding: '40px 0',
    },
    logo: {
        margin: '0 auto',
        height: '300px',
    }
}));

export default function DigITGroup(group) {
    const classes = useStyles();
    const [spacing] = React.useState(2);
    let baseUrl = process.env.PUBLIC_URL + "/digIT" + group.data.year;

    function avatars() {
        let i = 0;
        let res = group.data.members.map((member) =>
            <DigITMember key={i++} member={member} baseUrl={baseUrl} />
        );
        return res;
    }

    return (
        <Grid container className={classes.root} spacing={2}>
            <img className={classes.logo} src={baseUrl + '/logo.svg'} alt="logo" />
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    digIT {group.data.year} members
                </Typography>
                <Grid container justify="center" spacing={spacing}>
                    {avatars()}
                </Grid>
            </Grid>
        </Grid>
    );
}
