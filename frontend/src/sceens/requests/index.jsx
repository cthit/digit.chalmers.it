import React, { Component } from "react";
import axios from "axios";

import { Repo } from "../../elements/repo";
import Navbar from "../../elements/navbar";

export class Requests extends Component {
    constructor(props) {
        super(props);

        this.state = [];

        this.getRepon = this.getRepon.bind(this);
    }

    render() {
        //const listOfRepon = this.state.map(s => <Repo title={s.name} />);

        return (
            <div>
                <Navbar />
                Hello text is back again
                <button onClick={this.getRepon}>Button</button>
                <button onClick={console.log(this.state)}>Button2</button>
                <Repo title={"This is a title"} />
            </div>
        );
    }

    getRepon() {
        axios
            .get(`https://api.github.com/users/cthit/repos?per_page=100`)
            .then(res => {
                this.setState(res.data);
            });
    }
}

//<Repo title={"This is a title"} />
//<button onClick={getStuff}>Button</button>
