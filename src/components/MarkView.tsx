import React from 'react'
import { Mark } from "../store/store";

// interface props{
//     mark:Mark
// }

const MarkView = ({mark}) => {
    return (
        <div>
            <div>
                {mark.name} / {mark.lat} / {mark.lng}
            </div>
        </div>
    )
}
export default MarkView;
