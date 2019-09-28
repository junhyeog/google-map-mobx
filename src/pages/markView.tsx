import * as React from 'react';
import {Component} from 'react';
import MarkList, {Mark} from '../store/stores';
//import { observer } from "mobx-react";

import { observer, useObservable} from 'mobx-react-lite'; //observer로 래핑된 함수형 컴포넌트에서 hook을 사용하려면 mobx-react v6이나 lite를 사용해야함


interface MarkListView extends Component {
    props: any;
}
  
// @observer
class MarkListView extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.markList.marks.map((mm: Mark) => (
                        <MarkView mark={mm} />
                    ))}
                </ul>
            </div>
        )
    }
}

const MarkView = observer((mark: Mark) => (
    <li>
        {mark.name}  /  lat: {mark.lat}  /  lng: {mark.lng}
    </li>
))


const store = new MarkList();

export default () => {
    const addMark=(mark:Mark)=>{
        store.marks.push(mark);
        console.log(store.marks)
    }
    
    return (<>
        <button onClick={e => addMark(new Mark({name:"T1", lat: "59.955413", lng: "30.337844"}))}>
            Add mark
        </button>
        <MarkListView markList={store} />
    </>);
}
