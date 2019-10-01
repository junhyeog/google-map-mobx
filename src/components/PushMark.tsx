import React, { useState } from 'react';
import { Mark } from "../store/store";
import { inject, observer } from "mobx-react";
import styled from 'styled-components'

const PushMark = ({ onPush }: any) => {
    const [newMark, setNewMark] = useState({ name: "T0", lat: 60, lng: 30 });

    const changeInputData = (e) => {
        setNewMark({ ...newMark, [e.target.name]: e.target.value });
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        e.target.reset()
    }

    return (
        <Form onSubmit={onSubmit}>
            <Input placeholder="Name" type="text" name="name" onChange={changeInputData} /><br />
            <Input placeholder="lat" type="text" name="lat" onChange={changeInputData} /><br />
            <Input placeholder="lng" type="text" name="lng" onChange={changeInputData} /><br />
            <Button type="submit" onClick={() => onPush(new Mark(newMark))} > Add mark </Button>
        </Form>
    )
}

export default inject(({ markStore }) => ({
    onPush: markStore.push
}))(observer(PushMark));


const Form=styled.form`
	position: relative;
    width: 100%;
    margin-top: 10%;
    margin-bottom:20%;
`

const Input=styled.input`
    box-sizing: border-box;
    width: 100%;
	padding: 12px 10px 8px;
	border: none;
	border-radius: 0;
	box-shadow: none;
	border-bottom: 1px solid #DDD;
	font-size: 120%;
	outline: none;
	cursor: text;
`
const Button=styled.button`
border: none;
background: #1abc9c;
cursor: pointer;
border-radius: 3px;
padding: 6px;
width: 100%;
color: white;
margin-top: 10px;
box-shadow: 0 3px 6px 0 rgba(0,0,0,0.2);
&:hover {
  box-shadow: 0 6px 6px 0 rgba(0,0,0,0.2);
}
`