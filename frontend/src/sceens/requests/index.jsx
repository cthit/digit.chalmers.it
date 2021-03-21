import React, { useEffect, useState } from "react";
import axios from "axios";

import { Repo } from "../../elements/repo";
import Navbar from "../../elements/navbar";

const getRepos = () => (
    axios.get(`https://api.github.com/users/cthit/repos?per_page=100`)
);

const getPulls = (name) => axios.get("https://api.github.com/repos/" + name + "/pulls");

export const Requests = ({}) =>  {
    const [pulls, setPulls] = useState(null);

    useEffect(() => {
        getRepos().then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                getPulls(res.data[i].full_name).then((res2) => {
                    //setPulls(res2.data);
                    console.log(res2.data);
                })
            }
        });
    }, []);

    if(pulls == null){
        return "null";
    }

    console.log(pulls);

    return (
        <div style={{ backgroundColor: "pink"}}>
            <Navbar />
            Hello text is back again
        </div>
    );
};

//<Repo title={"This is a title"} />
//<button onClick={getStuff}>Button</button>
//{pulls.map(s => <Repo title={"hej"}/>)}
//getPulls(https://api.github.com/repos/cthit/achieveIT/pulls)