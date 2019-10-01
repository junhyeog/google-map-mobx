import * as React from 'react'
import styled from 'styled-components'

interface props {
  color: string,
  lat: string,
  lng: string,
  name: string
}

const Marker = ({ name, color }: props) => {
  return (
    <MarkerDiv
      style={{ backgroundColor: color, cursor: 'pointer' }}
      title={name}>
      {name}
    </MarkerDiv>
  );
};

export default Marker;

const MarkerDiv=styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    background-color: #000;
    border: 2px solid #fff;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    z-index: 1;
    font-size: 10pt;
    color: #fff;
    text-align: center;
    vertical-align: middle;
`

