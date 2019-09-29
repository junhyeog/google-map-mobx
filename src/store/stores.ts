import { observable, action, autorun } from 'mobx'
import { useStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'
useStaticRendering(isServer)

export class Mark{
    id=Math.random();
    @observable name="";
    @observable lat='';
    @observable lng=""
    constructor({name: name, lat: lat, lng: lng}) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }
}

interface MarkType {
    mark: Mark;
  }

export default class MarkList {
    @observable marks:Mark[] = []

    @action push=(mark:Mark)=>{
        this.marks.push(mark)
    }
}
autorun(() => {
    console.log("hi")
})
