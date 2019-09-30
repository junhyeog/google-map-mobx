import * as React from 'react';
import { Mark } from "../store/store";
import {inject, observer} from 'mobx-react';

interface props{
    mark:Mark
    onPop: (mark:Mark)=>void
}

const MarkView = ({mark, onPop}:props) => {
    return (
        <div>
            <div>
                {mark.name} / {mark.lat} / {mark.lng}
            </div>
            <button onClick={()=>onPop(mark)}>
                Delete
            </button>
        </div>
    )
}

export default inject(({ markStore }) => ({
    onPop: markStore.pop
  }))(observer(MarkView));
  