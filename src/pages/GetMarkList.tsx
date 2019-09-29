import * as React from "react";
import axios from "axios";
import ViewMarkList from "./markView"
import {inject} from "mobx-react"
import MarkList, { Mark } from "../store/stores";

interface store {
    markList: MarkList
  }

//@inject('store')
class GetMarkList extends React.Component { // props를 주려면 위에 interface 적용 후 extends React.Component<Props>
    markList= new MarkList()
    getMarkList = e => {
        e.preventDefault();
        axios.get("http://localhost:4000/api/marklist")
            .then(res => {
                this.markList = new MarkList()
                res.data.map((mark) => (
                    // markList.marks.push(new Mark({ name: mark.name, lat: mark.lat, lng: mark.lng }))

                    this.markList.marks.push(new Mark({ name: mark.name, lat: mark.lat, lng: mark.lng }))
                  ))
                
                console.log(this.markList.marks);
                //console.log(markList)
                
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    render() {
        return (
            <div>
                <button onClick={this.getMarkList}> Get </button>
                <ViewMarkList markList={this.markList}/>
            </div >

        )
    };
};

export default GetMarkList;
