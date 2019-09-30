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
        const newMarks=this.marks
        this.marks=newMarks
        console.log("Push:", mark.name, mark.lat, mark.lng)
        console.log("Remain:", this.marks.length)
    }

    @action
    pop=(mark:Mark)=>{
        this.marks=this.marks.filter(someMark=>someMark !== mark)
        console.log("Pop:", mark.name, mark.lat, mark.lng)
        console.log("Remain:", this.marks.length)
    }
}


export class Mark{
    id=Math.random();
    @observable name:string="";
    @observable lat:string="";
    @observable lng:string=""
    constructor({name: name, lat: lat, lng: lng}) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }
}

autorun(() => {
    console.log("hi from store")
})
