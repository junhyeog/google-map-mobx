import * as React from 'react';
import { Mark } from "../store/store";
import MarkView from "./MarkView";
import { inject, observer } from "mobx-react";
import Map from './GoogleMap';


const MapTemplate = ({marks, onPop}: any) => {
    const marksView = marks.map((mark: Mark) => <MarkView mark={mark} onPop={onPop} key={mark.id} />)
    return (
        <div>
            <div>
                <Map />
            </div>
            <div>
                {marksView}
            </div>
        </div>

    )
}

export default inject(({ markStore }) => ({
    marks: markStore.marks,
    onPop: markStore.pop
  }))(observer(MapTemplate));
