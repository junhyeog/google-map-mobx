import * as React from 'react';
import { Mark } from "../store/store";
import {inject, observer} from 'mobx-react';
import styled from "styled-components";

interface props{
    mark:Mark
    onPop: (mark:Mark)=>void
}

const MarkView = ({mark, onPop}:props) => {
    return (
        <MarkDiv>
            <NameDiv>
                {mark.name} 
            </NameDiv>
            <PosDiv>
                {mark.lat} / {mark.lng}
            </PosDiv>
            <Button onClick={()=>onPop(mark)}>
                X
            </Button>
        </MarkDiv>
    )
}

export default inject(({ markStore }) => ({
    onPop: markStore.pop
}))(observer(MarkView));

const MarkDiv=styled.div`
    text-align:left;
    padding: 21px 0;
    background-color:#fff;
    border-radius:4px;
    position:relative;
    top:0px;
    width: 100%;
    margin-bottom:10px;
    box-shadow: 1px 7px 14px -5px rgba(0,0,0,0.2);
    `

const Button=styled.p`
    position: absolute;
    right: 22px;
    top: 50%;
    width: 14px;
    cursor:pointer;
    height: 14px;
    fill:#878787;
    transform: translateY(-50%);
`
const NameDiv=styled.p`
    color: #3e3e3e;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 8px;
`
const PosDiv=styled.p`
font-size: 14px;
    margin-top: 0;
  margin-bottom: 0;
    color: #878787;
`

