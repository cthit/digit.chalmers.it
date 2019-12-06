import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "component/Navbar.js";
const useStyles = makeStyles(theme => ({
    groups: {
        width: "90%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    },
}));

// https://api.github.com/users/

const getStuff = e => {
    // this will need to get fixed when cthit gets over 100 repositories
    axios
        .get(`https://api.github.com/users/cthit/repos?per_page=100`)
        .then(res => {
            const repos = res.data;
            //this.setState({repos});
            console.log(repos);
        });
};

export default function Members() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar />
            Hello text is back again
            <button onClick={getStuff}>Button</button>
        </div>
    );
}
