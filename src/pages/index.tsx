import * as React from 'react';
import MapTemplate from "../components/MapTemplate";
import Markstore, { Mark } from "../store/store";
import { Provider } from 'mobx-react';
import styled from "styled-components";


const mark = new Mark({ name: "T0", lat: "60", lng: "30" })
const markStore = new Markstore(mark)

const Index = () => {

    return (
        <Provider markStore={markStore}>
            <div>
                <Header>
                    <Title> Google Marking Map </Title>
                    <Subtitle>with mobx, typescript</Subtitle>
                </Header>
                    <MapTemplate />

            </div>
        </Provider>

    );
}

export default Index;

const Title = styled.h2`
    height:30px;
    display:flex;
    margin-left: 10px;
`;
const Subtitle = styled.div`
    height:30px;
    color:grey;
    display:flex;
    margin-top: -10px;
    margin-left: 50px;
`;
const Header = styled.div`
    display:inline-block;
`;
