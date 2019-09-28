import { observable, autorun } from 'mobx'
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


class MarkList {
    @observable marks = []
    aa = autorun(() => console.log(this.marks))
}

export default MarkList;
