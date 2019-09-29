import * as React from "react";
import axios from "axios";
import ViewMarkList from "./markView"
import { inject, observer } from "mobx-react"
import { observable, action, reaction, autorun } from "mobx";
import MarkList, { Mark } from "../store/stores";

interface store{
    markList:MarkList
}

@observer
class GetMarkList extends React.Component<store> { // props를 주려면 위에 interface 적용 후 extends React.Component<Props>
    // @observable markList = new MarkList();
    @observable markList=this.props.markList
    @observable cnt = 0
    @action
    getMarkList = e => {
        this.cnt += 1
        e.preventDefault();
        axios.get("http://localhost:4000/api/marklist")
            .then(res => {
                this.markList = observable(new MarkList())
                res.data.map((mark: Mark) => (
                    // markList.marks.push(new Mark({ name: mark.name, lat: mark.lat, lng: mark.lng }))

                    this.markList.push(new Mark({ name: mark.name, lat: mark.lat, lng: mark.lng }))
                ))

                console.log(this.markList.marks);

                console.log(this.cnt)

            })
            .catch(err => {
                console.log(err);
            });

    };
    
    render() {
        return (
            <div>
                {this.cnt}
                {this.markList.marks}
                <ViewMarkList markList={this.markList} />
                <button onClick={this.getMarkList}> Get </button>

            </div >

        )
    };
};
export default GetMarkList;

const autorun1 = autorun(() => console.log("hihi"))

