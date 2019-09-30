import * as React from "react";
import MarkList, { Mark } from "../store/store";
// import { observer, inject } from "mobx-react";
import { observer, useObservable } from 'mobx-react-lite'; //observer로 래핑된 함수형 컴포넌트에서 hook을 사용하려면 mobx-react v6이나 lite를 사용해야함


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

// @observer
// class ViewMarkList extends React.Component<MarkListView> {
//   render(){
//     const markList=this.props.markList
//     console.log("hi", markList)
//     return(
//   <div>
//     <ul>
//       {markList.marks.map((mark: Mark) => (
//         <MarkView mark={mark} key={mark.id} />
//       ))}
//     </ul>
//   </div>
//     )};
// }

const ViewMarkList = observer(({ markList }: MarkListView) => {
  const MarkList = useObservable(markList)
  return (
    <div>
      <ul>
        {MarkList.marks.map((mark: Mark) => (
          <MarkView mark={mark} key={mark.id} />
        ))}
      </ul>
    </div>
  )
}
)
// export default observer(() => {
//   const store = useObservable({
//       label: [""],
//       addLabel(index) {
//           store.label.push("1")
//           console.log(store.label);
//       }
//   });
//   return(<div>
//       <div>{store.label}</div>
//       <button style={{display:"block", width:"10vw"}} onClick={e => store.addLabel("preflop")}>New</button> 
//   </div>);
// });

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
