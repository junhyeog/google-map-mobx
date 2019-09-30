import * as React from 'react';
import { Mark } from "../store/store";
import MarkView from "./MarkView";
import { inject, observer } from "mobx-react";


const MapTemplate = ({marks}) => {
    const marksView = marks.map(mark => <MarkView mark={mark} key={mark.id} />)
    return (
        <div>
            <div>
                MAP
            </div>
            <div>
                {marksView}
            </div>
        </div>

    )
}

// **** inject, observer 적용
export default inject(({ markStore }) => ({
    marks: markStore.marks
  }))(observer(MapTemplate));
