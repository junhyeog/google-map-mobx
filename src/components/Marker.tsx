import * as React from 'react'
import './Marker.css';

interface props {
  color: string,
  lat: string,
  lng: string,
  name: string
}

const Marker = ({ name, color }: props) => {
  return (
    <div className="marker"
      style={{ backgroundColor: color, cursor: 'pointer' }}
      title={name}>
      {name}
    </div>
  );
};

export default Marker;