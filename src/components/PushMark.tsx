import React, { useState } from 'react';
import { Mark } from "../store/store";
import { inject, observer } from "mobx-react";

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
        <form onSubmit={onSubmit}>
            <input placeholder="Name" type="text" name="name" onChange={changeInputData} /><br />
            <input placeholder="lat" type="text" name="lat" onChange={changeInputData} /><br />
            <input placeholder="lng" type="text" name="lng" onChange={changeInputData} /><br />
            <button type="submit" onClick={() => onPush(new Mark(newMark))} > Add mark </button>
        </form>
    )
}

export default inject(({ markStore }) => ({
    onPush: markStore.push
}))(observer(PushMark));
