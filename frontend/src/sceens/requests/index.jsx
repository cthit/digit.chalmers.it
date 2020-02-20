import React, { useEffect, useState } from "react";
import axios from "axios";

import { Repo } from "../../elements/repo";
import Navbar from "../../elements/navbar";

const getRepos = () => (
    axios.get(`https://api.github.com/users/cthit/repos?per_page=100`)
)

const getPulls = (url, repos) => {
    axios.get(url).then(res => {
        //console.log(res.data);
    })
}


export const Requests = ({}) =>  {
    const [repos, setRepos] = useState(null);

    useEffect(() => {
        getRepos().then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                getPulls("https://api.github.com/repos/" + res.data[i].full_name + "/pulls",repos)
            }
            console.log(res.data);
            setRepos(res.data);
        });
    }, []);

    if(repos == null){
        return null;
    }

    return (
        <div style={{ backgroundColor: "pink"}}>
            <Navbar />
            Hello text is back again
            {repos.map(s => <Repo title={s.full_name}/>)}
        </div>
    );
}

//<Repo title={"This is a title"} />
//<button onClick={getStuff}>Button</button>
//getPulls(https://api.github.com/repos/cthit/achieveIT/pulls)