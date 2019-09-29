import * as React from "react";
import { useState } from 'react';
import {Mark} from "../store/stores";

class PostMark extends React.Component  {
    newMark=new Mark ({name: "T0", lat:"59.95", lng:"30.33"})
    // const [newMark, setNewMark]=useState(new Mark ({name: "T0", lat:"59.95", lng:"30.33"}));

    // changeInputData=(e)=>{
    //     // console.log(this.)
    //     // setNewMark(new Mark({...newMark, [e.target.name]: e.target.value}));
    // };

    render(){
    return(
        <form action="http://localhost:4000/api/marklist" method="post">
            <input placeholder="Name" type="text" name="name"  /><br/>
            <input placeholder="lat"  type="text" name="lat"   /><br/>
            <input placeholder="lng"  type="text" name="lng"   /><br/>
            <button type="submit" > Add mark </button>
        </form>
    )
};
}

export default PostMark;
