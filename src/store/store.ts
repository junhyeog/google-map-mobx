import { observable, action, autorun } from 'mobx'
import { useStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'
useStaticRendering(isServer)

export default class Markstore{
    @observable marks:Mark[]=[];
    constructor(mark:Mark){
        this.push(mark)
    }

    @action
    push = (mark:Mark)=>{
        this.marks.push(new Mark({name:mark.name, lat:mark.lat, lng:mark.lng }))
    }

    @action
    pop=(mark:Mark)=>{
        this.marks.filter(someMark=>someMark !== mark)
    }
}


export class Mark{
    id=Math.random();
    @observable name:String="";
    @observable lat:String="";
    @observable lng:String=""
    constructor({name: name, lat: lat, lng: lng}) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }
}

autorun(() => {
    console.log("hi from store")
})
