import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    contact: {
        textAlign: 'center',
        padding: '20px 0',
    },
    channel: {
        display: 'inline',
        fontSize: '40px',
        padding: '1px 6px',
        textAlign: 'center',
        color: 'rgb(45,45,45)',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: '5px',
        }
    },
}));

export default function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.contact}>
          <div className="social-media">
            <a href="https://www.facebook.com/digitchalmers/" className={classes.channel} title="Facebook">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/digitcth/" className={classes.channel} title="Instagram">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/groups/13717617/" className={classes.channel} title="LinkedIn">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/cthit" className={classes.channel} title="GitHub">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
          </div>
          <Typography variant="h6" paragraph>
            digit@chalmers.it
          </Typography>
        </div>
    );
}
