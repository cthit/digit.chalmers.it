import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        height: '100px',
        zIndex: '10000',

        '@media only screen and (max-width: 700px)': {
            height: '150px',
        },

        '@media only screen and (max-width: 500px)': {
            height: '240px',
        },
    },
    wrapper: {
        top: 0,
        width: '100%',
        position: 'fixed',
        background: '#1976d2',
        boxShadow: '0px 0px 5px 0px black',
    },
    navbar: {
        maxWidth: '700px',
        margin: '0 auto',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',

        '@media only screen and (max-width: 700px)': {
            flexDirection: 'column',
        },
    },
    ul: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '60%',
        margin: 0,

        '@media only screen and (max-width: 700px)': {
            justifyContent: 'center',
            width: '100% !important',
            height: '50px',
            padding: 0,
        },

        '@media only screen and (max-width: 500px)': {
            flexDirection: 'inherit',
            height: 'auto',
            color: 'green',
        },
    },
    li: {
        display: 'flex',
        listStyle: 'none',

        '@media only screen and (max-width: 500px)': {
            height: '50px !important',
            width: '100%',
            justifyContent: 'center',
        },
        '&:hover': {
            background: '#1466b7',
        },
    },
    a: {
        display: 'flex',
        alignItems: 'center',
				textDecoration: 'none',
				color: 'white',
				fontSize: '1.3em',
				padding: '0 40px',
    },
    logo: {
        marginLeft: '40px',
        padding: '10px',
        height: '60px',
        '@media only screen and (max-width: 700px)': {
            display: 'block',
            margin: '0 auto',
        },
    }
});

export default function Navbar() {
    const classes = useStyles();
    const logo = process.env.PUBLIC_URL + '/logo.png';

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <nav className={classes.navbar}>
                    <a href="/" >
                        <img className={classes.logo} src={logo} alt="logo" />
                    </a>
                    <ul className={classes.ul}>
                    <li className={classes.li}><a className={classes.a} href="https://findit.chalmers.it/">Projects</a></li>
                    <li className={classes.li}><a className={classes.a} href="/members">Members</a></li>
                    <li className={classes.li}><a className={classes.a} href="https://digit.chalmers.it/wiki/Main_Page">Wiki</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
