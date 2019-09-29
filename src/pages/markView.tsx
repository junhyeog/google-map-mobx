import * as React from "react";
import MarkList, { Mark } from "../store/stores";
import { observer, inject } from "mobx-react";

interface MarkListView {
  markList: MarkList;
}

interface MarkViewType {
  mark: Mark;
}

const MarkView = observer(({ mark }: MarkViewType) => (
  <li>
    {mark.name} / lat: {mark.lat} / lng: {mark.lng}
  </li>
));

const ViewMarkList = observer(({ markList }: MarkListView) => (
//const ViewMarkList = observer((markList:MarkList) => (
  <div>
    <ul>
      {markList.marks.map((mark: Mark) => (
        <MarkView mark={mark} key={mark.id} />
      ))}
    </ul>
  </div>
));

export default ViewMarkList;
//   // addMark = (mark: Mark) => {
//   //   store.marks.push(mark);
//   //   console.log(store.marks);
//   // };
//   render() {
//     return (
//       <>
//         <button
//           onClick={e =>
//             // this.addMark(new Mark({ name: "T1", lat: "59.955413", lng: "30.337844" }))
//             this.markList.push()
//           }
//         >
//           Add mark
//       </button>
//         <MarkListView markList={store} />
//       </>
//     )
//   };
// };

// export default AddMark;
