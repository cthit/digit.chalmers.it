import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        margin: '20px auto',
        width: '600px',
        maxWidth: '90%',
    },
    logo: {
        margin: '10px auto 10px auto',
        maxHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
    },
}));

export default function Welcome() {
    const classes = useStyles();
    const logo = process.env.PUBLIC_URL + '/digIT19/logo.svg';

    return (
        <div className={classes.root}>
          <img src={logo} className={classes.logo} alt="logo" />
          <Typography variant="h5" gutterBottom>
            Welcome to the digIT commitee
          </Typography>
          <Typography variant="body1" paragraph>
            We are responsible for the development and maintenance of the digital systems available at the IT programme.
          </Typography>
          <Typography variant="body1" paragraph>
            digIT has developed the home page of the Chalmers IT department, an account infrastructure used by IT students, the voting system used for electing new IT commitee members, several food related services, a karaoke browser, a tracker of smurfs in Hubben and much more. A lof of our code is open-source so feel free to have a look at our GitHub page.
          </Typography>
          <Typography variant="body1" paragraph>
            digIT is often looking for new members to join the commitee so make sure to follow us to get news about our events, and recruiting seasons.
          </Typography>
          <Typography variant="body1" paragraph>
            Need help or want to contribute with ideas and improvements? <br/>
            Feel free to contact us below.
          </Typography>
        </div>
    );
}
