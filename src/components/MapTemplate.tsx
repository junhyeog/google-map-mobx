import * as React from 'react';
import { Mark } from "../store/store";
import MarkView from "./MarkView";
import { inject, observer } from "mobx-react";
import Map from './GoogleMap';
import styled from 'styled-components';
import PushMark from "../components/PushMark";


const MapTemplate = ({ marks, onPop }: any) => {
    const marksView = marks.map((mark: Mark) => <MarkView mark={mark} onPop={onPop} key={mark.id} />)
    return (
        <Template>
            <MapDiv>
                <Map />
            </MapDiv>
            <MarkDiv>
                <PushMark />
                {marksView}    
            </MarkDiv>
        </Template>

    )
}

export default inject(({ markStore }) => ({
    marks: markStore.marks,
    onPop: markStore.pop
}))(observer(MapTemplate));

const Template = styled.div`
    width: auto;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
    `;

const MapDiv =styled.div`
    flex: 1;
    background-color:grey;
    `;

const MarkDiv =styled.div`
    width: 11rem;
    margin: 1rem;
    `;    
