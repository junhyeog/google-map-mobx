import * as React from 'react';

import { Provider } from 'mobx-react';

import GetMarkList from './GetMarkList';
import PostMark from "./PostMark";
import AddMark from './markView';

import MarkList, { Mark } from "../store/stores";
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';

const store = new MarkList();


const Index = observer(() => {
    return (
        // <Provider store={store}>
            <div>
                Main page<br />
                {/* <GetMarkList /> */}
                <GetMarkList markList={store} />
                {/* <AddMark /> */}
                <PostMark />
            </div>
        // </Provider>
    );
})

export default Index;
