import * as React from 'react';
import MapTemplate from "../components/MapTemplate";
import PushMark from "../components/PushMark";
import Markstore, {Mark} from "../store/store";
// import DevTools from "mobx-react-devtools";
import { Provider } from 'mobx-react';

const mark=new Mark({name:"T0", lat:"60", lng:"30"})
const markStore=new Markstore(mark)

const Index = () => {

    return (
        <Provider markStore={markStore}>
            <div>
                Main page
                <MapTemplate />
                <PushMark />
            </div>
            {/* <DevTools /> */}
        </Provider>
            
    );
}

export default Index;
